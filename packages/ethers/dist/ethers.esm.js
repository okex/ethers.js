import { BaseContract, Contract, ContractFactory } from '@ethersproject/contracts';
export { BaseContract, Contract, ContractFactory } from '@ethersproject/contracts';
import { BigNumber, FixedNumber } from '@ethersproject/bignumber';
export { BigNumber, FixedNumber } from '@ethersproject/bignumber';
import { Signer, VoidSigner } from '@ethersproject/abstract-signer';
export { Signer, VoidSigner } from '@ethersproject/abstract-signer';
import { verifyMessage, verifyTypedData, Wallet } from '@ethersproject/wallet';
export { Wallet } from '@ethersproject/wallet';
import * as constants from '@ethersproject/constants';
export { constants };
import * as providers from '@ethersproject/providers';
import { getDefaultProvider } from '@ethersproject/providers';
export { providers };
export { getDefaultProvider } from '@ethersproject/providers';
import { wordlists, Wordlist } from '@ethersproject/wordlists';
export { Wordlist, wordlists } from '@ethersproject/wordlists';
import { AbiCoder, defaultAbiCoder, Fragment, ConstructorFragment, ErrorFragment, EventFragment, FunctionFragment, ParamType, FormatTypes, checkResultErrors, Interface, LogDescription, TransactionDescription, Indexed } from '@ethersproject/abi';
import { getAddress, getIcapAddress, getContractAddress, getCreate2Address, isAddress } from '@ethersproject/address';
import * as base64 from '@ethersproject/base64';
import { Base58 } from '@ethersproject/basex';
import { arrayify, concat, stripZeros, zeroPad, isBytes, isBytesLike, hexlify, isHexString, hexConcat, hexStripZeros, hexValue, hexZeroPad, hexDataLength, hexDataSlice, splitSignature, joinSignature } from '@ethersproject/bytes';
import { hashMessage, namehash, isValidName, id, _TypedDataEncoder } from '@ethersproject/hash';
import { defaultPath, HDNode, getAccountPath, mnemonicToEntropy, entropyToMnemonic, isValidMnemonic, mnemonicToSeed } from '@ethersproject/hdnode';
import { getJsonWalletAddress } from '@ethersproject/json-wallets';
import { keccak256 } from '@ethersproject/keccak256';
import { Logger, ErrorCode } from '@ethersproject/logger';
export { ErrorCode as errors } from '@ethersproject/logger';
import { computeHmac, ripemd160, sha256, sha512, SupportedAlgorithm } from '@ethersproject/sha2';
import { pack, keccak256 as keccak256$1, sha256 as sha256$1 } from '@ethersproject/solidity';
import { randomBytes, shuffled } from '@ethersproject/random';
import { checkProperties, deepCopy, defineReadOnly, getStatic, resolveProperties, shallowCopy } from '@ethersproject/properties';
import * as rlp from '@ethersproject/rlp';
import { SigningKey, computePublicKey, recoverPublicKey } from '@ethersproject/signing-key';
import { nameprep, _toEscapedUtf8String, toUtf8Bytes, toUtf8CodePoints, toUtf8String, Utf8ErrorFuncs, formatBytes32String, parseBytes32String, UnicodeNormalizationForm, Utf8ErrorReason } from '@ethersproject/strings';
import { accessListify, parse, serialize, TransactionTypes, computeAddress, recoverAddress } from '@ethersproject/transactions';
import { formatEther, parseEther, formatUnits, parseUnits, commify } from '@ethersproject/units';
import { _fetchData, fetchJson, poll } from '@ethersproject/web';

"use strict";

