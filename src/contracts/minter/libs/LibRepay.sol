// SPDX-License-Identifier: MIT
pragma solidity >=0.8.14;

// solhint-disable not-rely-on-time

import {Arrays} from "../../libs/Arrays.sol";
import {MinterEvent, InterestRateEvent} from "../../libs/Events.sol";
import {Error} from "../../libs/Errors.sol";
import {WadRay} from "../../libs/WadRay.sol";
import {FixedPoint} from "../../libs/FixedPoint.sol";
import {IERC20Upgradeable} from "../../shared/IERC20Upgradeable.sol";
import {SafeERC20Upgradeable} from "../../shared/SafeERC20Upgradeable.sol";
import {IKreskoAssetIssuer} from "../../kreskoasset/IKreskoAssetIssuer.sol";

import {LibDecimals} from "../libs/LibDecimals.sol";
import {LibCalculation} from "./LibCalculation.sol";
import {KrAsset} from "../MinterTypes.sol";
import {irs} from "../InterestRateState.sol";
import {MinterState} from "../MinterState.sol";

library LibRepay {
    using Arrays for address[];

    using LibDecimals for uint8;
    using LibDecimals for uint256;
    using WadRay for uint256;

    using FixedPoint for FixedPoint.Unsigned;
    using SafeERC20Upgradeable for IERC20Upgradeable;
    using LibCalculation for MinterState;

    /// @notice Repay user kresko asset debt with stability rate updates.
    /// @dev Updates the principal in MinterState and stability rate adjusted values in InterestRateState
    /// @param _kreskoAsset the asset being repaid
    /// @param _anchor the anchor token of the asset being repaid
    /// @param _burnAmount the asset amount being burned
    /// @param _account the account the debt is subtracted from
    function repay(
        MinterState storage self,
        address _kreskoAsset,
        address _anchor,
        uint256 _burnAmount,
        address _account
    ) internal {
        // Update global debt index for the asset
        uint256 newDebtIndex = irs().srAssets[_kreskoAsset].updateDebtIndex();
        // Get the possibly rebalanced amount of destroyed tokens
        uint256 destroyed = IKreskoAssetIssuer(_anchor).destroy(_burnAmount, msg.sender);
        // Calculate the debt index scaled amount
        uint256 amountScaled = destroyed.wadToRay().rayDiv(newDebtIndex);
        require(amountScaled != 0, Error.INVALID_SCALED_AMOUNT);

        // Decrease the principal debt
        self.kreskoAssetDebt[_account][_kreskoAsset] -= destroyed;
        // Decrease the scaled debt and set user asset's last debt index
        irs().srUserInfo[_account][_kreskoAsset].debtScaled -= uint128(amountScaled);
        irs().srUserInfo[_account][_kreskoAsset].lastDebtIndex = uint128(newDebtIndex);
        // Update the stability rate for the asset
        irs().srAssets[_kreskoAsset].updateStabilityRate();
    }

    /**
     * @notice Repays accrued stability rate interest for a single asset
     * @param _account Account to repay interest for
     * @param _kreskoAsset Kresko asset to repay interest for
     * @return kissRepayAmount amount repaid
     */
    function repayFullStabilityRateInterest(
        MinterState storage self,
        address _account,
        address _kreskoAsset
    ) internal returns (uint256 kissRepayAmount) {
        // Update debt index for the asset
        uint256 newDebtIndex = irs().srAssets[_kreskoAsset].updateDebtIndex();
        // Get the accrued interest in repayment token
        (, kissRepayAmount) = self.getKreskoAssetDebtInterest(_account, _kreskoAsset);

        // If no interest has accrued no further operations needed
        // Do not revert because we want the preserve new debt index and stability rate
        if (kissRepayAmount == 0) {
            // Update stability rate for asset
            irs().srAssets[_kreskoAsset].updateStabilityRate();
            return 0;
        }

        // Transfer the accrued interest
        IERC20Upgradeable(irs().kiss).safeTransferFrom(msg.sender, self.feeRecipient, kissRepayAmount);

        // Update scaled values for the user
        irs().srUserInfo[_account][_kreskoAsset].debtScaled = uint128(
            self.getKreskoAssetDebtPrincipal(_account, _kreskoAsset).wadToRay().rayDiv(newDebtIndex)
        );
        irs().srUserInfo[_account][_kreskoAsset].lastDebtIndex = uint128(newDebtIndex);

        // Remove from minted kresko assets if debt is cleared
        if (self.getKreskoAssetDebtPrincipal(_account, _kreskoAsset) == 0) {
            self.mintedKreskoAssets[_account].removeAddress(
                _kreskoAsset,
                self.getMintedKreskoAssetsIndex(_account, _kreskoAsset)
            );
        }

        // Update stability rates
        irs().srAssets[_kreskoAsset].updateStabilityRate();
        // Emit event with the account, asset and amount repaid
        emit InterestRateEvent.StabilityRateInterestRepaid(_account, _kreskoAsset, kissRepayAmount);
    }

    /**
     * @notice Charges the protocol close fee based off the value of the burned asset.
     * @dev Takes the fee from the account's collateral assets. Attempts collateral assets
     *   in reverse order of the account's deposited collateral assets array.
     * @param _account The account to charge the close fee from.
     * @param _kreskoAsset The address of the kresko asset being burned.
     * @param _burnAmount The amount of the kresko asset being burned.
     */
    function chargeCloseFee(
        MinterState storage self,
        address _account,
        address _kreskoAsset,
        uint256 _burnAmount
    ) internal {
        KrAsset memory krAsset = self.kreskoAssets[_kreskoAsset];
        // Calculate the value of the fee according to the value of the krAssets being burned.
        FixedPoint.Unsigned memory feeValue = krAsset.fixedPointUSD(_burnAmount).mul(krAsset.closeFee);

        // Do nothing if the fee value is 0.
        if (feeValue.rawValue == 0) {
            return;
        }

        address[] memory accountCollateralAssets = self.depositedCollateralAssets[_account];
        // Iterate backward through the account's deposited collateral assets to safely
        // traverse the array while still being able to remove elements if necessary.
        // This is because removing the last element of the array does not shift around
        // other elements in the array.

        for (uint256 i = accountCollateralAssets.length - 1; i >= 0; i--) {
            address collateralAssetAddress = accountCollateralAssets[i];

            (uint256 transferAmount, FixedPoint.Unsigned memory feeValuePaid) = self.calcFee(
                collateralAssetAddress,
                _account,
                feeValue,
                i
            );

            // Remove the transferAmount from the stored deposit for the account.
            self.collateralDeposits[_account][collateralAssetAddress] -= self
                .collateralAssets[collateralAssetAddress]
                .toNonRebasingAmount(transferAmount);

            // Transfer the fee to the feeRecipient.
            IERC20Upgradeable(collateralAssetAddress).safeTransfer(self.feeRecipient, transferAmount);
            emit MinterEvent.CloseFeePaid(_account, collateralAssetAddress, transferAmount, feeValuePaid.rawValue);

            feeValue = feeValue.sub(feeValuePaid);
            // If the entire fee has been paid, no more action needed.
            if (feeValue.rawValue == 0) {
                return;
            }
        }
    }

    /**
     * @notice Check that debt repaid does not leave a dust position, if it does:
     * return an amount that pays up to minDebtValue
     * @param _kreskoAsset The address of the kresko asset being burned.
     * @param _burnAmount The amount being burned
     * @param _debtAmount The debt amount of `_account`
     * @return amount == 0 or >= minDebtAmount
     */
    function ensureNotDustPosition(
        MinterState storage self,
        address _kreskoAsset,
        uint256 _burnAmount,
        uint256 _debtAmount
    ) internal view returns (uint256 amount) {
        // If the requested burn would put the user's debt position below the minimum
        // debt value, close up to the minimum debt value instead.
        FixedPoint.Unsigned memory krAssetValue = self.getKrAssetValue(_kreskoAsset, _debtAmount - _burnAmount, true);
        if (krAssetValue.isGreaterThan(0) && krAssetValue.isLessThan(self.minimumDebtValue)) {
            FixedPoint.Unsigned memory minDebtValue = self.minimumDebtValue.div(
                self.kreskoAssets[_kreskoAsset].fixedPointPrice()
            );
            amount = _debtAmount - minDebtValue.rawValue;
        } else {
            amount = _burnAmount;
        }
    }
}
