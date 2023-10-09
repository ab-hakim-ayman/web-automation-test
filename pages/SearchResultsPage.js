const { By } = require('selenium-webdriver');


class SearchResultsPage {
    constructor(driver) {
        this.driver = driver;
        this.searchResultsTitle = By.xpath('//*[@id="content"]/div[3]/div[2]/div[1]/div/div[2]/div[1]/a');
        this.productLinks = By.className('product-layout');
    }

    async getSearchResultsTitle() {
        const titleElement = await this.driver.findElement(this.searchResultsTitle);
        return titleElement.getText();
    }

    async selectProductAtIndex(index) {
        const productElements = await this.driver.findElements(this.productLinks);
        await productElements[index].click();
    }
}

module.exports = SearchResultsPage;