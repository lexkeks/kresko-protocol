/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Errors, ErrorsInterface } from "../../../../../src/contracts/diamond/errors/Errors";

const _abi = [
    {
        inputs: [],
        name: "ACCOUNT_NOT_LIQUIDATABLE",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ADDRESS_INVALID_COLLATERAL",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ADDRESS_INVALID_FEERECIPIENT",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ADDRESS_INVALID_NRWT",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ADDRESS_INVALID_ORACLE",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ADDRESS_INVALID_REWARD_RECIPIENT",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "COLLATERAL_EXISTS",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "COLLATERAL_INVALID_FACTOR",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "COLLATERAL_WITHDRAW_OVERFLOW",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "CONTRACT_ALREADY_INITIALIZED",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "KRASSET_BURN_AMOUNT_OVERFLOW",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "KRASSET_EXISTS",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "KRASSET_INVALID_FACTOR",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "NOT_OPERATOR",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "NOT_OWNER",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "PARAM_BURN_FEE_TOO_HIGH",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "PARAM_LIQUIDATION_INCENTIVE_HIGH",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "PARAM_LIQUIDATION_INCENTIVE_LOW",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "PARAM_MIN_COLLATERAL_RATIO_LOW",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "PARAM_MIN_DEBT_AMOUNT_LOW",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "POOL_DOESNT_EXIST",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "POOL_EXISTS",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "REWARD_PER_BLOCK_MISSING",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "REWARD_TOKENS_MISSING",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ZERO_ADDRESS",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ZERO_BURN",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ZERO_DEPOSIT",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ZERO_MINT",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ZERO_WITHDRAW",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];

const _bytecode =
    "0x610c1f610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106101d85760003560e01c806350f299891161010e578063a17f8c16116100ac578063ca6d2edf1161007b578063ca6d2edf146104cb578063db19f23b146104e9578063f5b3ee5d14610507578063fd17c2ea14610525576101d8565b8063a17f8c1614610453578063aa1b0e7114610471578063bafe36b11461048f578063c5c97c06146104ad576101d8565b80636d78894d116100e85780636d78894d146103db57806371d78b12146103f95780637250d613146104175780637cc52b3f14610435576101d8565b806350f2998914610381578063538ba4f91461039f57806359a58a10146103bd576101d8565b8063283fb1621161017b57806335d550cb1161015557806335d550cb14610309578063386a38f0146103275780633c131ba61461034557806348bce0fb14610363576101d8565b8063283fb162146102af5780632d33cfa8146102cd57806335cca735146102eb576101d8565b80630422447d116101b75780630422447d1461023757806319ca4b5e1461025557806323b0e2111461027357806327e50dd714610291576101d8565b8062ff3c21146101dd57806301e302f0146101fb57806303f93cf114610219575b600080fd5b6101e5610543565b6040516101f29190610bb8565b60405180910390f35b61020361057c565b6040516102109190610bb8565b60405180910390f35b6102216105b5565b60405161022e9190610bb8565b60405180910390f35b61023f6105ee565b60405161024c9190610bb8565b60405180910390f35b61025d610627565b60405161026a9190610bb8565b60405180910390f35b61027b610660565b6040516102889190610bb8565b60405180910390f35b610299610699565b6040516102a69190610bb8565b60405180910390f35b6102b76106d2565b6040516102c49190610bb8565b60405180910390f35b6102d561070b565b6040516102e29190610bb8565b60405180910390f35b6102f3610744565b6040516103009190610bb8565b60405180910390f35b61031161077d565b60405161031e9190610bb8565b60405180910390f35b61032f6107b6565b60405161033c9190610bb8565b60405180910390f35b61034d6107ef565b60405161035a9190610bb8565b60405180910390f35b61036b610828565b6040516103789190610bb8565b60405180910390f35b610389610861565b6040516103969190610bb8565b60405180910390f35b6103a761089a565b6040516103b49190610bb8565b60405180910390f35b6103c56108d3565b6040516103d29190610bb8565b60405180910390f35b6103e361090c565b6040516103f09190610bb8565b60405180910390f35b610401610945565b60405161040e9190610bb8565b60405180910390f35b61041f61097e565b60405161042c9190610bb8565b60405180910390f35b61043d6109b7565b60405161044a9190610bb8565b60405180910390f35b61045b6109f0565b6040516104689190610bb8565b60405180910390f35b610479610a29565b6040516104869190610bb8565b60405180910390f35b610497610a62565b6040516104a49190610bb8565b60405180910390f35b6104b5610a9b565b6040516104c29190610bb8565b60405180910390f35b6104d3610ad4565b6040516104e09190610bb8565b60405180910390f35b6104f1610b0d565b6040516104fe9190610bb8565b60405180910390f35b61050f610b46565b60405161051c9190610bb8565b60405180910390f35b61052d610b7f565b60405161053a9190610bb8565b60405180910390f35b6040518060400160405280600381526020017f323033000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f323030000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f323031000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f323035000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f313031000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f323133000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f323134000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f333033000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f333034000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f333032000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f323038000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f323032000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f323132000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f323036000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f323135000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f313034000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f313033000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f333031000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f313030000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f323137000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f333030000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f313035000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f323130000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f323034000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f323037000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f313032000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f323039000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f323136000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f323131000000000000000000000000000000000000000000000000000000000081525081565b600060208083528351808285015260005b81811015610be857828187010151604082870101528281019050610bc9565b81811115610bfa576000604083870101525b506040601f19601f830116850101925050509291505056fea164736f6c634300080a000a";

type ErrorsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: ErrorsConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Errors__factory extends ContractFactory {
    constructor(...args: ErrorsConstructorParams) {
        if (isSuperArgs(args)) {
            super(...args);
        } else {
            super(_abi, _bytecode, args[0]);
        }
    }

    override deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Errors> {
        return super.deploy(overrides || {}) as Promise<Errors>;
    }
    override getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
        return super.getDeployTransaction(overrides || {});
    }
    override attach(address: string): Errors {
        return super.attach(address) as Errors;
    }
    override connect(signer: Signer): Errors__factory {
        return super.connect(signer) as Errors__factory;
    }

    static readonly bytecode = _bytecode;
    static readonly abi = _abi;
    static createInterface(): ErrorsInterface {
        return new utils.Interface(_abi) as ErrorsInterface;
    }
    static connect(address: string, signerOrProvider: Signer | Provider): Errors {
        return new Contract(address, _abi, signerOrProvider) as Errors;
    }
}
