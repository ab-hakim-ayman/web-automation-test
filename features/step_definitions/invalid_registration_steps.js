const { Given, When, After, Then } = require('@cucumber/cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { Builder } = require('selenium-webdriver');
const RegistrationPage = require('../../pages/RegistrationPage');

chai.use(chaiAsPromised);
const expect = chai.expect;

let driver;
let registrationPage;

Given('I am on registration page', async function () {
    driver = await new Builder().forBrowser('chrome').build();
    registrationPage = new RegistrationPage(driver);
    await registrationPage.navigateToRegistrationPage('https://www.tvhut.com.bd/index.php?route=account/register');
});

When('I fill in the registration form with invalid email', async function () {
    await registrationPage.enterFirstName('John');
    await registrationPage.enterLastName('Doe');
    await registrationPage.enterEmail('johndo@gmail.com');
    await registrationPage.enterTelephone('123456789');
    await registrationPage.enterPassword('hello@123');
    await registrationPage.enterConfirmPassword('hello@123');
    await registrationPage.clickAgreeInput();
});

When('I submit the registration form by click', async function () {
    await registrationPage.clickRegisterButton();

});

Then('I should see an error message', async function () {
    const errorMessage = await registrationPage.getErrorMessage();
    expect(errorMessage).to.include('Warning: E-Mail Address is already registered!');
});
