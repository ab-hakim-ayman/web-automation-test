const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const HomePage = require('../../pages/HomePage');
const CatalogPage = require('../../pages/CatalogPage');

let driver;
let homePage;
let catalogPage;
setDefaultTimeout(30000);

Given('I am on the tv Hut website', async function () {
    driver = new Builder().forBrowser('chrome').build();
    homePage = new HomePage(driver);
    await homePage.navigateToHomePage('https://www.tvhut.com.bd/');
});

When('I navigate to the product catalog', async function () {
    catalogPage = await homePage.navigateToCatalog();
});

Then('I should see a list of product categories', async function () {
    const categories = await catalogPage.getProductCategories();
    expect(categories).to.be.an('array').that.is.not.empty;
});
