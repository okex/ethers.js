"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.id = void 0;
var keccak256_1 = require("@exchain-ethersproject/keccak256");
var strings_1 = require("@exchain-ethersproject/strings");
function id(text) {
    return keccak256_1.keccak256(strings_1.toUtf8Bytes(text));
}
exports.id = id;
//# sourceMappingURL=id.js.map