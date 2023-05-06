import Web3 from "web3";
import ERC20_ABI from "./contracts/ERC20_ABI.json";
// import { Contract } from 'web3-eth-contract';

// Constant Addresses
const TOKEN_CONTRACT_ADDRESS = "0x0172ae13e3583bf565957095d27caede3abb172e";
// TODO this address should be stored directly in the contract
const GIFT_CARD_WALLET_ADDRESS = "0xeb9Dc2bf6671cF72d0B199A3d850E07Db1486000";

// Use BigNumber
const TOKEN_DECIMALS = Web3.utils.toBN(6);
const ERC20_CONTRACT_ABI = ERC20_ABI;

export function depositBTGUSD(amount: Number) {
    // set provider for all later instances to use
    // Contract.setProvider('ws://localhost:8546');

    // "Web3.givenProvider" will be set if in an Ethereum supported browser.
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
    web3.eth.getAccounts().then((accounts: string[]) => {
        let myWallet: string = accounts![0];
        console.log("myWallet", myWallet);

        // Get ERC20 Token contract instance
        let contract = new web3.eth.Contract(ERC20_CONTRACT_ABI, TOKEN_CONTRACT_ADDRESS, { from: myWallet });

        // calculate ERC20 token amount
        let value = Web3.utils.toBN(amount).mul(Web3.utils.toBN(10).pow(TOKEN_DECIMALS));

        // call transfer function
        contract.methods.transfer(GIFT_CARD_WALLET_ADDRESS, value).send()
            .once('sending', function (payload: any) {
                console.log("sending", payload);
            })
            .once('sent', function (payload: any) {
                console.log("sent", payload);
            })
            .once('transactionHash', function (hash: string) {
                console.log("transactionHash", hash);
            })
            .once('receipt', function (receipt: any) {
                console.log("receipt", receipt);
            })
            .on('error', function (error: any) {
                console.log("error", error);
                console.log(typeof error);
            })
            .then(function (receipt: any) {
                // will be fired once the receipt is mined
                console.log("then", receipt);
            });
    });
}