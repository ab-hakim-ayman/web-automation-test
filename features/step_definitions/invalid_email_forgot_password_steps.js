const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const LoginPage = require('../../pages/LoginPage');
const ForgotPasswordPage = require('../../pages/ForgotPasswordPage');
const chai = require('chai');
const expect = chai.expect;

let driver;
let loginPage;
let forgotPasswordPage;

Given('I am in the login page', async function () {
    driver = new Builder().forBrowser('chrome').build();
    loginPage = new LoginPage(driver);
    forgotPasswordPage = new ForgotPasswordPage(driver);
    await loginPage.navigateToLoginPage('https://www.tvhut.com.bd/index.php?route=account/login');
});

When('I click the "Forgot Password"', async function () {
    await loginPage.clickForgotPasswordLink();
});

When('I enter an invalid email address', async function () {
    await forgotPasswordPage.enterEmail('johndoo@gmail.com');
});

When('I click the "Reset Password"', async function () {
    await forgotPasswordPage.clickResetPasswordButton();
});

Then('I should see an error message for the invalid email', async function () {
    const errorMessage = await forgotPasswordPage.getErrorMessage();
    expect(errorMessage).to.include('Warning: The E-Mail Address was not found in our records, please try again!');
});
