const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const HomePage = require('../../pages/HomePage');
const SearchResultsPage = require('../../pages/SearchResultsPage');
const ProductPage = require('../../pages/ProductPage');
const CartPage = require('../../pages/CartPage');

let driver;
let homePage;
let searchResultsPage;
let productPage;
let cartPage;

Given('I am on tvhut website', async function () {
    driver = new Builder().forBrowser('chrome').build();
    homePage = new HomePage(driver);
    productPage = new ProductPage(driver);
    await homePage.navigateToHomePage('https://www.tvhut.com.bd/');
});

When('I search a product with the keyword {string}', async function (keyword) {
    await homePage.searchForProduct(keyword);
    searchResultsPage = new SearchResultsPage(driver);
});

When('I select a tv from the search results', async function () {
    await searchResultsPage.selectProductAtIndex(0);
});

When('I add the selected tv to the cart', async function () {
    await productPage.addToCart();
    cartPage = await productPage.navigateToCart();
});

Then('I should see the product in the cart', async function () {
    await productPage.navigateToCart();
    cartPage = new CartPage(driver);
    const cartItems = await cartPage.getCartItems();
    expect(cartItems).to.have.lengthOf.at.least(1);
});
