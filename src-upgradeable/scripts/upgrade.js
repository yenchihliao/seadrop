const { ethers, upgrades } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners()
    // console.log(deployer.address);

    const NFTConFac = await ethers.getContractAt('MetaDuetNFT', "0xb2a9d8a7de2611eeba34afd65fd36063c9cacc50")
    const newNFTConFac = await ethers.getContractFactory('MetaDuetNFTv2')
    const upgraded = await upgrades.upgradeProxy(
      NFTConFac.address,
      newNFTConFac
    )
    await upgraded.deployed();
    console.log(`original ${NFTConFac.address}`);
    console.log(`NFT: ${upgraded.address}`)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
