(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@ethersproject/contracts'), require('@ethersproject/bignumber'), require('@ethersproject/abstract-signer'), require('@ethersproject/wallet'), require('@ethersproject/constants'), require('@ethersproject/providers'), require('@ethersproject/wordlists'), require('@ethersproject/abi'), require('@ethersproject/address'), require('@ethersproject/base64'), require('@ethersproject/basex'), require('@ethersproject/bytes'), require('@ethersproject/hash'), require('@ethersproject/hdnode'), require('@ethersproject/json-wallets'), require('@ethersproject/keccak256'), require('@ethersproject/logger'), require('@ethersproject/sha2'), require('@ethersproject/solidity'), require('@ethersproject/random'), require('@ethersproject/properties'), require('@ethersproject/rlp'), require('@ethersproject/signing-key'), require('@ethersproject/strings'), require('@ethersproject/transactions'), require('@ethersproject/units'), require('@ethersproject/web')) :
	typeof define === 'function' && define.amd ? define(['@ethersproject/contracts', '@ethersproject/bignumber', '@ethersproject/abstract-signer', '@ethersproject/wallet', '@ethersproject/constants', '@ethersproject/providers', '@ethersproject/wordlists', '@ethersproject/abi', '@ethersproject/address', '@ethersproject/base64', '@ethersproject/basex', '@ethersproject/bytes', '@ethersproject/hash', '@ethersproject/hdnode', '@ethersproject/json-wallets', '@ethersproject/keccak256', '@ethersproject/logger', '@ethersproject/sha2', '@ethersproject/solidity', '@ethersproject/random', '@ethersproject/properties', '@ethersproject/rlp', '@ethersproject/signing-key', '@ethersproject/strings', '@ethersproject/transactions', '@ethersproject/units', '@ethersproject/web'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ethers = factory(global.contracts_1, global.bignumber_1, global.abstract_signer_1, global.wallet_1, global.require$$0$1, global.require$$1$1, global.wordlists_1, global.abi_1, global.address_1, global.require$$0, global.basex_1, global.bytes_1, global.hash_1, global.hdnode_1, global.json_wallets_1, global.keccak256_1, global.logger_1, global.sha2_1, global.solidity_1, global.random_1, global.properties_1, global.require$$1, global.signing_key_1, global.strings_1, global.transactions_1, global.units_1, global.web_1));
}(this, (function (contracts_1, bignumber_1, abstract_signer_1, wallet_1, require$$0$1, require$$1$1, wordlists_1, abi_1, address_1, require$$0, basex_1, bytes_1, hash_1, hdnode_1, json_wallets_1, keccak256_1, logger_1, sha2_1, solidity_1, random_1, properties_1, require$$1, signing_key_1, strings_1, transactions_1, units_1, web_1) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var contracts_1__default = /*#__PURE__*/_interopDefaultLegacy(contracts_1);
	var bignumber_1__default = /*#__PURE__*/_interopDefaultLegacy(bignumber_1);
	var abstract_signer_1__default = /*#__PURE__*/_interopDefaultLegacy(abstract_signer_1);
	var wallet_1__default = /*#__PURE__*/_interopDefaultLegacy(wallet_1);
	var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
	var require$$1__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$1$1);
	var wordlists_1__default = /*#__PURE__*/_interopDefaultLegacy(wordlists_1);
	var abi_1__default = /*#__PURE__*/_interopDefaultLegacy(abi_1);
	var address_1__default = /*#__PURE__*/_interopDefaultLegacy(address_1);
	var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
	var basex_1__default = /*#__PURE__*/_interopDefaultLegacy(basex_1);
	var bytes_1__default = /*#__PURE__*/_interopDefaultLegacy(bytes_1);
	var hash_1__default = /*#__PURE__*/_interopDefaultLegacy(hash_1);
	var hdnode_1__default = /*#__PURE__*/_interopDefaultLegacy(hdnode_1);
	var json_wallets_1__default = /*#__PURE__*/_interopDefaultLegacy(json_wallets_1);
	var keccak256_1__default = /*#__PURE__*/_interopDefaultLegacy(keccak256_1);
	var logger_1__default = /*#__PURE__*/_interopDefaultLegacy(logger_1);
	var sha2_1__default = /*#__PURE__*/_interopDefaultLegacy(sha2_1);
	var solidity_1__default = /*#__PURE__*/_interopDefaultLegacy(solidity_1);
	var random_1__default = /*#__PURE__*/_interopDefaultLegacy(random_1);
	var properties_1__default = /*#__PURE__*/_interopDefaultLegacy(properties_1);
	var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
	var signing_key_1__default = /*#__PURE__*/_interopDefaultLegacy(signing_key_1);
	var strings_1__default = /*#__PURE__*/_interopDefaultLegacy(strings_1);
	var transactions_1__default = /*#__PURE__*/_interopDefaultLegacy(transactions_1);
	var units_1__default = /*#__PURE__*/_interopDefaultLegacy(units_1);
	var web_1__default = /*#__PURE__*/_interopDefaultLegacy(web_1);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function getDefaultExportFromNamespaceIfPresent (n) {
		return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
	}

	function getDefaultExportFromNamespaceIfNotNamed (n) {
		return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
	}

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var utils = createCommonjsModule(function (module, exports) {
	"use strict";
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.formatBytes32String = exports.Utf8ErrorFuncs = exports.toUtf8String = exports.toUtf8CodePoints = exports.toUtf8Bytes = exports._toEscapedUtf8String = exports.nameprep = exports.hexDataSlice = exports.hexDataLength = exports.hexZeroPad = exports.hexValue = exports.hexStripZeros = exports.hexConcat = exports.isHexString = exports.hexlify = exports.base64 = exports.base58 = exports.TransactionDescription = exports.LogDescription = exports.Interface = exports.SigningKey = exports.HDNode = exports.defaultPath = exports.isBytesLike = exports.isBytes = exports.zeroPad = exports.stripZeros = exports.concat = exports.arrayify = exports.shallowCopy = exports.resolveProperties = exports.getStatic = exports.defineReadOnly = exports.deepCopy = exports.checkProperties = exports.poll = exports.fetchJson = exports._fetchData = exports.RLP = exports.Logger = exports.checkResultErrors = exports.FormatTypes = exports.ParamType = exports.FunctionFragment = exports.EventFragment = exports.ErrorFragment = exports.ConstructorFragment = exports.Fragment = exports.defaultAbiCoder = exports.AbiCoder = void 0;
	exports.Indexed = exports.Utf8ErrorReason = exports.UnicodeNormalizationForm = exports.SupportedAlgorithm = exports.mnemonicToSeed = exports.isValidMnemonic = exports.entropyToMnemonic = exports.mnemonicToEntropy = exports.getAccountPath = exports.verifyTypedData = exports.verifyMessage = exports.recoverPublicKey = exports.computePublicKey = exports.recoverAddress = exports.computeAddress = exports.getJsonWalletAddress = exports.TransactionTypes = exports.serializeTransaction = exports.parseTransaction = exports.accessListify = exports.joinSignature = exports.splitSignature = exports.soliditySha256 = exports.solidityKeccak256 = exports.solidityPack = exports.shuffled = exports.randomBytes = exports.sha512 = exports.sha256 = exports.ripemd160 = exports.keccak256 = exports.computeHmac = exports.commify = exports.parseUnits = exports.formatUnits = exports.parseEther = exports.formatEther = exports.isAddress = exports.getCreate2Address = exports.getContractAddress = exports.getIcapAddress = exports.getAddress = exports._TypedDataEncoder = exports.id = exports.isValidName = exports.namehash = exports.hashMessage = exports.parseBytes32String = void 0;

	Object.defineProperty(exports, "AbiCoder", { enumerable: true, get: function () { return abi_1__default['default'].AbiCoder; } });
	Object.defineProperty(exports, "checkResultErrors", { enumerable: true, get: function () { return abi_1__default['default'].checkResultErrors; } });
	Object.defineProperty(exports, "ConstructorFragment", { enumerable: true, get: function () { return abi_1__default['default'].ConstructorFragment; } });
	Object.defineProperty(exports, "defaultAbiCoder", { enumerable: true, get: function () { return abi_1__default['default'].defaultAbiCoder; } });
	Object.defineProperty(exports, "ErrorFragment", { enumerable: true, get: function () { return abi_1__default['default'].ErrorFragment; } });
	Object.defineProperty(exports, "EventFragment", { enumerable: true, get: function () { return abi_1__default['default'].EventFragment; } });
	Object.defineProperty(exports, "FormatTypes", { enumerable: true, get: function () { return abi_1__default['default'].FormatTypes; } });
	Object.defineProperty(exports, "Fragment", { enumerable: true, get: function () { return abi_1__default['default'].Fragment; } });
	Object.defineProperty(exports, "FunctionFragment", { enumerable: true, get: function () { return abi_1__default['default'].FunctionFragment; } });
	Object.defineProperty(exports, "Indexed", { enumerable: true, get: function () { return abi_1__default['default'].Indexed; } });
	Object.defineProperty(exports, "Interface", { enumerable: true, get: function () { return abi_1__default['default'].Interface; } });
	Object.defineProperty(exports, "LogDescription", { enumerable: true, get: function () { return abi_1__default['default'].LogDescription; } });
	Object.defineProperty(exports, "ParamType", { enumerable: true, get: function () { return abi_1__default['default'].ParamType; } });
	Object.defineProperty(exports, "TransactionDescription", { enumerable: true, get: function () { return abi_1__default['default'].TransactionDescription; } });

	Object.defineProperty(exports, "getAddress", { enumerable: true, get: function () { return address_1__default['default'].getAddress; } });
	Object.defineProperty(exports, "getCreate2Address", { enumerable: true, get: function () { return address_1__default['default'].getCreate2Address; } });
	Object.defineProperty(exports, "getContractAddress", { enumerable: true, get: function () { return address_1__default['default'].getContractAddress; } });
	Object.defineProperty(exports, "getIcapAddress", { enumerable: true, get: function () { return address_1__default['default'].getIcapAddress; } });
	Object.defineProperty(exports, "isAddress", { enumerable: true, get: function () { return address_1__default['default'].isAddress; } });
	var base64 = __importStar(require$$0__default['default']);
	exports.base64 = base64;

	Object.defineProperty(exports, "base58", { enumerable: true, get: function () { return basex_1__default['default'].Base58; } });

	Object.defineProperty(exports, "arrayify", { enumerable: true, get: function () { return bytes_1__default['default'].arrayify; } });
	Object.defineProperty(exports, "concat", { enumerable: true, get: function () { return bytes_1__default['default'].concat; } });
	Object.defineProperty(exports, "hexConcat", { enumerable: true, get: function () { return bytes_1__default['default'].hexConcat; } });
	Object.defineProperty(exports, "hexDataSlice", { enumerable: true, get: function () { return bytes_1__default['default'].hexDataSlice; } });
	Object.defineProperty(exports, "hexDataLength", { enumerable: true, get: function () { return bytes_1__default['default'].hexDataLength; } });
	Object.defineProperty(exports, "hexlify", { enumerable: true, get: function () { return bytes_1__default['default'].hexlify; } });
	Object.defineProperty(exports, "hexStripZeros", { enumerable: true, get: function () { return bytes_1__default['default'].hexStripZeros; } });
	Object.defineProperty(exports, "hexValue", { enumerable: true, get: function () { return bytes_1__default['default'].hexValue; } });
	Object.defineProperty(exports, "hexZeroPad", { enumerable: true, get: function () { return bytes_1__default['default'].hexZeroPad; } });
	Object.defineProperty(exports, "isBytes", { enumerable: true, get: function () { return bytes_1__default['default'].isBytes; } });
	Object.defineProperty(exports, "isBytesLike", { enumerable: true, get: function () { return bytes_1__default['default'].isBytesLike; } });
	Object.defineProperty(exports, "isHexString", { enumerable: true, get: function () { return bytes_1__default['default'].isHexString; } });
	Object.defineProperty(exports, "joinSignature", { enumerable: true, get: function () { return bytes_1__default['default'].joinSignature; } });
	Object.defineProperty(exports, "zeroPad", { enumerable: true, get: function () { return bytes_1__default['default'].zeroPad; } });
	Object.defineProperty(exports, "splitSignature", { enumerable: true, get: function () { return bytes_1__default['default'].splitSignature; } });
	Object.defineProperty(exports, "stripZeros", { enumerable: true, get: function () { return bytes_1__default['default'].stripZeros; } });

	Object.defineProperty(exports, "_TypedDataEncoder", { enumerable: true, get: function () { return hash_1__default['default']._TypedDataEncoder; } });
	Object.defineProperty(exports, "hashMessage", { enumerable: true, get: function () { return hash_1__default['default'].hashMessage; } });
	Object.defineProperty(exports, "id", { enumerable: true, get: function () { return hash_1__default['default'].id; } });
	Object.defineProperty(exports, "isValidName", { enumerable: true, get: function () { return hash_1__default['default'].isValidName; } });
	Object.defineProperty(exports, "namehash", { enumerable: true, get: function () { return hash_1__default['default'].namehash; } });

	Object.defineProperty(exports, "defaultPath", { enumerable: true, get: function () { return hdnode_1__default['default'].defaultPath; } });
	Object.defineProperty(exports, "entropyToMnemonic", { enumerable: true, get: function () { return hdnode_1__default['default'].entropyToMnemonic; } });
	Object.defineProperty(exports, "getAccountPath", { enumerable: true, get: function () { return hdnode_1__default['default'].getAccountPath; } });
	Object.defineProperty(exports, "HDNode", { enumerable: true, get: function () { return hdnode_1__default['default'].HDNode; } });
	Object.defineProperty(exports, "isValidMnemonic", { enumerable: true, get: function () { return hdnode_1__default['default'].isValidMnemonic; } });
	Object.defineProperty(exports, "mnemonicToEntropy", { enumerable: true, get: function () { return hdnode_1__default['default'].mnemonicToEntropy; } });
	Object.defineProperty(exports, "mnemonicToSeed", { enumerable: true, get: function () { return hdnode_1__default['default'].mnemonicToSeed; } });

	Object.defineProperty(exports, "getJsonWalletAddress", { enumerable: true, get: function () { return json_wallets_1__default['default'].getJsonWalletAddress; } });

	Object.defineProperty(exports, "keccak256", { enumerable: true, get: function () { return keccak256_1__default['default'].keccak256; } });

	Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return logger_1__default['default'].Logger; } });

	Object.defineProperty(exports, "computeHmac", { enumerable: true, get: function () { return sha2_1__default['default'].computeHmac; } });
	Object.defineProperty(exports, "ripemd160", { enumerable: true, get: function () { return sha2_1__default['default'].ripemd160; } });
	Object.defineProperty(exports, "sha256", { enumerable: true, get: function () { return sha2_1__default['default'].sha256; } });
	Object.defineProperty(exports, "sha512", { enumerable: true, get: function () { return sha2_1__default['default'].sha512; } });

	Object.defineProperty(exports, "solidityKeccak256", { enumerable: true, get: function () { return solidity_1__default['default'].keccak256; } });
	Object.defineProperty(exports, "solidityPack", { enumerable: true, get: function () { return solidity_1__default['default'].pack; } });
	Object.defineProperty(exports, "soliditySha256", { enumerable: true, get: function () { return solidity_1__default['default'].sha256; } });

	Object.defineProperty(exports, "randomBytes", { enumerable: true, get: function () { return random_1__default['default'].randomBytes; } });
	Object.defineProperty(exports, "shuffled", { enumerable: true, get: function () { return random_1__default['default'].shuffled; } });

	Object.defineProperty(exports, "checkProperties", { enumerable: true, get: function () { return properties_1__default['default'].checkProperties; } });
	Object.defineProperty(exports, "deepCopy", { enumerable: true, get: function () { return properties_1__default['default'].deepCopy; } });
	Object.defineProperty(exports, "defineReadOnly", { enumerable: true, get: function () { return properties_1__default['default'].defineReadOnly; } });
	Object.defineProperty(exports, "getStatic", { enumerable: true, get: function () { return properties_1__default['default'].getStatic; } });
	Object.defineProperty(exports, "resolveProperties", { enumerable: true, get: function () { return properties_1__default['default'].resolveProperties; } });
	Object.defineProperty(exports, "shallowCopy", { enumerable: true, get: function () { return properties_1__default['default'].shallowCopy; } });
	var RLP = __importStar(require$$1__default['default']);
	exports.RLP = RLP;

	Object.defineProperty(exports, "computePublicKey", { enumerable: true, get: function () { return signing_key_1__default['default'].computePublicKey; } });
	Object.defineProperty(exports, "recoverPublicKey", { enumerable: true, get: function () { return signing_key_1__default['default'].recoverPublicKey; } });
	Object.defineProperty(exports, "SigningKey", { enumerable: true, get: function () { return signing_key_1__default['default'].SigningKey; } });

	Object.defineProperty(exports, "formatBytes32String", { enumerable: true, get: function () { return strings_1__default['default'].formatBytes32String; } });
	Object.defineProperty(exports, "nameprep", { enumerable: true, get: function () { return strings_1__default['default'].nameprep; } });
	Object.defineProperty(exports, "parseBytes32String", { enumerable: true, get: function () { return strings_1__default['default'].parseBytes32String; } });
	Object.defineProperty(exports, "_toEscapedUtf8String", { enumerable: true, get: function () { return strings_1__default['default']._toEscapedUtf8String; } });
	Object.defineProperty(exports, "toUtf8Bytes", { enumerable: true, get: function () { return strings_1__default['default'].toUtf8Bytes; } });
	Object.defineProperty(exports, "toUtf8CodePoints", { enumerable: true, get: function () { return strings_1__default['default'].toUtf8CodePoints; } });
	Object.defineProperty(exports, "toUtf8String", { enumerable: true, get: function () { return strings_1__default['default'].toUtf8String; } });
	Object.defineProperty(exports, "Utf8ErrorFuncs", { enumerable: true, get: function () { return strings_1__default['default'].Utf8ErrorFuncs; } });

	Object.defineProperty(exports, "accessListify", { enumerable: true, get: function () { return transactions_1__default['default'].accessListify; } });
	Object.defineProperty(exports, "computeAddress", { enumerable: true, get: function () { return transactions_1__default['default'].computeAddress; } });
	Object.defineProperty(exports, "parseTransaction", { enumerable: true, get: function () { return transactions_1__default['default'].parse; } });
	Object.defineProperty(exports, "recoverAddress", { enumerable: true, get: function () { return transactions_1__default['default'].recoverAddress; } });
	Object.defineProperty(exports, "serializeTransaction", { enumerable: true, get: function () { return transactions_1__default['default'].serialize; } });
	Object.defineProperty(exports, "TransactionTypes", { enumerable: true, get: function () { return transactions_1__default['default'].TransactionTypes; } });

	Object.defineProperty(exports, "commify", { enumerable: true, get: function () { return units_1__default['default'].commify; } });
	Object.defineProperty(exports, "formatEther", { enumerable: true, get: function () { return units_1__default['default'].formatEther; } });
	Object.defineProperty(exports, "parseEther", { enumerable: true, get: function () { return units_1__default['default'].parseEther; } });
	Object.defineProperty(exports, "formatUnits", { enumerable: true, get: function () { return units_1__default['default'].formatUnits; } });
	Object.defineProperty(exports, "parseUnits", { enumerable: true, get: function () { return units_1__default['default'].parseUnits; } });

	Object.defineProperty(exports, "verifyMessage", { enumerable: true, get: function () { return wallet_1__default['default'].verifyMessage; } });
	Object.defineProperty(exports, "verifyTypedData", { enumerable: true, get: function () { return wallet_1__default['default'].verifyTypedData; } });

	Object.defineProperty(exports, "_fetchData", { enumerable: true, get: function () { return web_1__default['default']._fetchData; } });
	Object.defineProperty(exports, "fetchJson", { enumerable: true, get: function () { return web_1__default['default'].fetchJson; } });
	Object.defineProperty(exports, "poll", { enumerable: true, get: function () { return web_1__default['default'].poll; } });
	////////////////////////
	// Enums
	var sha2_2 = sha2_1__default['default'];
	Object.defineProperty(exports, "SupportedAlgorithm", { enumerable: true, get: function () { return sha2_2.SupportedAlgorithm; } });
	var strings_2 = strings_1__default['default'];
	Object.defineProperty(exports, "UnicodeNormalizationForm", { enumerable: true, get: function () { return strings_2.UnicodeNormalizationForm; } });
	Object.defineProperty(exports, "Utf8ErrorReason", { enumerable: true, get: function () { return strings_2.Utf8ErrorReason; } });

	});

	var utils$1 = /*@__PURE__*/getDefaultExportFromCjs(utils);

	var _version = createCommonjsModule(function (module, exports) {
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.version = void 0;
	exports.version = "ethers/5.4.1";

	});

	var _version$1 = /*@__PURE__*/getDefaultExportFromCjs(_version);

	var ethers = createCommonjsModule(function (module, exports) {
	"use strict";
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Wordlist = exports.version = exports.wordlists = exports.utils = exports.logger = exports.errors = exports.constants = exports.FixedNumber = exports.BigNumber = exports.ContractFactory = exports.Contract = exports.BaseContract = exports.providers = exports.getDefaultProvider = exports.VoidSigner = exports.Wallet = exports.Signer = void 0;

	Object.defineProperty(exports, "BaseContract", { enumerable: true, get: function () { return contracts_1__default['default'].BaseContract; } });
	Object.defineProperty(exports, "Contract", { enumerable: true, get: function () { return contracts_1__default['default'].Contract; } });
	Object.defineProperty(exports, "ContractFactory", { enumerable: true, get: function () { return contracts_1__default['default'].ContractFactory; } });

	Object.defineProperty(exports, "BigNumber", { enumerable: true, get: function () { return bignumber_1__default['default'].BigNumber; } });
	Object.defineProperty(exports, "FixedNumber", { enumerable: true, get: function () { return bignumber_1__default['default'].FixedNumber; } });

	Object.defineProperty(exports, "Signer", { enumerable: true, get: function () { return abstract_signer_1__default['default'].Signer; } });
	Object.defineProperty(exports, "VoidSigner", { enumerable: true, get: function () { return abstract_signer_1__default['default'].VoidSigner; } });

	Object.defineProperty(exports, "Wallet", { enumerable: true, get: function () { return wallet_1__default['default'].Wallet; } });
	var constants = __importStar(require$$0__default$1['default']);
	exports.constants = constants;
	var providers = __importStar(require$$1__default$1['default']);
	exports.providers = providers;
	var providers_1 = require$$1__default$1['default'];
	Object.defineProperty(exports, "getDefaultProvider", { enumerable: true, get: function () { return providers_1.getDefaultProvider; } });

	Object.defineProperty(exports, "Wordlist", { enumerable: true, get: function () { return wordlists_1__default['default'].Wordlist; } });
	Object.defineProperty(exports, "wordlists", { enumerable: true, get: function () { return wordlists_1__default['default'].wordlists; } });
	var utils$1 = __importStar(utils);
	exports.utils = utils$1;

	Object.defineProperty(exports, "errors", { enumerable: true, get: function () { return logger_1__default['default'].ErrorCode; } });
	////////////////////////
	// Compile-Time Constants
	// This is generated by "npm run dist"

	Object.defineProperty(exports, "version", { enumerable: true, get: function () { return _version.version; } });
	var logger = new logger_1__default['default'].Logger(_version.version);
	exports.logger = logger;

	});

	var ethers$1 = /*@__PURE__*/getDefaultExportFromCjs(ethers);

	var lib = createCommonjsModule(function (module, exports) {
	"use strict";
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Wordlist = exports.version = exports.wordlists = exports.utils = exports.logger = exports.errors = exports.constants = exports.FixedNumber = exports.BigNumber = exports.ContractFactory = exports.Contract = exports.BaseContract = exports.providers = exports.getDefaultProvider = exports.VoidSigner = exports.Wallet = exports.Signer = exports.ethers = void 0;
	// To modify this file, you must update ./misc/admin/lib/cmds/update-exports.js
	var ethers$1 = __importStar(ethers);
	exports.ethers = ethers$1;
	try {
	    var anyGlobal = window;
	    if (anyGlobal._ethers == null) {
	        anyGlobal._ethers = ethers$1;
	    }
	}
	catch (error) { }
	var ethers_1 = ethers;
	Object.defineProperty(exports, "Signer", { enumerable: true, get: function () { return ethers_1.Signer; } });
	Object.defineProperty(exports, "Wallet", { enumerable: true, get: function () { return ethers_1.Wallet; } });
	Object.defineProperty(exports, "VoidSigner", { enumerable: true, get: function () { return ethers_1.VoidSigner; } });
	Object.defineProperty(exports, "getDefaultProvider", { enumerable: true, get: function () { return ethers_1.getDefaultProvider; } });
	Object.defineProperty(exports, "providers", { enumerable: true, get: function () { return ethers_1.providers; } });
	Object.defineProperty(exports, "BaseContract", { enumerable: true, get: function () { return ethers_1.BaseContract; } });
	Object.defineProperty(exports, "Contract", { enumerable: true, get: function () { return ethers_1.Contract; } });
	Object.defineProperty(exports, "ContractFactory", { enumerable: true, get: function () { return ethers_1.ContractFactory; } });
	Object.defineProperty(exports, "BigNumber", { enumerable: true, get: function () { return ethers_1.BigNumber; } });
	Object.defineProperty(exports, "FixedNumber", { enumerable: true, get: function () { return ethers_1.FixedNumber; } });
	Object.defineProperty(exports, "constants", { enumerable: true, get: function () { return ethers_1.constants; } });
	Object.defineProperty(exports, "errors", { enumerable: true, get: function () { return ethers_1.errors; } });
	Object.defineProperty(exports, "logger", { enumerable: true, get: function () { return ethers_1.logger; } });
	Object.defineProperty(exports, "utils", { enumerable: true, get: function () { return ethers_1.utils; } });
	Object.defineProperty(exports, "wordlists", { enumerable: true, get: function () { return ethers_1.wordlists; } });
	////////////////////////
	// Compile-Time Constants
	Object.defineProperty(exports, "version", { enumerable: true, get: function () { return ethers_1.version; } });
	Object.defineProperty(exports, "Wordlist", { enumerable: true, get: function () { return ethers_1.Wordlist; } });

	});

	var index = /*@__PURE__*/getDefaultExportFromCjs(lib);

	return index;

})));
//# sourceMappingURL=ethers.umd.js.map
