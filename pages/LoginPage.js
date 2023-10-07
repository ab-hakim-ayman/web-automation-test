const { By } = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.emailInput = By.id('input-email');
        this.passwordInput = By.id('input-password');
        this.loginButton = By.xpath('//*[@id="content"]/div/div[2]/div/form/div[3]/div/button');
        this.userProfile = By.className('my-account');
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

    async clickLoginButton() {
        await this.driver.findElement(this.loginButton).click();
    }

    async getUserProfile() {
        return this.driver.findElement(this.userProfile).isDisplayed();
    }
}

module.exports = LoginPage;
