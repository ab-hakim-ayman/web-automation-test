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

Given('I am on the tvhut for wish list', async function () {
    driver = new Builder().forBrowser('chrome').build();
    homePage = new HomePage(driver);
    await homePage.navigateToHomePage('https://www.tvhut.com.bd/');
});

When('the user have to login for wish list', async function () {
  loginPage = new LoginPage(driver);

  await loginPage.navigateToLoginPage('https://www.tvhut.com.bd/index.php?route=account/login');
  await loginPage.enterEmail('johndo@gmail.com');
  await loginPage.enterPassword('hello@123');
  await loginPage.clickLoginButton();
});

When('I navigate to the wish list page directly', async function () {
    wishListPage = new WishListPage(driver);
    await wishListPage.navigateToWishListPage('https://www.tvhut.com.bd/index.php?route=account/wishlist');
});

When('I update the wish list', async function () {
    await wishListPage.updateWishList();
});

Then('I should see the updated wish list', async function () {
  const successMessage = await wishListPage.getSuccessMessage();
  expect(successMessage).to.include('Success: You have modified your wish list!');
});