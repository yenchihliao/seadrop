const { ethers, upgrades } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners()
    // console.log(deployer.address);

    const NFTConFac = await ethers.getContractFactory('MetaDuetNFT')

    const NFT = await upgrades.deployProxy(
      NFTConFac,
      [
        "MetaDuet NFT",
        "MetaDuet",
        ["0x00005EA00Ac477B1030CE78506496e8C2dE24bf5"]
      ]
    )
    await NFT.deployed();
    console.log(`NFT: ${NFT.address}`)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
