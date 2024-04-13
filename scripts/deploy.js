const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Access the balance from the deployer signer
  const balance = await deployer.provider.getBalance(deployer.address);
  console.log("Account balance:", balance);

  const TimeCapsule = await ethers.getContractFactory("TimeCapsule"); // Replace 'TimeCapsule' with your contract's name
  const timeCapsule = await TimeCapsule.deploy();

  await timeCapsule.deployed();

  console.log("TimeCapsule deployed to:", timeCapsule.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
