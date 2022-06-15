const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");

describe("Token", function() {
    it("O teste deverá retornar o valor correto do balanço do contrato", async function() {
        const Token = await ethers.getContractFactory("CryptoToken");
        const token = await Token.deploy(480);

        const totalSupplyExpected = 480;
        const totalSupplyResult = await token.totalSupply();

        expect(totalSupplyExpected).to.equal(totalSupplyResult);
    });

    it("O teste deverá retornar o valor correto do saldo", async function() {
        const [owner, wallet1] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("CryptoToken", owner);
        const token = await Token.deploy(480);

        const ownerBalanceExpected = 480;
        const ownerBalance = await token.balanceOf(owner.address);

        expect(ownerBalanceExpected).to.equal(ownerBalance);

        const wallet1BalanceExpected = 0;
        const wallet1Balance = await token.balanceOf(wallet1.address);

        expect(wallet1BalanceExpected).to.equal(wallet1Balance);
    });


});