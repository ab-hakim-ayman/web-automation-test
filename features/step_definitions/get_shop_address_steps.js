const { Given, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const HomePage = require('../../pages/HomePage');

let driver;
let homePage;

Given('I am on the website for address', async function () {
    driver = new Builder().forBrowser('chrome').build();
    homePage = new HomePage(driver);
    await homePage.navigateToHomePage('https://www.tvhut.com.bd/');
});

Then('I should see the shop address', async function () {
    const shopAddress = await homePage.getShopAddress();
    expect(shopAddress).to.include('Shop#408-9');
});