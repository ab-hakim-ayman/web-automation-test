const { Builder, By, until } = require('selenium-webdriver');


class RegistrationPage {
    constructor(driver) {
        this.driver = driver;
        this.firstNameInput = By.id('input-firstname'); // Replace with actual locators
        this.lastNameInput = By.id('input-lastname');
        this.emailInput = By.id('input-email');
        this.telephoneInput = By.id('input-telephone');
        this.passwordInput = By.id('input-password');
        this.confirmPasswordInput = By.id('input-confirm');
        this.agreeInput = By.name('agree');
        this.registerButton = By.className('btn');
        this.successMessage = By.id('content');
        this.errorMessage = By.className('alert');
    }

    async navigateToRegistrationPage(url) {
        await this.driver.get(url);
    }

    async enterFirstName(firstName) {
        await this.driver.findElement(this.firstNameInput).sendKeys(firstName);
    }

    async enterLastName(lastName) {
        await this.driver.findElement(this.lastNameInput).sendKeys(lastName);
    }

    async enterEmail(email) {
        await this.driver.findElement(this.emailInput).sendKeys(email);
    }

    async enterTelephone(telephone) {
      await this.driver.findElement(this.telephoneInput).sendKeys(telephone);
    }

    async enterPassword(password) {
        await this.driver.findElement(this.passwordInput).sendKeys(password);
    }

    async enterConfirmPassword(confirmPassword) {
        await this.driver.findElement(this.confirmPasswordInput).sendKeys(confirmPassword);
    }

    async clickAgreeInput() {
      await this.driver.findElement(this.agreeInput).click();
  }

    async clickRegisterButton() {
        await this.driver.findElement(this.registerButton).click();
        await this.driver.wait(until.elementLocated(By.className('alert')), 5000);

    }

    async navigateToSuccessPage(url) {
      await this.driver.get(url);
    }

    async getSuccessMessage() {
        const successMessageElement = await this.driver.findElement(this.successMessage);
        return successMessageElement.getText();
    }

    async getErrorMessage() {
      const errorElement = await this.driver.findElement(this.errorMessage);
      return errorElement.getText();
    }
}

module.exports = RegistrationPage;
