/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Role } from "@utils/test";
import hre from "hardhat";
import { anchorTokenPrefix } from "@deploy-config/shared";

export async function createKrAsset(name: string, symbol, decimals = 18) {
    const { deployer } = await hre.ethers.getNamedSigners();
    const kresko = hre.Diamond;
    const deploy = hre.deploy;

    const anchorSymbol = anchorTokenPrefix + symbol;

    const kreskoAssetInitArgs = [name, symbol, decimals, deployer.address, kresko.address];

    const [KreskoAsset] = await deploy<KreskoAsset>(symbol, {
        from: deployer.address,
        log: true,
        contract: "KreskoAsset",
        proxy: {
            owner: deployer.address,
            proxyContract: "OptimizedTransparentProxy",
            execute: {
                methodName: "initialize",
                args: kreskoAssetInitArgs,
            },
        },
    });

    const kreskoAssetAnchorInitArgs = [KreskoAsset.address, name, anchorSymbol, deployer.address];

    const [KreskoAssetAnchor] = await hre.deploy(anchorSymbol, {
        from: deployer.address,
        log: true,
        contract: "KreskoAssetAnchor",
        args: [KreskoAsset.address],
        proxy: {
            owner: deployer.address,
            proxyContract: "OptimizedTransparentProxy",
            execute: {
                methodName: "initialize",
                args: kreskoAssetAnchorInitArgs,
            },
        },
    });

    await KreskoAsset.grantRole(Role.OPERATOR, KreskoAssetAnchor.address);

    const asset: KrAsset = {
        address: KreskoAsset.address,
        contract: KreskoAsset,
        anchor: KreskoAssetAnchor,
        deployArgs: {
            name,
            symbol,
            decimals,
            anchorSymbol,
        },
    };

    const found = hre.krAssets.findIndex(c => c.address === asset.address);
    if (found === -1) {
        hre.krAssets.push(asset);
        hre.allAssets.push(asset);
    } else {
        hre.krAssets = hre.krAssets.map(c => (c.address === c.address ? asset : c));
        hre.allAssets = hre.allAssets.map(c => (c.address === asset.address && c.collateral ? asset : c));
    }
    return asset;
}
