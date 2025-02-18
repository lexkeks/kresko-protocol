import * as deploymentsJson from "./deployments/deployments.json";
import * as oracleJson from "./deployments/oracles.json"
export interface ContractExport {
    address: string;
    abi: any[];
    linkedData?: any;
}

export interface Export {
    chainId: string;
    name: string;
    contracts: { [name: string]: ContractExport };
}

export type MultiExport = {
    [chainId: string]: Export[];
  };
export type Oracles = {
    asset: string;
    assetType: string
    feed: string;
    marketstatus: string;
    pricefeed: string;
}[]

const deployments: MultiExport = deploymentsJson;

const oracles: Oracles = oracleJson;

export * from "./types";
export { deployments };
export { oracles };
export default deployments;
