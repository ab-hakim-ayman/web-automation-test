const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const WishListPage = require('../../pages/WishListPage');
const HomePage = require('../../pages/HomePage');
const LoginPage = require('../../pages/LoginPage');

let driver;
let wishListPage;
let homePage;
let loginPage;

Given('I am on the website home page wish list', async function () {
    driver = new Builder().forBrowser('chrome').build();
    homePage = new HomePage(driver);
    await homePage.navigateToHomePage('https://www.tvhut.com.bd/');
});

When('I should logged in wish list', async function () {
  loginPage = new LoginPage(driver);

  await loginPage.navigateToLoginPage('https://www.tvhut.com.bd/index.php?route=account/login');
  await loginPage.enterEmail('johndo@gmail.com');
  await loginPage.enterPassword('hello@123');
  await loginPage.clickLoginButton();
});

When('I navigate to the wish list page directly for empty wish list', async function () {
    wishListPage = new WishListPage(driver);
    await wishListPage.navigateToWishListPage('https://www.tvhut.com.bd/index.php?route=account/wishlist');
});

Then('I should see an empty wish list', async function () {
  const emptyMessage = await wishListPage.getEmptyMessage();
  expect(emptyMessage).to.include('Your wish list is empty.');
});