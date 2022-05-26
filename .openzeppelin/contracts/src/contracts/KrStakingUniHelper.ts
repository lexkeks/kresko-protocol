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
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";

export interface KrStakingUniHelperInterface extends utils.Interface {
    functions: {
        "addLiquidityAndStake(address,address,uint256,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "claimRewardsMulti(address)": FunctionFragment;
        "factory()": FunctionFragment;
        "router()": FunctionFragment;
        "staking()": FunctionFragment;
        "withdrawAndRemoveLiquidity(address,address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
    };

    getFunction(
        nameOrSignatureOrTopic:
            | "addLiquidityAndStake"
            | "claimRewardsMulti"
            | "factory"
            | "router"
            | "staking"
            | "withdrawAndRemoveLiquidity",
    ): FunctionFragment;

    encodeFunctionData(
        functionFragment: "addLiquidityAndStake",
        values: [string, string, BigNumberish, BigNumberish, BigNumberish, BigNumberish, string, BigNumberish],
    ): string;
    encodeFunctionData(functionFragment: "claimRewardsMulti", values: [string]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "router", values?: undefined): string;
    encodeFunctionData(functionFragment: "staking", values?: undefined): string;
    encodeFunctionData(
        functionFragment: "withdrawAndRemoveLiquidity",
        values: [string, string, BigNumberish, BigNumberish, BigNumberish, string, BigNumberish],
    ): string;

    decodeFunctionResult(functionFragment: "addLiquidityAndStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewardsMulti", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "staking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAndRemoveLiquidity", data: BytesLike): Result;

    events: {
        "ClaimRewardsMulti(address)": EventFragment;
        "LiquidityAndStakeAdded(address,uint256,uint256)": EventFragment;
        "LiquidityAndStakeRemoved(address,uint256,uint256)": EventFragment;
    };

    getEvent(nameOrSignatureOrTopic: "ClaimRewardsMulti"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidityAndStakeAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidityAndStakeRemoved"): EventFragment;
}

export interface ClaimRewardsMultiEventObject {
    to: string;
}
export type ClaimRewardsMultiEvent = TypedEvent<[string], ClaimRewardsMultiEventObject>;

export type ClaimRewardsMultiEventFilter = TypedEventFilter<ClaimRewardsMultiEvent>;

export interface LiquidityAndStakeAddedEventObject {
    to: string;
    amount: BigNumber;
    pid: BigNumber;
}
export type LiquidityAndStakeAddedEvent = TypedEvent<[string, BigNumber, BigNumber], LiquidityAndStakeAddedEventObject>;

export type LiquidityAndStakeAddedEventFilter = TypedEventFilter<LiquidityAndStakeAddedEvent>;

export interface LiquidityAndStakeRemovedEventObject {
    to: string;
    amount: BigNumber;
    pid: BigNumber;
}
export type LiquidityAndStakeRemovedEvent = TypedEvent<
    [string, BigNumber, BigNumber],
    LiquidityAndStakeRemovedEventObject
>;

export type LiquidityAndStakeRemovedEventFilter = TypedEventFilter<LiquidityAndStakeRemovedEvent>;

export interface KrStakingUniHelper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;

