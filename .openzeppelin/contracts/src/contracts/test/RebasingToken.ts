/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
    BaseContract,
    BigNumber,
    BigNumberish,
    BytesLike,
    CallOverrides,
    ContractTransaction,
    Overrides,
    PopulatedTransaction,
    Signer,
    utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";

export interface RebasingTokenInterface extends utils.Interface {
    functions: {
        "_allowances(address,address)": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "decimals()": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "rebaseFactor()": FunctionFragment;
        "setBalanceOf(address,uint256)": FunctionFragment;
        "setRebaseFactor(uint256)": FunctionFragment;
        "symbol()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };

    getFunction(
        nameOrSignatureOrTopic:
            | "_allowances"
            | "allowance"
            | "approve"
            | "balanceOf"
            | "decimals"
            | "mint"
            | "name"
            | "rebaseFactor"
            | "setBalanceOf"
            | "setRebaseFactor"
            | "symbol"
            | "transfer"
            | "transferFrom",
    ): FunctionFragment;

    encodeFunctionData(functionFragment: "_allowances", values: [string, string]): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "rebaseFactor", values?: undefined): string;
    encodeFunctionData(functionFragment: "setBalanceOf", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRebaseFactor", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;

    decodeFunctionResult(functionFragment: "_allowances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebaseFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRebaseFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;

    events: {};
}

export interface RebasingToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;

    interface: RebasingTokenInterface;

    queryFilter<TEvent extends TypedEvent>(
        event: TypedEventFilter<TEvent>,
        fromBlockOrBlockhash?: string | number | undefined,
        toBlock?: string | number | undefined,
    ): Promise<Array<TEvent>>;

    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;

    functions: {
        _allowances(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;

        allowance(_owner: string, _spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;

        approve(
            _spender: string,
            _amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        balanceOf(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

        decimals(overrides?: CallOverrides): Promise<[number]>;

        mint(
            _account: string,
            _amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        name(overrides?: CallOverrides): Promise<[string]>;

        rebaseFactor(overrides?: CallOverrides): Promise<[BigNumber] & { rawValue: BigNumber }>;

        setBalanceOf(
            _account: string,
            _amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        setRebaseFactor(
            _rebaseFactor: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        symbol(overrides?: CallOverrides): Promise<[string]>;

        transfer(
            _to: string,
            _amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        transferFrom(
            _from: string,
            _to: string,
            _amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;
    };

    _allowances(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    allowance(_owner: string, _spender: string, overrides?: CallOverrides): Promise<BigNumber>;

    approve(
        _spender: string,
        _amount: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    mint(
        _account: string,
        _amount: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<string>;

    rebaseFactor(overrides?: CallOverrides): Promise<BigNumber>;

    setBalanceOf(
        _account: string,
        _amount: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setRebaseFactor(
        _rebaseFactor: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<string>;

    transfer(
        _to: string,
        _amount: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferFrom(
        _from: string,
        _to: string,
        _amount: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    callStatic: {
        _allowances(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

        allowance(_owner: string, _spender: string, overrides?: CallOverrides): Promise<BigNumber>;

        approve(_spender: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

        balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

        decimals(overrides?: CallOverrides): Promise<number>;

        mint(_account: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

        name(overrides?: CallOverrides): Promise<string>;

        rebaseFactor(overrides?: CallOverrides): Promise<BigNumber>;

        setBalanceOf(_account: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

        setRebaseFactor(_rebaseFactor: BigNumberish, overrides?: CallOverrides): Promise<void>;

        symbol(overrides?: CallOverrides): Promise<string>;

        transfer(_to: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

        transferFrom(_from: string, _to: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };

    filters: {};

    estimateGas: {
        _allowances(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

        allowance(_owner: string, _spender: string, overrides?: CallOverrides): Promise<BigNumber>;

        approve(
            _spender: string,
            _amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

        decimals(overrides?: CallOverrides): Promise<BigNumber>;

        mint(
            _account: string,
            _amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        name(overrides?: CallOverrides): Promise<BigNumber>;

        rebaseFactor(overrides?: CallOverrides): Promise<BigNumber>;

        setBalanceOf(
            _account: string,
            _amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        setRebaseFactor(
            _rebaseFactor: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        symbol(overrides?: CallOverrides): Promise<BigNumber>;

        transfer(
            _to: string,
            _amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        transferFrom(
            _from: string,
            _to: string,
            _amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;
    };

    populateTransaction: {
        _allowances(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        allowance(_owner: string, _spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        approve(
            _spender: string,
            _amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        balanceOf(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        mint(
            _account: string,
            _amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        rebaseFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        setBalanceOf(
            _account: string,
            _amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        setRebaseFactor(
            _rebaseFactor: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        transfer(
            _to: string,
            _amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        transferFrom(
            _from: string,
            _to: string,
            _amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;
    };
}
