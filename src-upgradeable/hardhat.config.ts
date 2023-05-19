import "@nomiclabs/hardhat-waffle";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-etherscan";

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          viaIR: true,
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    test: {
      url: 'https://testnet-rpc.vegas.one', // Replace with the desired Mumbai RPC URL
      accounts: [``], // Replace with your private key
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/', // Replace with the desired Mumbai RPC URL
      accounts: [``], // Replace with your private key
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_KEY,
  },
  paths: { sources: "./src" },
};
