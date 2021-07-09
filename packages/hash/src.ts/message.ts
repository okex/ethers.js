import { Bytes, concat } from "@exchain-ethersproject/bytes";
import { keccak256 } from "@exchain-ethersproject/keccak256";
import { toUtf8Bytes } from "@exchain-ethersproject/strings";

export const messagePrefix = "\x19Ethereum Signed Message:\n";

export function hashMessage(message: Bytes | string): string {
    if (typeof(message) === "string") { message = toUtf8Bytes(message); }
    return keccak256(concat([
        toUtf8Bytes(messagePrefix),
        toUtf8Bytes(String(message.length)),
        message
    ]));
}

