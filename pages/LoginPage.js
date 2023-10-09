const { By, until } = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.emailInput = By.id('input-email');
        this.passwordInput = By.id('input-password');
        this.loginButton = By.xpath('//*[@id="content"]/div/div[2]/div/form/div[3]/div/button');
        this.forgotPasswordButton = By.xpath('//*[@id="content"]/div/div[2]/div/form/div[2]/div/a')
        this.userProfile = By.className('my-account');
        this.errorMessage = By.css('.alert.alert-danger');
    }

    async navigateToLoginPage(url) {
        await this.driver.get('https://www.tvhut.com.bd/index.php?route=account/login');
    }

    async enterEmail(email) {
        await this.driver.findElement(this.emailInput).sendKeys(email);
    }

    async enterPassword(password) {
        await this.driver.findElement(this.passwordInput).sendKeys(password);
    }

    async clickForgotPasswordLink() {
        await this.driver.findElement(this.forgotPasswordButton).click();
    }

    async clickLoginButton() {
        await this.driver.findElement(this.loginButton).click();
        await this.driver.wait(until.elementLocated(By.xpath('//*[@id="column-right"]/div/div/div/div/div/div/div/ul/li[1]/a/span')), 5000);
    }

    async getUserProfile() {
        return this.driver.findElement(this.userProfile).isDisplayed();
    }

    async getErrorMessage() {
      const errorElement = await this.driver.findElement(this.errorMessage);
      return errorElement.getText();
    }
}

module.exports = LoginPage;
