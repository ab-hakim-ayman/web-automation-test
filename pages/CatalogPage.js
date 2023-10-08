const { By } = require('selenium-webdriver');

class CatalogPage {
    constructor(driver) {
        this.driver = driver;
        this.productCategories = By.className('refine-item ');
    }

    async getProductCategories() {
        const categoryElements = await this.driver.findElements(this.productCategories);
        const categories = [];
        for (const element of categoryElements) {
            const category = await element.getText();
            categories.push(category);
        }
        return categories;
    }
}

module.exports = CatalogPage;
