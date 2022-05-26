/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
    ExampleFlashLiquidator,
    ExampleFlashLiquidatorInterface,
} from "../../../../src/contracts/test/ExampleFlashLiquidator";

const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_weth10",
                type: "address",
            },
            {
                internalType: "address",
                name: "_kresko",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "CALLBACK_SUCCESS",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_kreskoUser",
                type: "address",
            },
            {
                internalType: "address",
                name: "_kreskoAssetToRepay",
                type: "address",
            },
            {
                internalType: "address",
                name: "_rewardCollateral",
                type: "address",
            },
        ],
        name: "calculateAmountToFlashLoan",
        outputs: [
            {
                internalType: "uint256",
                name: "amountToFlashLoan",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountToRepay",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "flashBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_kreskoUser",
                type: "address",
            },
            {
                internalType: "address",
                name: "_kreskoAssetToRepay",
                type: "address",
            },
            {
                internalType: "address",
                name: "_rewardCollateral",
                type: "address",
            },
        ],
        name: "flashLiquidate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_kreskoUser",
                type: "address",
            },
            {
                internalType: "address",
                name: "_rewardCollateral",
                type: "address",
            },
            {
                internalType: "address",
                name: "_repayKreskoAsset",
                type: "address",
            },
        ],
        name: "getAssetIndexes",
        outputs: [
            {
                internalType: "uint256",
                name: "collateralIndex",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "krAssetIndex",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "kresko",
        outputs: [
            {
                internalType: "contract IKresko",
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
                name: "initiator",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "onFlashLoan",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "_token",
                type: "address",
            },
        ],
        name: "sendProfits",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "weth10",
        outputs: [
            {
                internalType: "contract IWETH10",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];

const _bytecode =
    "0x60a06040527f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd96080908152503480156200003857600080fd5b506040516200200e3803806200200e83398181016040528101906200005e919062000148565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000180565b60008151905060018060a01b03811681146200014357600080fd5b919050565b600080604083850312156200015c57600080fd5b620001678362000128565b9150620001776020840162000128565b90509250929050565b608051611e6b620001a36000396000818161086701526108c00152611e6b6000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c806384d5682b11610076578063b47ad0881161005b578063b47ad0881461017d578063d77e128c146101ae578063ebbc8d24146101cc576100a3565b806384d5682b146101305780639ecf10a814610161576100a3565b80631f2b3a0c146100a857806323e30c8b146100c45780632b2cdf00146100f45780638237e53814610112575b600080fd5b6100c260048036038101906100bd91906113b0565b6101ea565b005b6100de60048036038101906100d991906113ff565b6103cc565b6040516100eb91906114ad565b60405180910390f35b6100fc61089a565b60405161010991906114be565b60405180910390f35b61011a6108be565b60405161012791906114ad565b60405180910390f35b61014a600480360381019061014591906113b0565b6108e2565b6040516101589291906114e5565b60405180910390f35b61017b600480360381019061017691906114fd565b610ba1565b005b610197600480360381019061019291906113b0565b610d2c565b6040516101a59291906114e5565b60405180910390f35b6101b6611277565b6040516101c39190611524565b60405180910390f35b6101d461129d565b6040516101e1919061154b565b60405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663be2801b5846040518263ffffffff1660e01b8152600401610245919061155c565b602060405180830381865afa158015610262573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610286919061159c565b6102c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102bc906115bf565b60405180910390fd5b6000806102d3858585610d2c565b915091506000858585846040516020016102f094939291906115fd565b604051602081830303815290604052905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635cffe9de3060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1686856040518563ffffffff1660e01b8152600401610380949392919061163f565b6020604051808303816000875af115801561039f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c3919061159c565b50505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461045d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610454906116ca565b60405180910390fd5b60008060008086868101906104729190611708565b935093509350935060008273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016104b5919061155c565b602060405180830381865afa1580156104d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f69190611761565b90508960028190555060008061050d8786886108e2565b91509150600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f970c3b73060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff166002546040518463ffffffff1660e01b81526004016105929392919061177d565b600060405180830381600087803b1580156105ac57600080fd5b505af11580156105c0573d6000803e3d6000fd5b50505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e3f06d7b3088876040518463ffffffff1660e01b81526004016106239392919061177d565b600060405180830381600087803b15801561063d57600080fd5b505af1158015610651573d6000803e3d6000fd5b50505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631593738288888789868860006040518863ffffffff1660e01b81526004016106bd97969594939291906117b6565b600060405180830381600087803b1580156106d757600080fd5b505af11580156106eb573d6000803e3d6000fd5b50505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f5e6546c3060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660025460006040518563ffffffff1660e01b8152600401610773949392919061180f565b600060405180830381600087803b15801561078d57600080fd5b505af11580156107a1573d6000803e3d6000fd5b5050505060008573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016107e0919061155c565b602060405180830381865afa1580156107fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108219190611761565b9050838111610865576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085c9061184f565b60405180910390fd5b7f0000000000000000000000000000000000000000000000000000000000000000985050505050505050509695505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636d38822a876040518263ffffffff1660e01b8152600401610942919061155c565b600060405180830381865afa15801561095f573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061098891906118db565b90506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663efa80e86886040518263ffffffff1660e01b81526004016109e7919061155c565b600060405180830381865afa158015610a04573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610a2d91906118db565b90506000825111610a73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6a90611997565b60405180910390fd5b6000815111610ab7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aae906119d5565b60405180910390fd5b5b8151841015610b27578573ffffffffffffffffffffffffffffffffffffffff16828581518110610aeb57610aea611a13565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff161415610b1457610b27565b8380610b1f90611a3f565b945050610ab8565b5b8151831015610b97578473ffffffffffffffffffffffffffffffffffffffff16818481518110610b5b57610b5a611a13565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff161415610b8457610b97565b8280610b8f90611a3f565b935050610b28565b5050935093915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c28906116ca565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb338373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610c87919061155c565b602060405180830381865afa158015610ca4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc89190611761565b6040518363ffffffff1660e01b8152600401610ce5929190611a5e565b6020604051808303816000875af1158015610d04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d28919061159c565b5050565b6000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637932d4cf8787876040518463ffffffff1660e01b8152600401610d9093929190611a8c565b602060405180830381865afa158015610dad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd19190611b10565b90506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633ae000c060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16670de0b6b3a764000060006040518463ffffffff1660e01b8152600401610e5d93929190611b34565b6040805180830381865afa158015610e79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9d9190611b6b565b5090506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166369a7d52c88670de0b6b3a764000060006040518463ffffffff1660e01b8152600401610f0a93929190611b34565b602060405180830381865afa158015610f27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4b9190611b10565b90506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d7bfcecd896040518263ffffffff1660e01b8152600401610faa919061155c565b608060405180830381865afa158015610fc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610feb9190611ba0565b6000015190506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635390972760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b815260040161106e919061155c565b60a060405180830381865afa15801561108b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110af9190611c28565b6000015190506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d127bad16040518163ffffffff1660e01b8152600401602060405180830381865afa158015611124573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111489190611b10565b90506111818161117361116485896112a390919063ffffffff16565b896112f490919063ffffffff16565b6112a390919063ffffffff16565b6000015197506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166334923cd88d8d6040518363ffffffff1660e01b81526004016111e6929190611ccf565b602060405180830381865afa158015611203573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112279190611761565b9050600061125086611242878b6112a390919063ffffffff16565b6112f490919063ffffffff16565b6000015190508082116112635781611265565b805b98505050505050505050935093915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b6112ab611378565b60405180602001604052806012600a6112c49190611dfc565b6112df8560000151876000015161134c90919063ffffffff16565b6112e99190611e10565b815250905092915050565b6112fc611378565b604051806020016040528061134184600001516113336012600a6113209190611dfc565b886000015161134c90919063ffffffff16565b61136290919063ffffffff16565b815250905092915050565b6000818361135a9190611e38565b905092915050565b600081836113709190611e10565b905092915050565b6040518060200160405280600081525090565b73ffffffffffffffffffffffffffffffffffffffff811681146113ad57600080fd5b50565b6000806000606084860312156113c557600080fd5b83356113d08161138b565b8093505060208401356113e28161138b565b8092505060408401356113f48161138b565b809150509250925092565b60008060008060008060a0878903121561141857600080fd5b86356114238161138b565b8096505060208701356114358161138b565b809550506040870135935060608701359250608087013567ffffffffffffffff8082111561146257600080fd5b818901915089601f83011261147657600080fd5b81358181111561148557600080fd5b8a602082850101111561149757600080fd5b6020830194508093505050509295509295509295565b600060208201905082825292915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff8316825292915050565b60006040820190508382528260208301529392505050565b60006020828403121561150f57600080fd5b813561151a8161138b565b8091505092915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff8316825292915050565b600060208201905082825292915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff8316825292915050565b600081519050801515811461159757600080fd5b919050565b6000602082840312156115ae57600080fd5b6115b782611583565b905092915050565b60208152600d60208201527f216c6971756964617461626c650000000000000000000000000000000000000060408201526000606082019050919050565b600060808201905073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015280851660408401525082606083015295945050505050565b600073ffffffffffffffffffffffffffffffffffffffff8087168352602081871681850152856040850152608060608501528451915081608085015260005b8281101561169d5781818701015160a08287010152818101905061167e565b828111156116af57600060a084870101525b505060a0601f19601f83011684010191505095945050505050565b60208152600460208201527f6e6f6e6f0000000000000000000000000000000000000000000000000000000060408201526000606082019050919050565b6000806000806080858703121561171e57600080fd5b84356117298161138b565b80945050602085013561173b8161138b565b80935050604085013561174d8161138b565b809250506060850135905092959194509250565b60006020828403121561177357600080fd5b8151905092915050565b600060608201905073ffffffffffffffffffffffffffffffffffffffff8086168352808516602084015250826040830152949350505050565b600060e08201905073ffffffffffffffffffffffffffffffffffffffff808a16835280891660208401528760408401528087166060840152508460808301528360a083015282151560c083015298975050505050505050565b600060808201905073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525083604083015282606083015295945050505050565b60208152601060208201527f4641494c3a204e6f2070726f666974730000000000000000000000000000000060408201526000606082019050919050565b634e487b7160e01b600052604160045260246000fd5b60006040519050601f19601f830116810181811067ffffffffffffffff821117156118d1576118d061188d565b5b8060405250919050565b600060208083850312156118ee57600080fd5b825167ffffffffffffffff8082111561190657600080fd5b818501915085601f83011261191a57600080fd5b81518181111561192d5761192c61188d565b5b8060051b915061193e8483016118a3565b808282528582019150858486010193508884111561195b57600080fd5b85850194505b8385101561198857845192506119768361138b565b82825285820191508585019450611961565b80965050505050505092915050565b60208152600c60208201527f21636f6c6c61746572616c73000000000000000000000000000000000000000060408201526000606082019050919050565b60208152600660208201527f216d696e7473000000000000000000000000000000000000000000000000000060408201526000606082019050919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008019821415611a5357611a52611a29565b5b600182019050919050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682528260208301529392505050565b600060608201905073ffffffffffffffffffffffffffffffffffffffff80861683528085166020840152808416604084015250949350505050565b600060208284031215611ad957600080fd5b6040516020810181811067ffffffffffffffff82111715611afd57611afc61188d565b5b8060405250809150825181525092915050565b600060208284031215611b2257600080fd5b611b2c8383611ac7565b905092915050565b600060608201905073ffffffffffffffffffffffffffffffffffffffff851682528360208301528215156040830152949350505050565b60008060408385031215611b7e57600080fd5b611b888484611ac7565b9150611b978460208501611ac7565b90509250929050565b600060808284031215611bb257600080fd5b6040516080810181811067ffffffffffffffff82111715611bd657611bd561188d565b5b8060405250611be58484611ac7565b81526020830151611bf58161138b565b80602083015250611c0860408401611583565b6040820152611c1960608401611583565b60608201528091505092915050565b600060a08284031215611c3a57600080fd5b60405160a0810181811067ffffffffffffffff82111715611c5e57611c5d61188d565b5b8060405250611c6d8484611ac7565b81526020830151611c7d8161138b565b806020830152506040830151611c928161138b565b80604083015250606083015160ff81168114611cad57600080fd5b80606083015250611cc060808401611583565b60808201528091505092915050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff80851683528084166020840152509392505050565b60008060018092508391505b80851115611d47578160001904821115611d2a57611d29611a29565b5b80851615611d385781830292505b818202915084811c9450611d0d565b509250929050565b600082611d5f5760019050611df6565b81611d6d5760009050611df6565b8160018114611d835760028114611d8d57611dab565b6001915050611df6565b60ff841115611d9f57611d9e611a29565b5b6001841b915050611df6565b5060208310610133831016604e8410600b8410161715611dcf5782820a9050611df6565b611dd98383611d01565b8060001904821115611dee57611ded611a29565b5b808202925050505b92915050565b6000611e088383611d4f565b905092915050565b600082611e2d57634e487b7160e01b600052601260045260246000fd5b828204905092915050565b6000816000190483118215151615611e5357611e52611a29565b5b82820290509291505056fea164736f6c634300080a000a";

type ExampleFlashLiquidatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
    xs: ExampleFlashLiquidatorConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExampleFlashLiquidator__factory extends ContractFactory {
    constructor(...args: ExampleFlashLiquidatorConstructorParams) {
        if (isSuperArgs(args)) {
            super(...args);
        } else {
            super(_abi, _bytecode, args[0]);
        }
    }

    override deploy(
        _weth10: string,
        _kresko: string,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ExampleFlashLiquidator> {
        return super.deploy(_weth10, _kresko, overrides || {}) as Promise<ExampleFlashLiquidator>;
    }
    override getDeployTransaction(
        _weth10: string,
        _kresko: string,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): TransactionRequest {
        return super.getDeployTransaction(_weth10, _kresko, overrides || {});
    }
    override attach(address: string): ExampleFlashLiquidator {
        return super.attach(address) as ExampleFlashLiquidator;
    }
    override connect(signer: Signer): ExampleFlashLiquidator__factory {
        return super.connect(signer) as ExampleFlashLiquidator__factory;
    }

    static readonly bytecode = _bytecode;
    static readonly abi = _abi;
    static createInterface(): ExampleFlashLiquidatorInterface {
        return new utils.Interface(_abi) as ExampleFlashLiquidatorInterface;
    }
    static connect(address: string, signerOrProvider: Signer | Provider): ExampleFlashLiquidator {
        return new Contract(address, _abi, signerOrProvider) as ExampleFlashLiquidator;
    }
}
