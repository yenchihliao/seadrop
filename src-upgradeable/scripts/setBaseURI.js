const { ethers } = require('hardhat')

async function main() {

    const [deployer] = await ethers.getSigners()
    // console.log(deployer.address);

    const NFT = await ethers.getContractAt('MetaDuetNFTv2', "0x1266ecdbbff533b0dbf885043f704bcf2737a3aa")

    let tx, rc;
    // console.log(await NFT.maxSupply());
    tx = await NFT.setBaseURI("https://ipfs.io/ipfs/QmV2s99AQbuyut57D9PEf8RD2a7BWRGeVNuhBh7RM9BV7h"); rc = await tx.wait();
    console.log(rc.status);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
