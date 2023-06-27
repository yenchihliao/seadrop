# MetaDuet Smart Contract
This document is about MetaDuet NFT smart contract

## Installation
To install dependencies and compile contracts:
```
git clone --recurse-submodules https://github.com/ProjectOpenSea/seadrop && cd seadrop
yarn install
yarn build
```

## Source code
The MetaDuet source code is at `./src-upgradeable/src/MetaDuetNFTv2.sol`. Note that `MetaDuetNFT.sol` is a non-pausable version.

## Scripts
To run scripts to deploy/upgrade/update the smart contract, find scripts in `./src-upgradeable/scripts`. Run command below under the path `./src-upgradeable/`

```bash
npx hardhat run --network [NETWORK-DEFINED-IN-HARDHAT.CONFIG] scripts/[SCRIPT-NAME].js
```

* `deploy.js`: deploys the contract assign to `NFTConFac` variable.
* `upgrade.js`: upgrades from the contract assigned to `NFTConFac` variable to the contract assigned to `newNFTConFac`.

## Upgradeable library
In this repo, upgradeable codes are pulled directly instead of libraries managed by Hardhat. It should be noted when upgrading upgradable libraries.
