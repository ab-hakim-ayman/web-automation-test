const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const LoginPage = require('../../pages/LoginPage');
const ForgotPasswordPage = require('../../pages/ForgotPasswordPage');
const chai = require('chai');
const expect = chai.expect;

let driver;
let loginPage;
let forgotPasswordPage;

Given('I am in login page', async function () {
    driver = new Builder().forBrowser('chrome').build();
    loginPage = new LoginPage(driver);
    forgotPasswordPage = new ForgotPasswordPage(driver);
    await loginPage.navigateToLoginPage('https://www.tvhut.com.bd/index.php?route=account/login');
});

When('I click the "Forgot Password" link', async function () {
    await loginPage.clickForgotPasswordLink();
});

When('I enter my registered email address', async function () {
    await forgotPasswordPage.enterEmail('johndo@gmail.com');
});

When('I click the "Reset Password" button', async function () {
    await forgotPasswordPage.clickResetPasswordButton();
});

Then('I should see a success email sending message', async function () {
    const successMessage = await forgotPasswordPage.getSuccessMessage();
    expect(successMessage).to.include('An email with a confirmation link has been sent your email address.');
});
