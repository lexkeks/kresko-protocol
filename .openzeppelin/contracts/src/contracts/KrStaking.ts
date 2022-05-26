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
    PayableOverrides,
    PopulatedTransaction,
    Signer,
    utils,
} from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";

export declare namespace KrStaking {
    export type RewardStruct = {
        pid: BigNumberish;
        tokens: string[];
        amounts: BigNumberish[];
    };

    export type RewardStructOutput = [BigNumber, string[], BigNumber[]] & {
        pid: BigNumber;
        tokens: string[];
        amounts: BigNumber[];
    };

    export type PoolInfoStruct = {
        depositToken: string;
        allocPoint: BigNumberish;
        lastRewardBlock: BigNumberish;
        accRewardPerShares: BigNumberish[];
        rewardTokens: string[];
    };

    export type PoolInfoStructOutput = [string, BigNumber, BigNumber, BigNumber[], string[]] & {
        depositToken: string;
        allocPoint: BigNumber;
        lastRewardBlock: BigNumber;
        accRewardPerShares: BigNumber[];
        rewardTokens: string[];
    };

    export type UserInfoStruct = {
        amount: BigNumberish;
        rewardDebts: BigNumberish[];
    };

    export type UserInfoStructOutput = [BigNumber, BigNumber[]] & {
        amount: BigNumber;
        rewardDebts: BigNumber[];
    };
}

