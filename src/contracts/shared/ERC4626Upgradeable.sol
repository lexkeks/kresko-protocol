// SPDX-License-Identifier: MIT
pragma solidity >=0.8.14;

import {FixedPointMathLib} from "@rari-capital/solmate/src/utils/FixedPointMathLib.sol";

import "./SafeERC20Upgradeable.sol";
import "../krAsset/KreskoAsset.sol";

/* solhint-disable func-name-mixedcase */
/* solhint-disable no-empty-blocks */
/* solhint-disable func-visibility */

/// @notice Minimal ERC4626 tokenized Vault implementation.
/// @author Solmate (https://github.com/Rari-Capital/solmate/blob/main/src/mixins/ERC4626.sol)
abstract contract ERC4626Upgradeable is ERC20Upgradeable {
    using SafeERC20Upgradeable for KreskoAsset;
    using FixedPointMathLib for uint256;

    /* -------------------------------------------------------------------------- */
    /*                                   Events                                   */
    /* -------------------------------------------------------------------------- */

    event Deposit(address indexed caller, address indexed owner, uint256 assets, uint256 shares);

    event Withdraw(
        address indexed caller,
        address indexed receiver,
        address indexed owner,
        uint256 assets,
        uint256 shares
    );

    /* -------------------------------------------------------------------------- */
    /*                                 Immutables                                 */
    /* -------------------------------------------------------------------------- */

    KreskoAsset public immutable asset;

    constructor(KreskoAsset _asset) payable {
        asset = _asset;
    }

    function __ERC4626Upgradeable_init(
        ERC20Upgradeable _asset,
        string memory _name,
        string memory _symbol
    ) internal onlyInitializing {
        __ERC20Upgradeable_init(_name, _symbol, _asset.decimals());
    }

    /* -------------------------------------------------------------------------- */
    /*                             BORROW/REPAY LOGIX                             */
    /* -------------------------------------------------------------------------- */

    function borrow(uint256 assets, address receiver) public virtual returns (uint256 shares) {
        // Check for rounding error since we round down in previewDeposit.
        require((shares = previewDeposit(assets)) != 0, "ZERO_SHARES");

        // Mint
        _mint(asset.kresko(), shares);
        asset.mint(receiver, assets);

        emit Deposit(msg.sender, receiver, assets, shares);

        _afterDeposit(assets, shares);
    }

    /* -------------------------------------------------------------------------- */
    /*                          DEPOSIT/WITHDRAWAL LOGIC                          */
    /* -------------------------------------------------------------------------- */

    function deposit(uint256 assets, address receiver) public virtual returns (uint256 shares) {
        // Check for rounding error since we round down in previewDeposit.
        require((shares = previewDeposit(assets)) != 0, "ZERO_SHARES");

        // Need to transfer before minting or ERC777s could reenter.
        asset.safeTransferFrom(msg.sender, address(this), assets);

        _mint(receiver, shares);

        emit Deposit(msg.sender, receiver, assets, shares);

        _afterDeposit(assets, shares);
    }

    function mint(uint256 shares, address receiver) public virtual returns (uint256 assets) {
        assets = previewMint(shares); // No need to check for rounding error, previewMint rounds up.

        // Need to transfer before minting or ERC777s could reenter.
        asset.safeTransferFrom(msg.sender, address(this), assets);

        _mint(receiver, shares);

        emit Deposit(msg.sender, receiver, assets, shares);

        _afterDeposit(assets, shares);
    }

    function withdraw(
        uint256 assets,
        address receiver,
        address owner
    ) public virtual returns (uint256 shares) {
        shares = previewWithdraw(assets); // No need to check for rounding error, previewWithdraw rounds up.

        if (msg.sender != owner) {
            uint256 allowed = _allowances[owner][msg.sender]; // Saves gas for limited approvals.

            if (allowed != type(uint256).max) _allowances[owner][msg.sender] = allowed - shares;
        }

        _beforeWithdraw(assets, shares);

        _burn(owner, shares);

        emit Withdraw(msg.sender, receiver, owner, assets, shares);

        asset.safeTransfer(receiver, assets);
    }

    function redeem(
        uint256 shares,
        address receiver,
        address owner
    ) public virtual returns (uint256 assets) {
        if (msg.sender != owner) {
            uint256 allowed = _allowances[owner][msg.sender]; // Saves gas for limited approvals.

            if (allowed != type(uint256).max) _allowances[owner][msg.sender] = allowed - shares;
        }

        // Check for rounding error since we round down in previewRedeem.
        require((assets = previewRedeem(shares)) != 0, "ZERO_ASSETS");

        _beforeWithdraw(assets, shares);

        _burn(owner, shares);

        emit Withdraw(msg.sender, receiver, owner, assets, shares);

        asset.safeTransfer(receiver, assets);
    }

    /* -------------------------------------------------------------------------- */
    /*                              ACCOUNTING LOGIC                              */
    /* -------------------------------------------------------------------------- */

    function totalAssets() public view virtual returns (uint256);

    function convertToShares(uint256 assets) public view virtual returns (uint256) {
        uint256 supply = _totalSupply; // Saves an extra SLOAD if totalSupply is non-zero.

        return supply == 0 ? assets : assets.mulDivDown(supply, totalAssets());
    }

    function convertToAssets(uint256 shares) public view virtual returns (uint256) {
        uint256 supply = _totalSupply; // Saves an extra SLOAD if _totalSupply is non-zero.

        return supply == 0 ? shares : shares.mulDivDown(totalAssets(), supply);
    }

    function previewDeposit(uint256 assets) public view virtual returns (uint256) {
        return convertToShares(assets);
    }

    function previewMint(uint256 shares) public view virtual returns (uint256) {
        uint256 supply = _totalSupply; // Saves an extra SLOAD if _totalSupply is non-zero.

        return supply == 0 ? shares : shares.mulDivUp(totalAssets(), supply);
    }

    function previewWithdraw(uint256 assets) public view virtual returns (uint256) {
        uint256 supply = _totalSupply; // Saves an extra SLOAD if _totalSupply is non-zero.

        return supply == 0 ? assets : assets.mulDivUp(supply, totalAssets());
    }

    function previewRedeem(uint256 shares) public view virtual returns (uint256) {
        return convertToAssets(shares);
    }

    /* -------------------------------------------------------------------------- */
    /*                       DEPOSIT/WITHDRAWAL LIMIT LOGIC                       */
    /* -------------------------------------------------------------------------- */

    function maxDeposit(address) public view virtual returns (uint256) {
        return type(uint256).max;
    }

    function maxMint(address) public view virtual returns (uint256) {
        return type(uint256).max;
    }

    function maxWithdraw(address owner) public view virtual returns (uint256) {
        return convertToAssets(_balances[owner]);
    }

    function maxRedeem(address owner) public view virtual returns (uint256) {
        return _balances[owner];
    }

    /* -------------------------------------------------------------------------- */
    /*                            INTERNAL HOOKS LOGIC                            */
    /* -------------------------------------------------------------------------- */

    function _beforeWithdraw(uint256 assets, uint256 shares) internal virtual {}

    function _afterDeposit(uint256 assets, uint256 shares) internal virtual {}
}
