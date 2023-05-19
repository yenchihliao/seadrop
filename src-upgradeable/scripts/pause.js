const { ethers } = require('hardhat')

async function main() {

    const [deployer] = await ethers.getSigners()
    // console.log(deployer.address);

    const NFT = await ethers.getContractAt('MetaDuetNFTv2', "0xb2a9D8A7DE2611eEba34AfD65Fd36063C9caCc50")

    let tx, rc;
    // console.log(await NFT.maxSupply());
    tx = await NFT.emergencyPause(); rc = await tx.wait();
    console.log(rc.status);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
