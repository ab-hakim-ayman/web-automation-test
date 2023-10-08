const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const LoginPage = require('../../pages/LoginPage');
const chai = require('chai');
const expect = chai.expect;

let driver;
let loginPage;

Given('I am on login page', async function () {
    driver = new Builder().forBrowser('chrome').build();
    loginPage = new LoginPage(driver);
    await loginPage.navigateToLoginPage('https://www.tvhut.com.bd/index.php?route=account/login');
});

When('I enter invalid username and password', async function () {
    await loginPage.enterEmail('jo@gmail.com');
    await loginPage.enterPassword('hello@123');
});

When('I click the login button', async function () {
    await loginPage.clickLoginButton();
});

Then('I should see an login error message', async function () {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).to.include('Warning: No match for E-Mail Address and/or Password.');
});