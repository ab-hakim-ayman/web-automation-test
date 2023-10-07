const { By } = require('selenium-webdriver');

class LogoutPage {
    constructor(driver) {
        this.driver = driver;
        this.logoutButton = By.xpath('//*[@id="content"]/div/div/a');
    }

    async navigateToLogoutPage(url) {
        await this.driver.get('https://www.tvhut.com.bd/index.php?route=account/logout');
    }

    async clickLogoutButton() {
        await this.driver.findElement(this.logoutButton).click();
    }
}

module.exports = LogoutPage;
