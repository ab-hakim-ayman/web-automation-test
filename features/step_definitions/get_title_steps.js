const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const HomePage = require('../../pages/HomePage');

let driver;
let homePage;

Given('I am on the website', async function () {
    driver = new Builder().forBrowser('chrome').build();
    homePage = new HomePage(driver);
    await homePage.navigateToHomePage('https://www.tvhut.com.bd/');
});

When('I retrieve the website title', async function () {
    this.title = await driver.getTitle();
});

Then('I should see the website title', async function () {
    expect(this.title).to.include('TV HUT | Best TV and Gadget Online Shop in Bangladesh');
});