const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const CartPage = require('../../pages/CartPage');
const HomePage = require('../../pages/HomePage');
const LoginPage = require('../../pages/LoginPage');

let driver;
let cartPage;
let homePage;
let loginPage;

Given('I am on the tvhut home page', async function () {
    driver = new Builder().forBrowser('chrome').build();
    homePage = new HomePage(driver);
    await homePage.navigateToHomePage('https://www.tvhut.com.bd/');
});

When('the user have to login', async function () {
  loginPage = new LoginPage(driver);

  await loginPage.navigateToLoginPage('https://www.tvhut.com.bd/index.php?route=account/login');
  await loginPage.enterEmail('johndo@gmail.com');
  await loginPage.enterPassword('hello@123');
  await loginPage.clickLoginButton();
});

When('I navigate to the cart page directly', async function () {
    cartPage = new CartPage(driver);
    await cartPage.navigateToCartPage('https://www.tvhut.com.bd/index.php?route=checkout/cart');
});

When('I update the quantity of the product to {int}', async function (newQuantity) {
    await cartPage.updateProductQuantity(newQuantity);
});

Then('I should see the updated quantity in the cart', async function () {
    const updatedQuantity = await cartPage.getProductQuantity();
    expect(updatedQuantity).to.equal('2');
});