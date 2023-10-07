// registration_steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { Builder } = require('selenium-webdriver');
const { setWorldConstructor } = require('@cucumber/cucumber');
const RegistrationPage = require('../../pages/RegistrationPage');
const WebDriver = require('../../utils/WebDriver');

chai.use(chaiAsPromised);
const expect = chai.expect;

let driver;
let registrationPage;

Given('I am on the registration page', async function () {
    driver = await new Builder().forBrowser('chrome').build();
    // const webdriver = new WebDriver(driver);
    registrationPage = new RegistrationPage(driver);

    await registrationPage.navigateToRegistrationPage('https://www.tvhut.com.bd/index.php?route=account/register');
});

When('I fill in the registration form with valid information', async function () {
    await registrationPage.enterFirstName('John');
    await registrationPage.enterLastName('Doe');
    await registrationPage.enterEmail('johndo@gmail.com');
    await registrationPage.enterTelephone('123456789');
    await registrationPage.enterPassword('hello@123');
    await registrationPage.enterConfirmPassword('hello@123');
    await registrationPage.clickAgreeInput();
});

When('I submit the registration form', async function () {
    await registrationPage.clickRegisterButton();
});

Then('I should see a success message', async function () {
    await registrationPage.navigateToRegistrationPage('https://www.tvhut.com.bd/index.php?route=account/success');
    const successMessage = await registrationPage.getSuccessMessage();
    expect(successMessage).to.include('Congratulations! Your new account has been successfully created!');
});
