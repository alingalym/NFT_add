const { ethers, string, uint } = require("hardhat");
const { assert, expect } = require("chai");


describe("NFT", function () {
  let NFTFactory, contract;
  beforeEach(async function () {
    NFTFactory = await ethers.getContractFactory("NFT");
    contract = await NFTFactory.deploy();
  });

  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("NFT");
    const hardhatToken = await Token.deploy();
    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });

  it("Check the name of NFT after deployment", async function () {
    const myName = "HeroNFT";
    const expectedName = await contract.name();
    expect(myName).to.be.equal(expectedName);
  });

  it("Should not mint NFT to owner account without ETH", async function() {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("NFT");
    const hardhatToken = await Token.deploy();
    await expect(
      hardhatToken.safeMint(owner.address)
    ).to.be.revertedWith("Please add valid amount of ETH");
  });

  it("Upon withdraw it should be 0 on token NFT totalSupply", async function() {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("NFT");
    const hardhatToken = await Token.deploy();
    await hardhatToken.withdraw();
    expect(await hardhatToken.totalSupply()).to.equal(0);
  });

});