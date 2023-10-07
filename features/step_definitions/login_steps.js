const { Given, When, Then } = require('@cucumber/cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { Builder } = require('selenium-webdriver');
const RegistrationPage = require('../../pages/RegistrationPage');
const LoginPage = require('../../pages/LoginPage'); // Create LoginPage module
const WebDriver = require('../../utils/WebDriver');

chai.use(chaiAsPromised);
const expect = chai.expect;

let driver;
let registrationPage;
let loginPage;

Given('I am on the login page', async function () {
    driver = await new Builder().forBrowser('chrome').build();
    // const webdriver = new WebDriver(driver);
    loginPage = new LoginPage(driver);

    await loginPage.navigateToLoginPage('https://www.tvhut.com.bd/index.php?route=account/login');
});

When('I fill in the login form with valid credentials', async function () {
    await loginPage.enterEmail('johndo@gmail.com');
    await loginPage.enterPassword('hello@123');
});

When('I submit the login form', async function () {
    await loginPage.clickLoginButton();
});

Then('I should be logged in', async function () {
    const userProfile = await loginPage.getUserProfile();
    expect(userProfile).to.exist;
});