require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note shift pupil hover deposit foster second'; 
let testAccounts = [
"0xc29e3ff1bf3b2f1fa4c57937e813c4e7d8818f998c96f2e9670fa1ef8ca9d004",
"0xecb3082ec1eda8b330ea469ca2be418c3c61304ff1a8ee5aaa1ce98c7331e7d7",
"0xf099ab89bef5ae714beaf58ee1acb5cc91f530f7c653312404fb7ae8c3450f14",
"0x59dbf6e6fcbd1e1108c2d048203f95d7f54de4d8bfe20db7a6608b735ac37c63",
"0x542728dab95c971e893af898aef209630930279ca4243d8d711b1301484058a6",
"0xf0376a16eaff4d9298c0cc7cc5e40c081c7ff436e379f5b685fa69bc867180b4",
"0x3b64d46e1a3f1786a57ab8cef0bdd3a7d9d83fc6fb9d9db6b917a003a2d61e99",
"0x8cd04b166656ca8853b7b9ba33067d57dca9fa4b50ad88b388f37528c31e43a1",
"0x536312dbac6c804683afcde455496b3dcb88dc8638291ae5daa7e800fce81c2c",
"0xc1f83ad7c03a98b3dad59c50f4d390cfda612bd7c44d715746ea8b95ed3ca728"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
