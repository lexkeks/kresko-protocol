import { fromFixedPoint, toFixedPoint } from "@utils";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deploy, getNamedAccounts } = hre;

    const { admin } = await getNamedAccounts();

    const [dollarOracle] = await deploy<BasicOracle>("DollarOracle", {
        contract: "BasicOracle",
        from: admin,
        args: [admin],
    });

    await dollarOracle.deployed();

    let tx = await dollarOracle.setValue(toFixedPoint(1));
    await tx.wait();

    const dollarPrice = await dollarOracle.value();

    console.log("Dollar price set at: ", Number(fromFixedPoint(dollarPrice)));

    const [wethOracle] = await deploy<BasicOracle>("WethOracle", {
        contract: "BasicOracle",
        from: admin,
        args: [admin],
    });

    await wethOracle.deployed();

    tx = await wethOracle.setValue(toFixedPoint(4010));
    await tx.wait();
    const wethPrice = await wethOracle.value();

    console.log("Eth price set at: ", Number(fromFixedPoint(wethPrice)));

    const [oilOracle] = await deploy<BasicOracle>("OilOracle", {
        contract: "BasicOracle",
        from: admin,
        args: [admin],
    });

    await oilOracle.deployed();

    tx = await oilOracle.setValue(toFixedPoint(75));
    await tx.wait();
    const oilPrice = await oilOracle.value();

    console.log("Oil price set at: ", Number(fromFixedPoint(oilPrice)));

    const [goldOracle] = await deploy<BasicOracle>("GoldOracle", {
        contract: "BasicOracle",
        from: admin,
        args: [admin],
    });

    await goldOracle.deployed();

    tx = await goldOracle.setValue(toFixedPoint(1783));
    await tx.wait();
    const goldPrice = await goldOracle.value();

    console.log("Gold/oz price set at: ", Number(fromFixedPoint(goldPrice)));

    const [silverOracle] = await deploy<BasicOracle>("SilverOracle", {
        contract: "BasicOracle",
        from: admin,
        args: [admin],
    });

    await silverOracle.deployed();
    tx = await silverOracle.setValue(toFixedPoint(22));
    await tx.wait();

    const silverPrice = await silverOracle.value();
    console.log("Silver/oz price set at: ", Number(fromFixedPoint(silverPrice)));
};
export default func;
func.tags = ["aurora", "oracle"];
