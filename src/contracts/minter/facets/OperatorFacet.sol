// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;

import "../interfaces/IOperatorFacet.sol";

import {Error} from "../../shared/Errors.sol";
import {MinterEvent, GeneralEvent} from "../../shared/Events.sol";
import {AccessControl, Role} from "../../shared/AccessControl.sol";
import {ds, DiamondModifiers, MinterModifiers, Meta} from "../../shared/Modifiers.sol";

import "../state/Constants.sol" as MinterConstant;
import {ms, MinterState, FixedPoint, IERC20MetadataUpgradeable} from "../MinterStorage.sol";

/**
 * @title Functionality for `Role.OPERATOR` level actions
 * @author Kresko
 * @notice Can be only initialized by the `Role.ADMIN`
 */

contract OperatorFacet is DiamondModifiers, MinterModifiers, IOperatorFacet {
    /* -------------------------------------------------------------------------- */
    /*                                 Initializer                                */
    /* -------------------------------------------------------------------------- */
    function initialize(MinterInitArgs calldata args) external onlyOwner {
        require(ms().initializations == 0, Error.ALREADY_INITIALIZED);
        AccessControl._grantRole(Role.OPERATOR, args.operator);
        /**
         * @notice Council can be set only by this specific function.
         * Requirements:
         *
         * - address `_council` must implement ERC165 and a specific multisig interfaceId.
         * - reverts if above is not true.
         */
        AccessControl.setupSecurityCouncil(args.council);

        /// @dev Temporarily set operator role for calling the update functions
        AccessControl._grantRole(Role.OPERATOR, msg.sender);

        updateFeeRecipient(args.feeRecipient);
        updateBurnFee(args.burnFee);
        updateLiquidationIncentiveMultiplier(args.liquidationIncentiveMultiplier);
        updateMinimumCollateralizationRatio(args.minimumCollateralizationRatio);
        updateMinimumDebtValue(args.minimumDebtValue);
        updateSecondsUntilStalePrice(args.secondsUntilStalePrice);

        /// @dev Revoke the operator role
        AccessControl.revokeRole(Role.OPERATOR, msg.sender);

        // Add IERC165 support for facets
        ds().supportedInterfaces[type(IOperatorFacet).interfaceId] = true;
        ds().supportedInterfaces[type(IAssetViewFacet).interfaceId] = true;
        ds().supportedInterfaces[type(ILiquidationFacet).interfaceId] = true;
        ds().supportedInterfaces[type(IUserFacet).interfaceId] = true;
        ds().supportedInterfaces[type(ISafetyCouncilFacet).interfaceId] = true;

        ms().initializations = 1;
        ms().domainSeparator = Meta.domainSeparator("Kresko Minter", "V1");
        emit GeneralEvent.Initialized(args.operator, 1);
    }

    /**
     * @notice Adds a collateral asset to the protocol.
     * @dev Only callable by the owner and cannot be called more than once for an asset.
     * @param _collateralAsset The address of the collateral asset.
     * @param _factor The collateral factor of the collateral asset as a raw value for a FixedPoint.Unsigned.
     * Must be <= 1e18.
     * @param _oracle The oracle address for the collateral asset's USD value.
     */
    function addCollateralAsset(
        address _collateralAsset,
        uint256 _factor,
        address _oracle
    ) external nonReentrant onlyRole(Role.OPERATOR) collateralAssetDoesNotExist(_collateralAsset) {
        require(_collateralAsset != address(0), Error.ADDRESS_INVALID_COLLATERAL);
        require(_oracle != address(0), Error.ADDRESS_INVALID_ORACLE);
        require(_factor <= FixedPoint.FP_SCALING_FACTOR, Error.COLLATERAL_INVALID_FACTOR);

        ms().collateralAssets[_collateralAsset] = CollateralAsset({
            factor: FixedPoint.Unsigned(_factor),
            oracle: AggregatorV2V3Interface(_oracle),
            underlyingRebasingToken: address(0), /// @todo Rebasing for everything
            exists: true,
            decimals: IERC20MetadataUpgradeable(_collateralAsset).decimals()
        });
        emit MinterEvent.CollateralAssetAdded(_collateralAsset, _factor, _oracle);
    }

    /**
     * @notice Updates a previously added collateral asset.
     * @dev Only callable by the owner.
     * @param _collateralAsset The address of the collateral asset.
     * @param _factor The new collateral factor as a raw value for a FixedPoint.Unsigned. Must be <= 1e18.
     * @param _oracle The new oracle address for the collateral asset.
     */
    function updateCollateralAsset(
        address _collateralAsset,
        uint256 _factor,
        address _oracle
    ) external onlyRole(Role.OPERATOR) collateralAssetExists(_collateralAsset) {
        require(_oracle != address(0), Error.ADDRESS_INVALID_ORACLE);
        // Setting the factor to 0 effectively sunsets a collateral asset, which is intentionally allowed.
        require(_factor <= FixedPoint.FP_SCALING_FACTOR, Error.COLLATERAL_INVALID_FACTOR);

        ms().collateralAssets[_collateralAsset].factor = FixedPoint.Unsigned(_factor);
        ms().collateralAssets[_collateralAsset].oracle = AggregatorV2V3Interface(_oracle);
        emit MinterEvent.CollateralAssetUpdated(_collateralAsset, _factor, _oracle);
    }

    /* -------------------------------------------------------------------------- */
    /*                                    Write                                   */
    /* -------------------------------------------------------------------------- */
    /**
     * @notice Adds a Kresko asset to the protocol.
     * @dev Only callable by the owner and cannot be called more than once for a given symbol.
     * @param _kreskoAsset The address of the Kresko asset.
     * @param _kFactor The k-factor of the Kresko asset as a raw value for a FixedPoint.Unsigned. Must be >= 1e18.
     * @param _oracle The oracle address for the Kresko asset.
     * @param _supplyLimit The initial market capitalization USD limit for the Kresko asset.
     */
    function addKreskoAsset(
        address _kreskoAsset,
        uint256 _kFactor,
        address _oracle,
        uint256 _supplyLimit
    ) external onlyRole(Role.OPERATOR) kreskoAssetDoesNotExist(_kreskoAsset) {
        require(_kFactor >= FixedPoint.FP_SCALING_FACTOR, Error.KRASSET_INVALID_FACTOR);
        require(_oracle != address(0), Error.ADDRESS_INVALID_ORACLE);

        // The diamond needs the operator role
        IKreskoAsset kreskoAsset = IKreskoAsset(_kreskoAsset);
        require(kreskoAsset.hasRole(Role.OPERATOR, address(this)), Error.NOT_OPERATOR);

        // Deploy KreskoAsset contract and store its details.
        ms().kreskoAssets[_kreskoAsset] = KrAsset({
            kFactor: FixedPoint.Unsigned(_kFactor),
            oracle: AggregatorV2V3Interface(_oracle),
            exists: true,
            mintable: true,
            supplyLimit: _supplyLimit
        });
        emit MinterEvent.KreskoAssetAdded(_kreskoAsset, _kFactor, _oracle, _supplyLimit);
    }

    /**
     * @notice Updates the k-factor of a previously added Kresko asset.
     * @dev Only callable by the owner.
     * @param _kreskoAsset The address of the Kresko asset.
     * @param _kFactor The new k-factor as a raw value for a FixedPoint.Unsigned. Must be >= 1e18.
     * @param _oracle The new oracle address for the Kresko asset's USD value.
     * @param _mintable The new mintable value.
     * @param _supplyLimit The new market capitalization USD limit.
     */
    function updateKreskoAsset(
        address _kreskoAsset,
        uint256 _kFactor,
        address _oracle,
        bool _mintable,
        uint256 _supplyLimit
    ) external onlyRole(Role.OPERATOR) kreskoAssetExistsMaybeNotMintable(_kreskoAsset) {
        require(_kFactor >= FixedPoint.FP_SCALING_FACTOR, Error.KRASSET_INVALID_FACTOR);
        require(_oracle != address(0), Error.ADDRESS_INVALID_ORACLE);

        KrAsset memory krAsset = ms().kreskoAssets[_kreskoAsset];
        krAsset.kFactor = FixedPoint.Unsigned(_kFactor);
        krAsset.oracle = AggregatorV2V3Interface(_oracle);
        krAsset.mintable = _mintable;
        krAsset.supplyLimit = _supplyLimit;

        ms().kreskoAssets[_kreskoAsset] = krAsset;

        emit MinterEvent.KreskoAssetUpdated(_kreskoAsset, _kFactor, _oracle, _mintable, _supplyLimit);
    }

    /**
     * @notice Updates the burn fee.
     * @param _burnFee The new burn fee as a raw value for a FixedPoint.Unsigned.
     */
    function updateBurnFee(uint256 _burnFee) public override onlyRole(Role.OPERATOR) {
        require(_burnFee <= MinterConstant.MAX_BURN_FEE, Error.PARAM_BURN_FEE_TOO_HIGH);
        ms().burnFee = FixedPoint.Unsigned(_burnFee);
        emit MinterEvent.BurnFeeUpdated(_burnFee);
    }

    /**
     * @notice Updates the fee recipient.
     * @param _feeRecipient The new fee recipient.
     */
    function updateFeeRecipient(address _feeRecipient) public override onlyRole(Role.OPERATOR) {
        require(_feeRecipient != address(0), Error.ADDRESS_INVALID_FEERECIPIENT);
        ms().feeRecipient = _feeRecipient;
        emit MinterEvent.FeeRecipientUpdated(_feeRecipient);
    }

    /**
     * @notice Updates the liquidation incentive multiplier.
     * @param _liquidationIncentiveMultiplier The new liquidation incentive multiplie.
     */
    function updateLiquidationIncentiveMultiplier(uint256 _liquidationIncentiveMultiplier)
        public
        override
        onlyRole(Role.OPERATOR)
    {
        require(
            _liquidationIncentiveMultiplier >= MinterConstant.MIN_LIQUIDATION_INCENTIVE_MULTIPLIER,
            Error.PARAM_LIQUIDATION_INCENTIVE_LOW
        );
        require(
            _liquidationIncentiveMultiplier <= MinterConstant.MAX_LIQUIDATION_INCENTIVE_MULTIPLIER,
            Error.PARAM_LIQUIDATION_INCENTIVE_HIGH
        );
        ms().liquidationIncentiveMultiplier = FixedPoint.Unsigned(_liquidationIncentiveMultiplier);
        emit MinterEvent.LiquidationIncentiveMultiplierUpdated(_liquidationIncentiveMultiplier);
    }

    /**
     * @dev Updates the contract's collateralization ratio.
     * @param _minimumCollateralizationRatio The new minimum collateralization ratio as a raw value
     * for a FixedPoint.Unsigned.
     */
    function updateMinimumCollateralizationRatio(uint256 _minimumCollateralizationRatio)
        public
        override
        onlyRole(Role.OPERATOR)
    {
        require(
            _minimumCollateralizationRatio >= MinterConstant.MIN_COLLATERALIZATION_RATIO,
            Error.PARAM_MIN_COLLATERAL_RATIO_LOW
        );
        ms().minimumCollateralizationRatio = FixedPoint.Unsigned(_minimumCollateralizationRatio);
        emit MinterEvent.MinimumCollateralizationRatioUpdated(_minimumCollateralizationRatio);
    }

    /**
     * @dev Updates the contract's minimum debt value.
     * @param _minimumDebtValue The new minimum debt value as a raw value for a FixedPoint.Unsigned.
     */
    function updateMinimumDebtValue(uint256 _minimumDebtValue) public override onlyRole(Role.OPERATOR) {
        require(_minimumDebtValue <= MinterConstant.MAX_DEBT_VALUE, Error.PARAM_MIN_DEBT_AMOUNT_HIGH);
        ms().minimumDebtValue = FixedPoint.Unsigned(_minimumDebtValue);
        emit MinterEvent.MinimumDebtValueUpdated(_minimumDebtValue);
    }

    /**
     * @dev Updates the contract's seconds until stale price value
     * @param _secondsUntilStalePrice Seconds until price is considered stale.
     */
    function updateSecondsUntilStalePrice(uint256 _secondsUntilStalePrice) public onlyRole(Role.OPERATOR) {
        ms().secondsUntilStalePrice = _secondsUntilStalePrice;
        emit MinterEvent.SecondsUntilStalePriceUpdated(_secondsUntilStalePrice);
    }
}
