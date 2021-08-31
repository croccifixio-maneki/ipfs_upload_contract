// scripts/deploy.js
async function main () {
    const CID_FACTORY = await hre.ethers.getContractFactory("CIDContract");
    const cid_Contract = await CID_FACTORY.deploy();
    await cid_Contract.deployed();
    
    console.log("CID contract Add: ", cid_Contract.address)
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});

