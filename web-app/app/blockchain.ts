import Web3 from 'web3';
import Contract from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';
import ERC20_ABI from './contracts/ERC20_ABI.json';

// Constant Addresses
const TOKEN_CONTRACT_ADDRESS = '0x0172ae13e3583bf565957095d27caede3abb172e';
// TODO this address should be stored directly in the contract
const GIFT_CARD_WALLET_ADDRESS = '0xeb9Dc2bf6671cF72d0B199A3d850E07Db1486000';

// Use BigNumber
const TOKEN_DECIMALS = Web3.utils.toBN(6);
const ERC20_CONTRACT_ABI = ERC20_ABI as AbiItem[];

export function depositBTGUSD(amount: number, callback: (error: Error | null, receipt: object | null) => void) {
    // 'Web3.givenProvider' will be set if in an Ethereum supported browser.
    const web3Provider = Web3.givenProvider || 'ws://localhost:8546';

    // set provider for all later instances to use
    Contract.setProvider(web3Provider);
    const web3 = new Web3(web3Provider);

    web3.eth.requestAccounts().then((accounts: string[] | undefined) => {
        if (accounts === undefined) {
            console.log('No accounts found');
            return;
        }

        let myWallet: string = accounts![0];
        console.log('Wallet Address:', myWallet);

        // Get ERC20 Token contract instance
        let contract = new Contract(ERC20_CONTRACT_ABI, TOKEN_CONTRACT_ADDRESS);

        // calculate ERC20 token amount
        let value = Web3.utils.toBN(amount).mul(Web3.utils.toBN(10).pow(TOKEN_DECIMALS));

        // call transfer function
        contract.methods.transfer(GIFT_CARD_WALLET_ADDRESS, value).send({ from: myWallet })
            .once('sending', function (payload: Array<object>) {
                console.log('sending', payload);
            })
            .once('sent', function (payload: Array<object>) {
                console.log('sent', payload);
            })
            .once('transactionHash', function (hash: string) {
                console.log('transactionHash', hash);
            })
            .once('receipt', function (receipt: object) {
                console.log('receipt', receipt);
            })
            // .on('confirmation', function (confNumber: number, receipt: object, latestBlockHash: string) {
            //     console.log('confirmation', confNumber, receipt, latestBlockHash);
            // })
            .on('error', function (error: Error) {
                console.log('error', error);
                callback(error, null);
            })
            .then(function (receipt: object) {
                // will be fired once the receipt is mined
                console.log('then', receipt);
                callback(null, receipt);
            });
    });
}