    interface: KrStakingUniHelperInterface;

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
        addLiquidityAndStake(
            tokenA: string,
            tokenB: string,
            amountADesired: BigNumberish,
            amountBDesired: BigNumberish,
            amountAMin: BigNumberish,
            amountBMin: BigNumberish,
            to: string,
            deadline: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        claimRewardsMulti(
            to: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        factory(overrides?: CallOverrides): Promise<[string]>;

        router(overrides?: CallOverrides): Promise<[string]>;

        staking(overrides?: CallOverrides): Promise<[string]>;

        withdrawAndRemoveLiquidity(
            tokenA: string,
            tokenB: string,
            liquidity: BigNumberish,
            amountAMin: BigNumberish,
            amountBMin: BigNumberish,
            to: string,
            deadline: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;
    };

    addLiquidityAndStake(
        tokenA: string,
        tokenB: string,
        amountADesired: BigNumberish,
        amountBDesired: BigNumberish,
        amountAMin: BigNumberish,
        amountBMin: BigNumberish,
        to: string,
        deadline: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    claimRewardsMulti(
        to: string,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<string>;

    router(overrides?: CallOverrides): Promise<string>;

    staking(overrides?: CallOverrides): Promise<string>;

    withdrawAndRemoveLiquidity(
        tokenA: string,
        tokenB: string,
        liquidity: BigNumberish,
        amountAMin: BigNumberish,
        amountBMin: BigNumberish,
        to: string,
        deadline: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    callStatic: {
        addLiquidityAndStake(
            tokenA: string,
            tokenB: string,
            amountADesired: BigNumberish,
            amountBDesired: BigNumberish,
            amountAMin: BigNumberish,
            amountBMin: BigNumberish,
            to: string,
            deadline: BigNumberish,
            overrides?: CallOverrides,
        ): Promise<BigNumber>;

        claimRewardsMulti(to: string, overrides?: CallOverrides): Promise<void>;

        factory(overrides?: CallOverrides): Promise<string>;

        router(overrides?: CallOverrides): Promise<string>;

        staking(overrides?: CallOverrides): Promise<string>;

        withdrawAndRemoveLiquidity(
            tokenA: string,
            tokenB: string,
            liquidity: BigNumberish,
            amountAMin: BigNumberish,
            amountBMin: BigNumberish,
            to: string,
            deadline: BigNumberish,
            overrides?: CallOverrides,
        ): Promise<void>;
    };

    filters: {
        "ClaimRewardsMulti(address)"(to?: string | null): ClaimRewardsMultiEventFilter;
        ClaimRewardsMulti(to?: string | null): ClaimRewardsMultiEventFilter;

        "LiquidityAndStakeAdded(address,uint256,uint256)"(
            to?: string | null,
            amount?: BigNumberish | null,
            pid?: BigNumberish | null,
        ): LiquidityAndStakeAddedEventFilter;
        LiquidityAndStakeAdded(
            to?: string | null,
            amount?: BigNumberish | null,
            pid?: BigNumberish | null,
        ): LiquidityAndStakeAddedEventFilter;

        "LiquidityAndStakeRemoved(address,uint256,uint256)"(
            to?: string | null,
            amount?: BigNumberish | null,
            pid?: BigNumberish | null,
        ): LiquidityAndStakeRemovedEventFilter;
        LiquidityAndStakeRemoved(
            to?: string | null,
            amount?: BigNumberish | null,
            pid?: BigNumberish | null,
        ): LiquidityAndStakeRemovedEventFilter;
    };

    estimateGas: {
        addLiquidityAndStake(
            tokenA: string,
            tokenB: string,
            amountADesired: BigNumberish,
            amountBDesired: BigNumberish,
            amountAMin: BigNumberish,
            amountBMin: BigNumberish,
            to: string,
            deadline: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        claimRewardsMulti(to: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

        factory(overrides?: CallOverrides): Promise<BigNumber>;

        router(overrides?: CallOverrides): Promise<BigNumber>;

        staking(overrides?: CallOverrides): Promise<BigNumber>;

        withdrawAndRemoveLiquidity(
            tokenA: string,
            tokenB: string,
            liquidity: BigNumberish,
            amountAMin: BigNumberish,
            amountBMin: BigNumberish,
            to: string,
            deadline: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;
    };

    populateTransaction: {
        addLiquidityAndStake(
            tokenA: string,
            tokenB: string,
            amountADesired: BigNumberish,
            amountBDesired: BigNumberish,
            amountAMin: BigNumberish,
            amountBMin: BigNumberish,
            to: string,
            deadline: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        claimRewardsMulti(
            to: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        staking(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        withdrawAndRemoveLiquidity(
            tokenA: string,
            tokenB: string,
            liquidity: BigNumberish,
            amountAMin: BigNumberish,
            amountBMin: BigNumberish,
            to: string,
            deadline: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;
    };
}
