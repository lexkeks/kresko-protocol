/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
    OperatorFacet,
    OperatorFacetInterface,
} from "../../../../../../src/contracts/diamond/kresko/facets/OperatorFacet";

const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_operator",
                type: "address",
            },
            {
                internalType: "address",
                name: "_target",
                type: "address",
            },
        ],
        name: "isOperatorFor",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_operator",
                type: "address",
            },
            {
                internalType: "address",
                name: "_target",
                type: "address",
            },
        ],
        name: "toggleOperator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];

const _bytecode =
    "0x608060405234801561001057600080fd5b50610541806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063bdac7ca31461003b578063d95b637114610057575b600080fd5b610055600480360381019061005091906104b0565b610087565b005b610071600480360381019061006c91906104b0565b610111565b60405161007e91906104e3565b60405180910390f35b61008f6101ae565b73ffffffffffffffffffffffffffffffffffffffff166100ad6101e1565b73ffffffffffffffffffffffffffffffffffffffff1614610103576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100fa906104f6565b60405180910390fd5b61010d8282610292565b5050565b600061011b610429565b60000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006101b8610456565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60003073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561028b57600080368080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509050600080369050905073ffffffffffffffffffffffffffffffffffffffff81830151169250505061028f565b3390505b90565b600061029c610429565b60000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615905080610333610429565b60000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508015158273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f42343f44c66ea1eaffa334760d3da2cb731d2a0b3b3e30423df997faa36cc95c60405160405180910390a4505050565b6000807fa1913c34ddada141a5d56c2b5b7d024a07c1db6234ef6660e64a8f3cc6c7ca9e90508091505090565b6000807f080f9836d135d84bdc1ee0b4214e5f2ae76516c41178c6f14a73685c9c3e5f0990508091505090565b60008135905073ffffffffffffffffffffffffffffffffffffffff811681146104ab57600080fd5b919050565b600080604083850312156104c357600080fd5b6104cc83610483565b91506104da60208401610483565b90509250929050565b6000602082019050821515825292915050565b60208152601f60208201527f4469616d6f6e643a204d75737420626520636f6e7472616374206f776e6572006040820152600060608201905091905056fea164736f6c634300080a000a";

type OperatorFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: OperatorFacetConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
    xs.length > 1;

export class OperatorFacet__factory extends ContractFactory {
    constructor(...args: OperatorFacetConstructorParams) {
        if (isSuperArgs(args)) {
            super(...args);
        } else {
            super(_abi, _bytecode, args[0]);
        }
    }

    override deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<OperatorFacet> {
        return super.deploy(overrides || {}) as Promise<OperatorFacet>;
    }
    override getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
        return super.getDeployTransaction(overrides || {});
    }
    override attach(address: string): OperatorFacet {
        return super.attach(address) as OperatorFacet;
    }
    override connect(signer: Signer): OperatorFacet__factory {
        return super.connect(signer) as OperatorFacet__factory;
    }

    static readonly bytecode = _bytecode;
    static readonly abi = _abi;
    static createInterface(): OperatorFacetInterface {
        return new utils.Interface(_abi) as OperatorFacetInterface;
    }
    static connect(address: string, signerOrProvider: Signer | Provider): OperatorFacet {
        return new Contract(address, _abi, signerOrProvider) as OperatorFacet;
    }
}
