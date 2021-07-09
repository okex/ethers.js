import { randomBytes as _randomBytes } from "crypto";

import { arrayify } from "@exchain-ethersproject/bytes";

export function randomBytes(length: number): Uint8Array {
    return arrayify(_randomBytes(length));
}
