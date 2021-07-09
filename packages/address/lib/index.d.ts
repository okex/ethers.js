import { BytesLike } from "@exchain-ethersproject/bytes";
import { BigNumberish } from "@exchain-ethersproject/bignumber";
export declare function getAddress(address: string): string;
export declare function isAddress(address: string): boolean;
export declare function getIcapAddress(address: string): string;
export declare function getContractAddress(transaction: {
    from: string;
    nonce: BigNumberish;
}): string;
export declare function getCreate2Address(from: string, salt: BytesLike, initCodeHash: BytesLike): string;
//# sourceMappingURL=index.d.ts.map