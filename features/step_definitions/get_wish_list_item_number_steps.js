const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const WishListPage = require('../../pages/WishListPage');
const LoginPage = require('../../pages/LoginPage');
const HomePage = require('../../pages/HomePage');

let driver;
let wishListPage;
let loginPage;
let homePage;

Given('I am on the tv hut home page', async function () {
  driver = new Builder().forBrowser('chrome').build();
  homePage = new HomePage(driver);
  await homePage.navigateToHomePage('https://www.tvhut.com.bd/');
});

When('I have to login', async function () {
  loginPage = new LoginPage(driver);

  await loginPage.navigateToLoginPage('https://www.tvhut.com.bd/index.php?route=account/login');
  await loginPage.enterEmail('johndo@gmail.com');
  await loginPage.enterPassword('hello@123');
  await loginPage.clickLoginButton();
});

When('I navigate to the wish list page', async function () {
    wishListPage = new WishListPage(driver);
    await wishListPage.navigateToWishListPage('https://www.tvhut.com.bd/index.php?route=account/wishlist');
});

Then('I should see the number of items in the wish list', async function () {
    const itemCount = await wishListPage.getItemCountInWishList();
    expect(itemCount).to.equal(0);
});