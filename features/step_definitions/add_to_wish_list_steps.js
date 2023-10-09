const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const HomePage = require('../../pages/HomePage');
const SearchResultsPage = require('../../pages/SearchResultsPage');
const ProductPage = require('../../pages/ProductPage');
const WishListPage = require('../../pages/WishListPage');
const LoginPage = require('../../pages/LoginPage');

let driver;
let homePage;
let searchResultsPage;
let productPage;
let wishListPage;
let loginPage;

Given('I am on tvhut website home page', async function () {
    driver = new Builder().forBrowser('chrome').build();
    homePage = new HomePage(driver);
    productPage = new ProductPage(driver);
    await homePage.navigateToHomePage('https://www.tvhut.com.bd/');
});

When('I search product with the keyword {string}', async function (keyword) {
    await homePage.searchForProduct(keyword);
    searchResultsPage = new SearchResultsPage(driver);
});

When('I select a monitor from the search results', async function () {
    await searchResultsPage.selectProductAtIndex(0);
});

When('I add the selected monitor to the wish list', async function () {
    await productPage.addToWishList();
    wishListPage = await productPage.navigateToWishList();
});

Then('I should see the product in the wish list', async function () {
    loginPage = new LoginPage(driver);
    await loginPage.navigateToLoginPage('https://www.tvhut.com.bd/index.php?route=account/login');
    await loginPage.enterEmail('johndo@gmail.com');
    await loginPage.enterPassword('hello@123');
    await loginPage.clickLoginButton();
    await productPage.navigateToWishList();
    wishListPage = new WishListPage(driver);
    const wishListItems = await wishListPage.getWishListItems();
    expect(wishListItems).to.have.lengthOf.at.least(1);
});
