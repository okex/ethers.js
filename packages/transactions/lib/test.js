"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var assert_1 = __importDefault(require("assert"));
describe('Test parse', function () {
    it('parses transaction function', function () {
        // Transaction: 0x820cc57bc77be44d8f4f024a18e18f64a8b6e62a82a3d7897db5970dbe181ba1
        var rawTx = "0xf86c808405f5e10082520894f76b10a1f318825173ad9f83f112e570782bd83e893635c9adc5dea000008033a0d65f035fdf5ca18659445ec384aa775280b86d9ca7c4e352ea02a660536bade6a0095fc765cb672e54069672eba41f6488b73ce7d235f113b537f8860f87928963";
        var tx = index_1.parse(rawTx);
        console.log(tx);
        assert_1.default.equal(tx.hash, "0xbe648799632a6db88b81fdd48830087f2695f6190c63771e732f29a565b82b56");
    });
});
//# sourceMappingURL=test.js.map