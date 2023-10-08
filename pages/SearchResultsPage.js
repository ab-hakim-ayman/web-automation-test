const { By } = require('selenium-webdriver');

class SearchResultsPage {
    constructor(driver) {
        this.driver = driver;
        this.searchResultsTitle = By.xpath('//*[@id="content"]/div[3]/div[2]/div[1]/div/div[2]/div[1]/a');
    }

    async getSearchResultsTitle() {
        const titleElement = await this.driver.findElement(this.searchResultsTitle);
        return titleElement.getText();
    }
}

module.exports = SearchResultsPage;