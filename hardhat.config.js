require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    //здесь указываем все сети, с которыми будем работать
    bnbtestnet: {
      url: "https://cool-sly-county.bsc-testnet.discover.quiknode.pro/6424b90e72571bc7d2f2451bb1b4e34ba7908163/", //RPC from my quicknode
      accounts: ["53ae007f2a40d2303358bd89cae16825143d0055c7086a2a9502cdb033571fda"],
      chainId: 97,
    },
  },
  etherscan: {
    apiKey: "E695DEI5G9489C3K3GNBZRSCVZXKWI4CQ1", // your Etherscan API key
  },

};
