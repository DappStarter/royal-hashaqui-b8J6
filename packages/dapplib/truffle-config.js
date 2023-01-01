require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success story cost soap around imitate prize equal giant'; 
let testAccounts = [
"0xb2b013f827acc26059cfca195cb447c791a991472194d49528748d0a96194cda",
"0xde7b00aad65f9c66f4462811a23d66f02e716e31db636d4a4522442bab26cc7c",
"0xe105c71131d81b2d1876fcdc7b3698dcc08d254008923b75aa0855530bf37e32",
"0x03cbc897f666fdfd0c8fb312abbe7913b7504869177b5779772384818b0767db",
"0x67c142c82a433e13097f0cdf8339a01ee8cbfbe6b0564d05586cf67568372ddd",
"0x6051d5f17817c836bcd00fc80c369a7e6151bd390363995fab1643cfda374bcb",
"0xa81041a1da5cba889fa4fcb62ccc64d226a5fa1cf2f092aaf0347beb084fdeec",
"0xbfb1ca2176582c7e2b514a2b69fce267b64f3a66b036cd3836c0c05fc6d02c56",
"0x2ce7b80f9862264766d8ed5ff2907883653537a05d3033234cc5d649de58c324",
"0x9c9d1c3797a2c24396c0aec3ef12d7919b184b06d5847b7c2aa5de52d1d192d2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


