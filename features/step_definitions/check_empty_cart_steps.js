const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const CartPage = require('../../pages/CartPage');
const LoginPage = require('../../pages/LoginPage');
const HomePage = require('../../pages/HomePage');

let driver;
let cartPage;
let loginPage;

Given('I am on the website home page', async function () {
  driver = new Builder().forBrowser('chrome').build();
  homePage = new HomePage(driver);
  await homePage.navigateToHomePage('https://www.tvhut.com.bd/');
});

When('I should logged in', async function () {
  loginPage = new LoginPage(driver);

  await loginPage.navigateToLoginPage('https://www.tvhut.com.bd/index.php?route=account/login');
  await loginPage.enterEmail('johndo@gmail.com');
  await loginPage.enterPassword('hello@123');
  await loginPage.clickLoginButton();
});

When('navigate to the cart page', async function () {
    cartPage = new CartPage(driver);
    await cartPage.navigateToCartPage('https://www.tvhut.com.bd/index.php?route=checkout/cart');
});

Then('I should see an empty cart', async function () {
    const isCartEmpty = await cartPage.isCartEmpty();
    expect(isCartEmpty).to.be.true;
});