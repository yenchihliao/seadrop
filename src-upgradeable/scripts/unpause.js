const { ethers } = require('hardhat')

async function main() {

    const [deployer] = await ethers.getSigners()
    // console.log(deployer.address);

    const NFT = await ethers.getContractAt('MetaDuetNFTv2', "0x8915571F2828e692BAFA0D6dE5C4667d095695bB")

    let tx, rc;
    // console.log(await NFT.maxSupply());
    tx = await NFT.emergencyUnpause(); rc = await tx.wait();
    console.log(rc.status);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
