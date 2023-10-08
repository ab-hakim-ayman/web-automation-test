const { By } = require('selenium-webdriver');

class ForgotPasswordPage {
    constructor(driver) {
        this.driver = driver;
        this.emailInput = By.id('input-email');
        this.resetPasswordButton = By.xpath('//*[@id="content"]/form/div/div[2]/button');
        this.successMessage = By.className('alert');
        this.errorMessage = By.className('alert');
    }

    async enterEmail(email) {
        await this.driver.findElement(this.emailInput).sendKeys(email);
    }

    async clickResetPasswordButton() {
        await this.driver.findElement(this.resetPasswordButton).click();
    }

    async getSuccessMessage() {
        const successElement = await this.driver.findElement(this.successMessage);
        return successElement.getText();
    }

    async getErrorMessage() {
      const errorElement = await this.driver.findElement(this.errorMessage);
      return errorElement.getText();
    }
}

module.exports = ForgotPasswordPage;