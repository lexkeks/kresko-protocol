import { toBig } from "@utils/numbers";
import { deployWithSignatures, getLogger } from "@utils/deployment";
import { task, types } from "hardhat/config";
import { TaskArguments } from "hardhat/types";
import { KrStaking } from "types";

task("deploy:staking")
    .addParam("stakingToken", "Address of the token to be staked")
    .addParam("rewardTokens", "Addresses of the tokens to be rewarded, separate by ,")
    .addParam("rewardPerBlocks", "Tokens rewarded per block, separate by ,")
    .addOptionalParam("wait", "wait confirmations", 1, types.int)
    .addOptionalParam("log", "log information", true, types.boolean)
    .setAction(async function (taskArgs: TaskArguments, hre) {
        const { getNamedAccounts } = hre;
        const { deployer } = await getNamedAccounts();
        const deploy = deployWithSignatures(hre);
        const { stakingToken, rewardTokens, rewardPerBlocks, wait, log } = taskArgs;
        const logger = getLogger("latestAnswer", log);
        const rewardTokenArr = rewardTokens.split(",");
        const rewardPerBlocksArr = rewardPerBlocks.split(",");

        if (rewardTokenArr.length !== rewardPerBlocksArr.length) {
            logger.error("Must provide reward per block for each token");
            throw new Error();
        } else {
            const [Staking] = await deploy<KrStaking>("KrStaking", {
                from: deployer,
                waitConfirmations: wait,
                log: true,
                proxy: {
                    owner: deployer,
                    proxyContract: "OptimizedTransparentProxy",
                    execute: {
                        methodName: "initialize",
                        args: [
                            rewardTokenArr,
                            rewardPerBlocksArr.map((val: string) => toBig(Number(val))),
                            stakingToken,
                            1000,
                        ],
                    },
                },
            });
            logger.success(
                "Succesfully deployed Staking with",
                rewardTokenArr.length,
                "reward tokens",
                "rewardPerBlocks:",
                rewardPerBlocksArr.join(" - "),
            );
            return Staking;
        }
    });
