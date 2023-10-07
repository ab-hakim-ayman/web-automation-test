const { Given, When, After, Then } = require('@cucumber/cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { Builder, By } = require('selenium-webdriver');
const LoginPage = require('../../pages/LoginPage');
const LogoutPage = require('../../pages/LogoutPage');
const WebDriver = require('../../utils/WebDriver');

chai.use(chaiAsPromised);
const expect = chai.expect;

let driver;
let loginPage;
let logoutPage;

Given('the user is logged in', async function () {
    driver = await new Builder().forBrowser('chrome').build();
    // const webdriver = new WebDriver(driver);
    loginPage = new LoginPage(driver);

    await loginPage.navigateToLoginPage('https://www.tvhut.com.bd/index.php?route=account/login');
    await loginPage.enterEmail('johndo@gmail.com');
    await loginPage.enterPassword('hello@123');
    await loginPage.clickLoginButton();
});

When('I am on the logout page', async function () {
    driver = await new Builder().forBrowser('chrome').build();
    // const webdriver = new WebDriver(driver);
    logoutPage = new LogoutPage(driver);

    await logoutPage.navigateToLogoutPage('https://www.tvhut.com.bd/index.php?route=account/logout');
});

When('the user clicks on the logout button', async function () {
    await logoutPage.clickLogoutButton();
});

Then('the user should be logged out', async function () {
    await loginPage.navigateToLoginPage('https://www.tvhut.com.bd/index.php?route=account/login');
});