const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const HomePage = require('../../pages/HomePage');
const SearchResultsPage = require('../../pages/SearchResultsPage');

let driver;
let homePage;
let searchResultsPage;

Given('I am in the website', async function () {
    driver = new Builder().forBrowser('chrome').build();
    homePage = new HomePage(driver);
    await homePage.navigateToHomePage('https://www.tvhut.com.bd/');
});

When('I search for a product with the keyword {string}', async function (keyword) {
    await homePage.searchForProduct(keyword);
    searchResultsPage = new SearchResultsPage(driver);
});

Then('I should see search results for {string}', async function (keyword) {
    const searchResultsTitle = await searchResultsPage.getSearchResultsTitle();
    expect(searchResultsTitle).to.include(searchResultsTitle);
});