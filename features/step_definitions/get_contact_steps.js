const { Given, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const HomePage = require('../../pages/HomePage');

let driver;
let homePage;

Given('I am on the website for contact', async function () {
    driver = new Builder().forBrowser('chrome').build();
    homePage = new HomePage(driver);
    await homePage.navigateToHomePage('https://www.tvhut.com.bd/');
});

Then('I should see the contact number', async function () {
    const contactNumber = await homePage.getContact();
    expect(contactNumber).to.include('01639700692');
});