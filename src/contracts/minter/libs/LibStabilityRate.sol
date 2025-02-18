// SPDX-License-Identifier: agpl-3.0
pragma solidity >=0.8.14;

import {IKreskoAsset} from "../../kreskoasset/IKreskoAsset.sol";
import {IERC20Upgradeable} from "../../shared/IERC20Upgradeable.sol";

import {FixedPoint} from "../../libs/FixedPoint.sol";
import {WadRay} from "../../libs/WadRay.sol";
import {Error} from "../../libs/Errors.sol";
import {Percentages} from "../../libs/Percentages.sol";
import {LibKrAsset} from "../libs/LibKrAsset.sol";

import {StabilityRateConfig} from "../InterestRateState.sol";
import {ms} from "../MinterStorage.sol";

/* solhint-disable not-rely-on-time */

/**
 * @author Kresko
 * @title AMM price stability rate library, derived from Aave Protocols VariableDebtToken calculations
 * @notice Library for performing stability rate related operations
 */
library LibStabilityRate {
    using WadRay for uint256;
    using WadRay for uint128;
    using Percentages for uint256;
    using FixedPoint for FixedPoint.Unsigned;

    /// @dev Ignoring leap years
    uint256 internal constant SECONDS_PER_YEAR = 365 days;

    /**
     * @notice Cumulates the stability rate from previous update and multiplies the debt index with it.
     * @dev Updates the updated timestamp
     * @dev New debt index cannot overflow uint128
     * @param self configuration for the asset
     * @return newDebtIndex the updated index
     */
    function updateDebtIndex(StabilityRateConfig storage self) internal returns (uint256 newDebtIndex) {
        if (self.asset == address(0)) return WadRay.RAY;

        newDebtIndex = self.debtIndex;
        // only cumulating if there is any assets minted and rate is over 0
        if (IERC20Upgradeable(self.asset).totalSupply() != 0) {
            uint256 cumulatedStabilityRate = self.calculateCompoundedInterest(block.timestamp);
            newDebtIndex = cumulatedStabilityRate.rayMul(self.debtIndex);
            require(newDebtIndex <= type(uint128).max, Error.DEBT_INDEX_OVERFLOW);
            self.debtIndex = uint128(newDebtIndex);
        }

        self.lastUpdateTimestamp = uint40(block.timestamp);
    }

    /**
     * @notice Updates the current stability rate for an asset
     * @dev New stability rate cannot overflow uint128
     * @param self rate configuration for the asset
     */
    function updateStabilityRate(StabilityRateConfig storage self) internal {
        if (self.asset == address(0)) return;

        uint256 stabilityRate = calculateStabilityRate(self);
        require(stabilityRate <= type(uint128).max, Error.STABILITY_RATE_OVERFLOW);
        self.stabilityRate = uint128(stabilityRate);
    }

    /**
     * @notice Get the current price rate between AMM and oracle pricing
     * @dev Raw return value of ammPrice == 0 when no AMM pair exists OR liquidity of the pair does not qualify
     * @param self rate configuration for the asset
     * @return priceRate the current price rate
     */
    function getPriceRate(StabilityRateConfig storage self) internal view returns (uint256 priceRate) {
        FixedPoint.Unsigned memory oraclePrice = ms().getKrAssetValue(self.asset, 1 ether, true);
        FixedPoint.Unsigned memory ammPrice = ms().getKrAssetAMMPrice(self.asset, 1 ether);
        // no pair, no effect
        if (ammPrice.rawValue == 0) {
            return 0;
        }
        return ammPrice.div(oraclePrice).div(10).rawValue;
    }

    /**
     * @notice Calculate new stability rate from the current price rate
     * @dev Separate calculations exist for following cases:
     * case 1: AMM premium > optimal + delta
     * case 2: AMM premium < optimal - delta
     * case 3: AMM premium <= optimal + delta && AMM premium >= optimal - delta
     * @param self rate configuration for the asset
     * @return stabilityRate the current stability rate
     */
    function calculateStabilityRate(StabilityRateConfig storage self) internal view returns (uint256 stabilityRate) {
        uint256 priceRate = self.getPriceRate(); // 0.95 RAY = -5% PREMIUM, 1.05 RAY = +5% PREMIUM

        // Return base rate if no AMM price exists
        if (priceRate == 0) {
            return self.stabilityRateBase;
        }
        // If AMM price > priceRate + delta, eg. AMM price is higher than oracle price
        if (priceRate > self.optimalPriceRate + self.priceRateDelta) {
            uint256 excessRate = priceRate - WadRay.RAY;
            stabilityRate =
                self.stabilityRateBase.rayDiv(priceRate.percentMul(125e2)) +
                ((WadRay.RAY - excessRate).rayMul(self.rateSlope1));
            // If AMM price < pricaRate + delta, AMM price is lower than oracle price
        } else if (priceRate < self.optimalPriceRate - self.priceRateDelta) {
            uint256 multiplier = (WadRay.RAY - priceRate).rayDiv(self.priceRateDelta);
            stabilityRate =
                (self.stabilityRateBase + self.rateSlope1) +
                WadRay.RAY.rayMul(multiplier).rayMul(self.rateSlope2);
            // Default case, AMM price is within optimal range of oracle price
        } else {
            stabilityRate = self.stabilityRateBase + (priceRate.rayMul(self.rateSlope1));
        }
    }

    /**
     * @dev Function to calculate the interest using a compounded interest rate formula
     * To avoid expensive exponentiation, the calculation is performed using a binomial approximation:
     *
     *  (1+x)^n = 1+n*x+[n/2*(n-1)]*x^2+[n/6*(n-1)*(n-2)*x^3...
     *
     * The approximation slightly underpays liquidity providers and undercharges borrowers
     * with the advantage of great gas cost reductions
     * The Aave whitepaper contains reference to the approximation
     * with a table showing the margin of error per different time periods
     *
     * @param self rate configuration for the asset
     * @param _currentTimestamp The timestamp of the last update of the interest
     * @return The interest rate compounded during the timeDelta, in ray
     **/
    function calculateCompoundedInterest(StabilityRateConfig storage self, uint256 _currentTimestamp)
        internal
        view
        returns (uint256)
    {
        //solium-disable-next-line
        uint256 exp = _currentTimestamp - uint256(self.lastUpdateTimestamp);

        if (exp == 0) {
            return WadRay.RAY;
        }

        uint256 expMinusOne;
        uint256 expMinusTwo;
        uint256 basePowerTwo;
        uint256 basePowerThree;
        unchecked {
            expMinusOne = exp - 1;

            expMinusTwo = exp > 2 ? exp - 2 : 0;

            basePowerTwo = self.stabilityRate.rayMul(self.stabilityRate) / (SECONDS_PER_YEAR * SECONDS_PER_YEAR);
            basePowerThree = basePowerTwo.rayMul(self.stabilityRate) / SECONDS_PER_YEAR;
        }

        uint256 secondTerm = exp * expMinusOne * basePowerTwo;
        unchecked {
            secondTerm /= 2;
        }
        uint256 thirdTerm = exp * expMinusOne * expMinusTwo * basePowerThree;
        unchecked {
            thirdTerm /= 6;
        }

        return WadRay.RAY + (self.stabilityRate * exp) / SECONDS_PER_YEAR + secondTerm + thirdTerm;
    }

    /**
     * @dev Returns the ongoing normalized debt index for the borrowers
     * A value of 1e27 means there is no interest. As time passes, the interest is accrued
     * A value of 2*1e27 means that for each unit of debt, one unit worth of interest has been accumulated
     * @param self rate configuration for the asset
     * @return The normalized debt index. expressed in ray
     **/
    function getNormalizedDebtIndex(StabilityRateConfig storage self) internal view returns (uint256) {
        if (self.asset == address(0)) return WadRay.RAY;
        //solium-disable-next-line
        if (self.lastUpdateTimestamp == uint40(block.timestamp)) {
            //if the index was updated in the same block, no need to perform any calculation
            return self.debtIndex;
        }

        return self.calculateCompoundedInterest(block.timestamp).rayMul(self.debtIndex);
    }
}
