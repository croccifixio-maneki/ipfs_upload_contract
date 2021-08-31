const { expect } = require("chai");
const { ethers } = require("hardhat");
const { expectRevert } = require('@openzeppelin/test-helpers');

describe("Test CIDs", function () {
  const CID = "Qma83cBXemC9a6acWZ9wwtNSJ1WzxXyGwTstiGbrooY8ih"
  
  it("Should allow to owner set the CID ", async function () {
    const CID_FACTORY = await hre.ethers.getContractFactory("CIDContract");
    const cid_Contract = await CID_FACTORY.deploy();
    const [owner, not_owner] = await hre.ethers.getSigners();
    await cid_Contract.deployed();
  
    await cid_Contract.setOwner(CID, owner.address)
    expect((await cid_Contract.isOwner("Qma83cBXemC9a6acWZ9wwtNSJ1WzxXyGwTstiGbrooY8ih", owner.address))).to.equal(true);
    expect((await cid_Contract.isOwner("Qma83cBXemC9a6acWZ9wwtNSJ1WzxXyGwTstiGbrooY8ih", not_owner.address))).to.equal(false);


    await cid_Contract.setOwner(CID, not_owner.address)
    expect((await cid_Contract.isOwner("Qma83cBXemC9a6acWZ9wwtNSJ1WzxXyGwTstiGbrooY8ih", not_owner.address))).to.equal(true);

    await expectRevert(
        cid_Contract.setOwner(CID, owner.address),
        'caller is not the owner',
      );
  });
});