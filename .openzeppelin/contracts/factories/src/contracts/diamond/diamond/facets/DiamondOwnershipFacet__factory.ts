/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
    DiamondOwnershipFacet,
    DiamondOwnershipFacetInterface,
} from "../../../../../../src/contracts/diamond/diamond/facets/DiamondOwnershipFacet";

const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "PendingOwnershipTransfer",
        type: "event",
    },
    {
        inputs: [],
        name: "acceptOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pendingOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];

const _bytecode =
    "0x608060405234801561001057600080fd5b506106f0806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806379ba5097146100515780638da5cb5b1461005b578063e30c397814610079578063f2fde38b14610097575b600080fd5b6100596100b3565b005b610063610139565b604051610070919061059c565b60405180910390f35b610081610148565b60405161008e919061059c565b60405180910390f35b6100b160048036038101906100ac91906105c3565b610157565b005b6100bb6101df565b73ffffffffffffffffffffffffffffffffffffffff166100d9610212565b73ffffffffffffffffffffffffffffffffffffffff161461012f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161012690610603565b60405180910390fd5b6101376102c3565b565b60006101436103fb565b905090565b60006101526101df565b905090565b61015f6103fb565b73ffffffffffffffffffffffffffffffffffffffff1661017d610212565b73ffffffffffffffffffffffffffffffffffffffff16146101d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ca90610667565b60405180910390fd5b6101dc8161042e565b50565b60006101e961056f565b60010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60003073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102bc57600080368080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509050600080369050905073ffffffffffffffffffffffffffffffffffffffff8183015116925050506102c0565b3390505b90565b60006102cd61056f565b90508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b600061040561056f565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561049e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610495906106a5565b60405180910390fd5b60006104a861056f565b9050818160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f23e1f881d1e797ea57a7247e53536f0bfc37c42e6645b3bdc4b1c9a0e0d8a13360405160405180910390a35050565b6000807f080f9836d135d84bdc1ee0b4214e5f2ae76516c41178c6f14a73685c9c3e5f0990508091505090565b600060208201905073ffffffffffffffffffffffffffffffffffffffff8316825292915050565b6000602082840312156105d557600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146105f957600080fd5b8091505092915050565b60208152602760208201527f4469616d6f6e643a204d7573742062652070656e64696e6720636f6e7472616360408201527f74206f776e65720000000000000000000000000000000000000000000000000060608201526000608082019050919050565b60208152601f60208201527f4469616d6f6e643a204d75737420626520636f6e7472616374206f776e65720060408201526000606082019050919050565b60208152601d60208201527f44533a204f776e65722063616e6e6f7420626520302d616464726573730000006040820152600060608201905091905056fea164736f6c634300080a000a";

type DiamondOwnershipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: DiamondOwnershipFacetConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
    xs.length > 1;

export class DiamondOwnershipFacet__factory extends ContractFactory {
    constructor(...args: DiamondOwnershipFacetConstructorParams) {
        if (isSuperArgs(args)) {
            super(...args);
        } else {
            super(_abi, _bytecode, args[0]);
        }
    }

    override deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<DiamondOwnershipFacet> {
        return super.deploy(overrides || {}) as Promise<DiamondOwnershipFacet>;
    }
    override getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
        return super.getDeployTransaction(overrides || {});
    }
    override attach(address: string): DiamondOwnershipFacet {
        return super.attach(address) as DiamondOwnershipFacet;
    }
    override connect(signer: Signer): DiamondOwnershipFacet__factory {
        return super.connect(signer) as DiamondOwnershipFacet__factory;
    }

    static readonly bytecode = _bytecode;
    static readonly abi = _abi;
    static createInterface(): DiamondOwnershipFacetInterface {
        return new utils.Interface(_abi) as DiamondOwnershipFacetInterface;
    }
    static connect(address: string, signerOrProvider: Signer | Provider): DiamondOwnershipFacet {
        return new Contract(address, _abi, signerOrProvider) as DiamondOwnershipFacet;
    }
}