export interface KrStakingInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "OPERATOR_ROLE()": FunctionFragment;
        "addPool(address[],address,uint128,uint128)": FunctionFragment;
        "allPendingRewards(address)": FunctionFragment;
        "claim(uint256,address)": FunctionFragment;
        "claimFor(address,uint256,address)": FunctionFragment;
        "deposit(address,uint256,uint256)": FunctionFragment;
        "emergencyWithdraw(uint256)": FunctionFragment;
        "getPidFor(address)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initialize(address[],uint256[],address,uint128,uint128)": FunctionFragment;
        "massUpdatePools()": FunctionFragment;
        "pendingRewards(uint256,address)": FunctionFragment;
        "poolInfo(uint256)": FunctionFragment;
        "poolLength()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "rescueNative()": FunctionFragment;
        "rescueNonPoolToken(address,uint256)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "rewardPerBlockFor(address)": FunctionFragment;
        "setPool(uint256,uint128)": FunctionFragment;
        "setRewardPerBlockFor(address,uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "totalAllocPoint()": FunctionFragment;
        "updatePool(uint256)": FunctionFragment;
        "userInfo(uint256,address)": FunctionFragment;
        "withdraw(uint256,uint256,address)": FunctionFragment;
        "withdrawFor(address,uint256,uint256,address)": FunctionFragment;
    };

    getFunction(
        nameOrSignatureOrTopic:
            | "DEFAULT_ADMIN_ROLE"
            | "OPERATOR_ROLE"
            | "addPool"
            | "allPendingRewards"
            | "claim"
            | "claimFor"
            | "deposit"
            | "emergencyWithdraw"
            | "getPidFor"
            | "getRoleAdmin"
            | "grantRole"
            | "hasRole"
            | "initialize"
            | "massUpdatePools"
            | "pendingRewards"
            | "poolInfo"
            | "poolLength"
            | "renounceRole"
            | "rescueNative"
            | "rescueNonPoolToken"
            | "revokeRole"
            | "rewardPerBlockFor"
            | "setPool"
            | "setRewardPerBlockFor"
            | "supportsInterface"
            | "totalAllocPoint"
            | "updatePool"
            | "userInfo"
            | "withdraw"
            | "withdrawFor",
    ): FunctionFragment;

    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "OPERATOR_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "addPool", values: [string[], string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "allPendingRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "claim", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "claimFor", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "deposit", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "emergencyWithdraw", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPidFor", values: [string]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(
        functionFragment: "initialize",
        values: [string[], BigNumberish[], string, BigNumberish, BigNumberish],
    ): string;
    encodeFunctionData(functionFragment: "massUpdatePools", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingRewards", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "poolInfo", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "poolLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "rescueNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "rescueNonPoolToken", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "rewardPerBlockFor", values: [string]): string;
    encodeFunctionData(functionFragment: "setPool", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRewardPerBlockFor", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "totalAllocPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "updatePool", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "userInfo", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "withdrawFor", values: [string, BigNumberish, BigNumberish, string]): string;

    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "OPERATOR_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allPendingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPidFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "massUpdatePools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rescueNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rescueNonPoolToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardPerBlockFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRewardPerBlockFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAllocPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFor", data: BytesLike): Result;

    events: {
        "ClaimRewards(address,address,uint256)": EventFragment;
        "Deposit(address,uint256,uint256)": EventFragment;
        "EmergencyWithdraw(address,uint256,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "Withdraw(address,uint256,uint256)": EventFragment;
    };

    getEvent(nameOrSignatureOrTopic: "ClaimRewards"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface ClaimRewardsEventObject {
    user: string;
    rewardToken: string;
    amount: BigNumber;
}
export type ClaimRewardsEvent = TypedEvent<[string, string, BigNumber], ClaimRewardsEventObject>;

export type ClaimRewardsEventFilter = TypedEventFilter<ClaimRewardsEvent>;

export interface DepositEventObject {
    user: string;
    pid: BigNumber;
    amount: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface EmergencyWithdrawEventObject {
    user: string;
    pid: BigNumber;
    amount: BigNumber;
}
export type EmergencyWithdrawEvent = TypedEvent<[string, BigNumber, BigNumber], EmergencyWithdrawEventObject>;

export type EmergencyWithdrawEventFilter = TypedEventFilter<EmergencyWithdrawEvent>;

export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<[string, string, string], RoleAdminChangedEventObject>;

export type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleGrantedEvent = TypedEvent<[string, string, string], RoleGrantedEventObject>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleRevokedEvent = TypedEvent<[string, string, string], RoleRevokedEventObject>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface WithdrawEventObject {
    user: string;
    pid: BigNumber;
    amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<[string, BigNumber, BigNumber], WithdrawEventObject>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface KrStaking extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;

    interface: KrStakingInterface;

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
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

        OPERATOR_ROLE(overrides?: CallOverrides): Promise<[string]>;

        addPool(
            _rewardTokens: string[],
            _depositToken: string,
            _allocPoint: BigNumberish,
            _startBlock: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        allPendingRewards(
            _account: string,
            overrides?: CallOverrides,
        ): Promise<
            [KrStaking.RewardStructOutput[]] & {
                allRewards: KrStaking.RewardStructOutput[];
            }
        >;

        claim(
            _pid: BigNumberish,
            _rewardRecipient: string,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        claimFor(
            _for: string,
            _pid: BigNumberish,
            _rewardRecipient: string,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        deposit(
            _to: string,
            _pid: BigNumberish,
            _amount: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        emergencyWithdraw(
            _pid: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        getPidFor(
            _depositToken: string,
            overrides?: CallOverrides,
        ): Promise<[BigNumber, boolean] & { pid: BigNumber; found: boolean }>;

        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

        grantRole(
            role: BytesLike,
            account: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;

        initialize(
            _rewardTokens: string[],
            _rewardPerBlocks: BigNumberish[],
            _depositToken: string,
            _allocPoint: BigNumberish,
            _startBlock: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        massUpdatePools(
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        pendingRewards(
            _pid: BigNumberish,
            _user: string,
            overrides?: CallOverrides,
        ): Promise<[KrStaking.RewardStructOutput] & { rewards: KrStaking.RewardStructOutput }>;

        poolInfo(_pid: BigNumberish, overrides?: CallOverrides): Promise<[KrStaking.PoolInfoStructOutput]>;

        poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;

        renounceRole(
            role: BytesLike,
            account: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        rescueNative(overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

        rescueNonPoolToken(
            _tokenToRescue: string,
            _amount: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        revokeRole(
            role: BytesLike,
            account: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        rewardPerBlockFor(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

        setPool(
            _pid: BigNumberish,
            _newAllocPoint: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        setRewardPerBlockFor(
            _rewardToken: string,
            _rewardPerBlock: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

        totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

        updatePool(
            _pid: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        userInfo(
            _pid: BigNumberish,
            _account: string,
            overrides?: CallOverrides,
        ): Promise<[KrStaking.UserInfoStructOutput]>;

        withdraw(
            _pid: BigNumberish,
            _amount: BigNumberish,
            _rewardRecipient: string,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        withdrawFor(
            _for: string,
            _pid: BigNumberish,
            _amount: BigNumberish,
            _rewardRecipient: string,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;
    };

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    OPERATOR_ROLE(overrides?: CallOverrides): Promise<string>;

    addPool(
        _rewardTokens: string[],
        _depositToken: string,
        _allocPoint: BigNumberish,
        _startBlock: BigNumberish,
        overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    allPendingRewards(_account: string, overrides?: CallOverrides): Promise<KrStaking.RewardStructOutput[]>;

    claim(
        _pid: BigNumberish,
        _rewardRecipient: string,
        overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    claimFor(
        _for: string,
        _pid: BigNumberish,
        _rewardRecipient: string,
        overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    deposit(
        _to: string,
        _pid: BigNumberish,
        _amount: BigNumberish,
        overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
        _pid: BigNumberish,
        overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getPidFor(
        _depositToken: string,
        overrides?: CallOverrides,
    ): Promise<[BigNumber, boolean] & { pid: BigNumber; found: boolean }>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;

    initialize(
        _rewardTokens: string[],
        _rewardPerBlocks: BigNumberish[],
        _depositToken: string,
        _allocPoint: BigNumberish,
        _startBlock: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    massUpdatePools(overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    pendingRewards(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<KrStaking.RewardStructOutput>;

    poolInfo(_pid: BigNumberish, overrides?: CallOverrides): Promise<KrStaking.PoolInfoStructOutput>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    rescueNative(overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    rescueNonPoolToken(
        _tokenToRescue: string,
        _amount: BigNumberish,
        overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    revokeRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    rewardPerBlockFor(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    setPool(
        _pid: BigNumberish,
        _newAllocPoint: BigNumberish,
        overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setRewardPerBlockFor(
        _rewardToken: string,
        _rewardPerBlock: BigNumberish,
        overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    updatePool(
        _pid: BigNumberish,
        overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    userInfo(_pid: BigNumberish, _account: string, overrides?: CallOverrides): Promise<KrStaking.UserInfoStructOutput>;

    withdraw(
        _pid: BigNumberish,
        _amount: BigNumberish,
        _rewardRecipient: string,
        overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    withdrawFor(
        _for: string,
        _pid: BigNumberish,
        _amount: BigNumberish,
        _rewardRecipient: string,
        overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

        OPERATOR_ROLE(overrides?: CallOverrides): Promise<string>;

        addPool(
            _rewardTokens: string[],
            _depositToken: string,
            _allocPoint: BigNumberish,
            _startBlock: BigNumberish,
            overrides?: CallOverrides,
        ): Promise<void>;

        allPendingRewards(_account: string, overrides?: CallOverrides): Promise<KrStaking.RewardStructOutput[]>;

        claim(_pid: BigNumberish, _rewardRecipient: string, overrides?: CallOverrides): Promise<void>;

        claimFor(_for: string, _pid: BigNumberish, _rewardRecipient: string, overrides?: CallOverrides): Promise<void>;

        deposit(_to: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

        emergencyWithdraw(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;

        getPidFor(
            _depositToken: string,
            overrides?: CallOverrides,
        ): Promise<[BigNumber, boolean] & { pid: BigNumber; found: boolean }>;

        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;

        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;

        initialize(
            _rewardTokens: string[],
            _rewardPerBlocks: BigNumberish[],
            _depositToken: string,
            _allocPoint: BigNumberish,
            _startBlock: BigNumberish,
            overrides?: CallOverrides,
        ): Promise<void>;

        massUpdatePools(overrides?: CallOverrides): Promise<void>;

        pendingRewards(
            _pid: BigNumberish,
            _user: string,
            overrides?: CallOverrides,
        ): Promise<KrStaking.RewardStructOutput>;

        poolInfo(_pid: BigNumberish, overrides?: CallOverrides): Promise<KrStaking.PoolInfoStructOutput>;

        poolLength(overrides?: CallOverrides): Promise<BigNumber>;

        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;

        rescueNative(overrides?: CallOverrides): Promise<void>;

        rescueNonPoolToken(_tokenToRescue: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;

        rewardPerBlockFor(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

        setPool(_pid: BigNumberish, _newAllocPoint: BigNumberish, overrides?: CallOverrides): Promise<void>;

        setRewardPerBlockFor(
            _rewardToken: string,
            _rewardPerBlock: BigNumberish,
            overrides?: CallOverrides,
        ): Promise<void>;

        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

        totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

        updatePool(_pid: BigNumberish, overrides?: CallOverrides): Promise<KrStaking.PoolInfoStructOutput>;

        userInfo(
            _pid: BigNumberish,
            _account: string,
            overrides?: CallOverrides,
        ): Promise<KrStaking.UserInfoStructOutput>;

        withdraw(
            _pid: BigNumberish,
            _amount: BigNumberish,
            _rewardRecipient: string,
            overrides?: CallOverrides,
        ): Promise<void>;

        withdrawFor(
            _for: string,
            _pid: BigNumberish,
            _amount: BigNumberish,
            _rewardRecipient: string,
            overrides?: CallOverrides,
        ): Promise<void>;
    };

    filters: {
        "ClaimRewards(address,address,uint256)"(
            user?: string | null,
            rewardToken?: string | null,
            amount?: BigNumberish | null,
        ): ClaimRewardsEventFilter;
        ClaimRewards(
            user?: string | null,
            rewardToken?: string | null,
            amount?: BigNumberish | null,
        ): ClaimRewardsEventFilter;

        "Deposit(address,uint256,uint256)"(
            user?: string | null,
            pid?: BigNumberish | null,
            amount?: BigNumberish | null,
        ): DepositEventFilter;
        Deposit(user?: string | null, pid?: BigNumberish | null, amount?: BigNumberish | null): DepositEventFilter;

        "EmergencyWithdraw(address,uint256,uint256)"(
            user?: string | null,
            pid?: BigNumberish | null,
            amount?: BigNumberish | null,
        ): EmergencyWithdrawEventFilter;
        EmergencyWithdraw(
            user?: string | null,
            pid?: BigNumberish | null,
            amount?: BigNumberish | null,
        ): EmergencyWithdrawEventFilter;

        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;

        "RoleAdminChanged(bytes32,bytes32,bytes32)"(
            role?: BytesLike | null,
            previousAdminRole?: BytesLike | null,
            newAdminRole?: BytesLike | null,
        ): RoleAdminChangedEventFilter;
        RoleAdminChanged(
            role?: BytesLike | null,
            previousAdminRole?: BytesLike | null,
            newAdminRole?: BytesLike | null,
        ): RoleAdminChangedEventFilter;

        "RoleGranted(bytes32,address,address)"(
            role?: BytesLike | null,
            account?: string | null,
            sender?: string | null,
        ): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;

        "RoleRevoked(bytes32,address,address)"(
            role?: BytesLike | null,
            account?: string | null,
            sender?: string | null,
        ): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;

        "Withdraw(address,uint256,uint256)"(
            user?: string | null,
            pid?: BigNumberish | null,
            amount?: BigNumberish | null,
        ): WithdrawEventFilter;
        Withdraw(user?: string | null, pid?: BigNumberish | null, amount?: BigNumberish | null): WithdrawEventFilter;
    };

    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

        OPERATOR_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

        addPool(
            _rewardTokens: string[],
            _depositToken: string,
            _allocPoint: BigNumberish,
            _startBlock: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        allPendingRewards(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

        claim(
            _pid: BigNumberish,
            _rewardRecipient: string,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        claimFor(
            _for: string,
            _pid: BigNumberish,
            _rewardRecipient: string,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        deposit(
            _to: string,
            _pid: BigNumberish,
            _amount: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        emergencyWithdraw(
            _pid: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        getPidFor(_depositToken: string, overrides?: CallOverrides): Promise<BigNumber>;

        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

        grantRole(
            role: BytesLike,
            account: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;

        initialize(
            _rewardTokens: string[],
            _rewardPerBlocks: BigNumberish[],
            _depositToken: string,
            _allocPoint: BigNumberish,
            _startBlock: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        massUpdatePools(overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<BigNumber>;

        pendingRewards(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;

        poolInfo(_pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

        poolLength(overrides?: CallOverrides): Promise<BigNumber>;

        renounceRole(
            role: BytesLike,
            account: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        rescueNative(overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<BigNumber>;

        rescueNonPoolToken(
            _tokenToRescue: string,
            _amount: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        revokeRole(
            role: BytesLike,
            account: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        rewardPerBlockFor(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

        setPool(
            _pid: BigNumberish,
            _newAllocPoint: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        setRewardPerBlockFor(
            _rewardToken: string,
            _rewardPerBlock: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

        totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

        updatePool(
            _pid: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        userInfo(_pid: BigNumberish, _account: string, overrides?: CallOverrides): Promise<BigNumber>;

        withdraw(
            _pid: BigNumberish,
            _amount: BigNumberish,
            _rewardRecipient: string,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        withdrawFor(
            _for: string,
            _pid: BigNumberish,
            _amount: BigNumberish,
            _rewardRecipient: string,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;
    };

    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        OPERATOR_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        addPool(
            _rewardTokens: string[],
            _depositToken: string,
            _allocPoint: BigNumberish,
            _startBlock: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        allPendingRewards(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        claim(
            _pid: BigNumberish,
            _rewardRecipient: string,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        claimFor(
            _for: string,
            _pid: BigNumberish,
            _rewardRecipient: string,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        deposit(
            _to: string,
            _pid: BigNumberish,
            _amount: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        emergencyWithdraw(
            _pid: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        getPidFor(_depositToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        grantRole(
            role: BytesLike,
            account: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        initialize(
            _rewardTokens: string[],
            _rewardPerBlocks: BigNumberish[],
            _depositToken: string,
            _allocPoint: BigNumberish,
            _startBlock: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        massUpdatePools(
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        pendingRewards(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        poolInfo(_pid: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        renounceRole(
            role: BytesLike,
            account: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        rescueNative(overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

        rescueNonPoolToken(
            _tokenToRescue: string,
            _amount: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        revokeRole(
            role: BytesLike,
            account: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        rewardPerBlockFor(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        setPool(
            _pid: BigNumberish,
            _newAllocPoint: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        setRewardPerBlockFor(
            _rewardToken: string,
            _rewardPerBlock: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        updatePool(
            _pid: BigNumberish,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        userInfo(_pid: BigNumberish, _account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        withdraw(
            _pid: BigNumberish,
            _amount: BigNumberish,
            _rewardRecipient: string,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        withdrawFor(
            _for: string,
            _pid: BigNumberish,
            _amount: BigNumberish,
            _rewardRecipient: string,
            overrides?: PayableOverrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;
    };
}
