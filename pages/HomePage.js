const { By } = require('selenium-webdriver');
const CatalogPage = require('../pages/CatalogPage');


class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.pageTitle = By.css('title');
        this.catalogLink = By.xpath('//*[@id="top"]/div/div[1]/div/div[3]/div/div/div/div/div[1]/a/div/div[1]');
        this.searchInput = By.xpath('//*[@id="search"]/div/div/span/input[2]');
        this.searchButton = By.className('search-button');
    }

    async navigateToHomePage(url) {
        await this.driver.get(url);
    }

    async getPageTitle() {
        const titleElement = await this.driver.findElement(this.pageTitle);
        return titleElement.getText();
    }

    async navigateToCatalog() {
      const catalogLinkElement = await this.driver.findElement(this.catalogLink);
      await catalogLinkElement.click();
      return new CatalogPage(this.driver);
    }

    async searchForProduct(keyword) {
      const searchInputField = await this.driver.findElement(this.searchInput);
      const searchButton = await this.driver.findElement(this.searchButton);

      await searchInputField.sendKeys(keyword);
      await searchButton.click();
    }
}

module.exports = HomePage;