var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AbiCoder: AbiCoder,
    defaultAbiCoder: defaultAbiCoder,
    Fragment: Fragment,
    ConstructorFragment: ConstructorFragment,
    ErrorFragment: ErrorFragment,
    EventFragment: EventFragment,
    FunctionFragment: FunctionFragment,
    ParamType: ParamType,
    FormatTypes: FormatTypes,
    checkResultErrors: checkResultErrors,
    Logger: Logger,
    RLP: rlp,
    _fetchData: _fetchData,
    fetchJson: fetchJson,
    poll: poll,
    checkProperties: checkProperties,
    deepCopy: deepCopy,
    defineReadOnly: defineReadOnly,
    getStatic: getStatic,
    resolveProperties: resolveProperties,
    shallowCopy: shallowCopy,
    arrayify: arrayify,
    concat: concat,
    stripZeros: stripZeros,
    zeroPad: zeroPad,
    isBytes: isBytes,
    isBytesLike: isBytesLike,
    defaultPath: defaultPath,
    HDNode: HDNode,
    SigningKey: SigningKey,
    Interface: Interface,
    LogDescription: LogDescription,
    TransactionDescription: TransactionDescription,
    base58: Base58,
    base64: base64,
    hexlify: hexlify,
    isHexString: isHexString,
    hexConcat: hexConcat,
    hexStripZeros: hexStripZeros,
    hexValue: hexValue,
    hexZeroPad: hexZeroPad,
    hexDataLength: hexDataLength,
    hexDataSlice: hexDataSlice,
    nameprep: nameprep,
    _toEscapedUtf8String: _toEscapedUtf8String,
    toUtf8Bytes: toUtf8Bytes,
    toUtf8CodePoints: toUtf8CodePoints,
    toUtf8String: toUtf8String,
    Utf8ErrorFuncs: Utf8ErrorFuncs,
    formatBytes32String: formatBytes32String,
    parseBytes32String: parseBytes32String,
    hashMessage: hashMessage,
    namehash: namehash,
    isValidName: isValidName,
    id: id,
    _TypedDataEncoder: _TypedDataEncoder,
    getAddress: getAddress,
    getIcapAddress: getIcapAddress,
    getContractAddress: getContractAddress,
    getCreate2Address: getCreate2Address,
    isAddress: isAddress,
    formatEther: formatEther,
    parseEther: parseEther,
    formatUnits: formatUnits,
    parseUnits: parseUnits,
    commify: commify,
    computeHmac: computeHmac,
    keccak256: keccak256,
    ripemd160: ripemd160,
    sha256: sha256,
    sha512: sha512,
    randomBytes: randomBytes,
    shuffled: shuffled,
    solidityPack: pack,
    solidityKeccak256: keccak256$1,
    soliditySha256: sha256$1,
    splitSignature: splitSignature,
    joinSignature: joinSignature,
    accessListify: accessListify,
    parseTransaction: parse,
    serializeTransaction: serialize,
    TransactionTypes: TransactionTypes,
    getJsonWalletAddress: getJsonWalletAddress,
    computeAddress: computeAddress,
    recoverAddress: recoverAddress,
    computePublicKey: computePublicKey,
    recoverPublicKey: recoverPublicKey,
    verifyMessage: verifyMessage,
    verifyTypedData: verifyTypedData,
    getAccountPath: getAccountPath,
    mnemonicToEntropy: mnemonicToEntropy,
    entropyToMnemonic: entropyToMnemonic,
    isValidMnemonic: isValidMnemonic,
    mnemonicToSeed: mnemonicToSeed,
    SupportedAlgorithm: SupportedAlgorithm,
    UnicodeNormalizationForm: UnicodeNormalizationForm,
    Utf8ErrorReason: Utf8ErrorReason,
    Indexed: Indexed
});

const version = "ethers/5.4.1";

"use strict";
const logger = new Logger(version);

var ethers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Signer: Signer,
    Wallet: Wallet,
    VoidSigner: VoidSigner,
    getDefaultProvider: getDefaultProvider,
    providers: providers,
    BaseContract: BaseContract,
    Contract: Contract,
    ContractFactory: ContractFactory,
    BigNumber: BigNumber,
    FixedNumber: FixedNumber,
    constants: constants,
    errors: ErrorCode,
    logger: logger,
    utils: utils,
    wordlists: wordlists,
    version: version,
    Wordlist: Wordlist
});

"use strict";
try {
    const anyGlobal = window;
    if (anyGlobal._ethers == null) {
        anyGlobal._ethers = ethers;
    }
}
catch (error) { }

export { ethers, logger, utils, version };
//# sourceMappingURL=ethers.esm.js.map
