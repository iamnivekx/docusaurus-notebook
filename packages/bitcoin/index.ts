// Bitcoin utilities and transaction building functions
const address = require('./address/address');
const legacy = require('./address/legacy');
const multisig = require('./address/multisig');
const bitcoin = require('./tx/bitcoin');
const rbf = require('./tx/rbf');
const decode = require('./tx/decode');
const cryptoUtils = require('./utils/crypto');
const classify = require('./classify');
const script = require('./script');

// Re-export commonly used bitcoinjs-lib components
const { ECPair, Psbt, networks, payments } = require('bitcoinjs-lib');
const { PrivateKey, Networks, Transaction } = require('bitcore-lib');

module.exports = {
	// Address utilities
	...address,
	...legacy,
	...multisig,

	// Transaction utilities
	...bitcoin,
	...rbf,
	...decode,

	// Utility functions
	...cryptoUtils,
	...classify,
	...script,

	// Bitcoin libraries
	ECPair,
	Psbt,
	networks,
	payments,
	PrivateKey,
	Networks,
	Transaction
}; 