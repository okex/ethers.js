"use strict";

import { AbiCoder, checkResultErrors, ConstructorFragment, defaultAbiCoder, ErrorFragment, EventFragment, FormatTypes, Fragment, FunctionFragment, Indexed, Interface, LogDescription, ParamType, Result, TransactionDescription }from "@exchain-ethersproject/abi";
import { getAddress, getCreate2Address, getContractAddress, getIcapAddress, isAddress } from "@exchain-ethersproject/address";
import * as base64 from "@exchain-ethersproject/base64";
import { Base58 as base58 } from "@exchain-ethersproject/basex";
import { arrayify, concat, hexConcat, hexDataSlice, hexDataLength, hexlify, hexStripZeros, hexValue, hexZeroPad, isBytes, isBytesLike, isHexString, joinSignature, zeroPad, splitSignature, stripZeros } from "@exchain-ethersproject/bytes";
import { _TypedDataEncoder, hashMessage, id, isValidName, namehash } from "@exchain-ethersproject/hash";
import { defaultPath, entropyToMnemonic, getAccountPath, HDNode, isValidMnemonic, mnemonicToEntropy, mnemonicToSeed } from "@exchain-ethersproject/hdnode";
import { getJsonWalletAddress } from "@exchain-ethersproject/json-wallets";
import { keccak256 } from "@exchain-ethersproject/keccak256";
import { Logger } from "@exchain-ethersproject/logger";
import { computeHmac, ripemd160, sha256, sha512 } from "@exchain-ethersproject/sha2";
import { keccak256 as solidityKeccak256, pack as solidityPack, sha256 as soliditySha256 } from "@exchain-ethersproject/solidity";
import { randomBytes, shuffled } from "@exchain-ethersproject/random";
import { checkProperties, deepCopy, defineReadOnly, getStatic, resolveProperties, shallowCopy } from "@exchain-ethersproject/properties";
import * as RLP from "@exchain-ethersproject/rlp";
import { computePublicKey, recoverPublicKey, SigningKey } from "@exchain-ethersproject/signing-key";
import { formatBytes32String, nameprep, parseBytes32String, _toEscapedUtf8String, toUtf8Bytes, toUtf8CodePoints, toUtf8String, Utf8ErrorFuncs } from "@exchain-ethersproject/strings";
import { accessListify, computeAddress, parse as parseTransaction, recoverAddress, serialize as serializeTransaction, TransactionTypes } from "@exchain-ethersproject/transactions";
import { commify, formatEther, parseEther, formatUnits, parseUnits } from "@exchain-ethersproject/units";
import { verifyMessage, verifyTypedData } from "@exchain-ethersproject/wallet";
import { _fetchData, fetchJson, poll } from "@exchain-ethersproject/web";

////////////////////////
// Enums

import { SupportedAlgorithm } from "@exchain-ethersproject/sha2";
import { UnicodeNormalizationForm, Utf8ErrorReason } from "@exchain-ethersproject/strings";
import { UnsignedTransaction } from "@exchain-ethersproject/transactions";

////////////////////////
// Types and Interfaces

import { CoerceFunc } from "@exchain-ethersproject/abi";
import { Bytes, BytesLike, Hexable } from "@exchain-ethersproject/bytes"
import { Mnemonic } from "@exchain-ethersproject/hdnode";
import { EncryptOptions, ProgressCallback } from "@exchain-ethersproject/json-wallets";
import { Deferrable } from "@exchain-ethersproject/properties";
import { Utf8ErrorFunc } from "@exchain-ethersproject/strings";
import { AccessList, AccessListish } from "@exchain-ethersproject/transactions";
import { ConnectionInfo, FetchJsonResponse, OnceBlockable, OncePollable, PollOptions } from "@exchain-ethersproject/web";

////////////////////////
// Exports

export {
    AbiCoder,
    defaultAbiCoder,

    Fragment,
    ConstructorFragment,
    ErrorFragment,
    EventFragment,
    FunctionFragment,
    ParamType,
    FormatTypes,

    checkResultErrors,
    Result,

    Logger,

    RLP,

    _fetchData,
    fetchJson,
    poll,

    checkProperties,
    deepCopy,
    defineReadOnly,
    getStatic,
    resolveProperties,
    shallowCopy,

    arrayify,

    concat,
    stripZeros,
    zeroPad,

    isBytes,
    isBytesLike,

    defaultPath,
    HDNode,
    SigningKey,

    Interface,

    LogDescription,
    TransactionDescription,

    base58,
    base64,

    hexlify,
    isHexString,
    hexConcat,
    hexStripZeros,
    hexValue,
    hexZeroPad,
    hexDataLength,
    hexDataSlice,

    nameprep,
    _toEscapedUtf8String,
    toUtf8Bytes,
    toUtf8CodePoints,
    toUtf8String,
    Utf8ErrorFuncs,

    formatBytes32String,
    parseBytes32String,

    hashMessage,
    namehash,
    isValidName,
    id,

    _TypedDataEncoder,

    getAddress,
    getIcapAddress,
    getContractAddress,
    getCreate2Address,
    isAddress,

    formatEther,
    parseEther,

    formatUnits,
    parseUnits,

    commify,

    computeHmac,
    keccak256,
    ripemd160,
    sha256,
    sha512,

    randomBytes,
    shuffled,

    solidityPack,
    solidityKeccak256,
    soliditySha256,

    splitSignature,
    joinSignature,

    accessListify,
    parseTransaction,
    serializeTransaction,
    TransactionTypes,

    getJsonWalletAddress,

    computeAddress,
    recoverAddress,

    computePublicKey,
    recoverPublicKey,

    verifyMessage,
    verifyTypedData,

    getAccountPath,
    mnemonicToEntropy,
    entropyToMnemonic,
    isValidMnemonic,
    mnemonicToSeed,


    ////////////////////////
    // Enums

    SupportedAlgorithm,

    UnicodeNormalizationForm,
    Utf8ErrorReason,

    ////////////////////////
    // Types

    Bytes,
    BytesLike,
    Hexable,

    AccessList,
    AccessListish,
    UnsignedTransaction,

    CoerceFunc,

    Indexed,

    Mnemonic,

    Deferrable,

    Utf8ErrorFunc,

    ConnectionInfo,
    OnceBlockable,
    OncePollable,
    PollOptions,
    FetchJsonResponse,

    EncryptOptions,
    ProgressCallback
}

