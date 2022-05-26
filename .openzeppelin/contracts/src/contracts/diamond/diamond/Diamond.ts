/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumberish, BytesLike, Signer, utils } from "ethers";

import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";

export declare namespace IDiamondCut {
    export type FacetCutStruct = {
        facetAddress: string;
        action: BigNumberish;
        functionSelectors: BytesLike[];
    };

    export type FacetCutStructOutput = [string, number, string[]] & {
        facetAddress: string;
        action: number;
        functionSelectors: string[];
    };
}

export declare namespace Diamond {
    export type InitializationStruct = {
        initContract: string;
        initData: BytesLike;
    };

    export type InitializationStructOutput = [string, string] & {
        initContract: string;
        initData: string;
    };
}

export interface DiamondInterface extends utils.Interface {
    functions: {};

    events: {};
}

export interface Diamond extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;

    interface: DiamondInterface;

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

    functions: {};

    callStatic: {};

    filters: {};

    estimateGas: {};

    populateTransaction: {};
}
