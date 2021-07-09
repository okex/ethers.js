import { keccak256 } from "@exchain-ethersproject/keccak256";
import { toUtf8Bytes } from "@exchain-ethersproject/strings";
export function id(text) {
    return keccak256(toUtf8Bytes(text));
}
//# sourceMappingURL=id.js.map