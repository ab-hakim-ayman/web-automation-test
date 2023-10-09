const { By } = require('selenium-webdriver');

class ProductPage {
    constructor(driver) {
        this.driver = driver;
        this.addToCartButton = By.xpath('//*[@id="button-cart"]');
        this.addToWishListButton = By.xpath('//*//*[@id="product"]/div[3]/div/div[2]/a');
    }

    async addToCart() {
        const addToCartButton = await this.driver.findElement(this.addToCartButton);
        await addToCartButton.click();
    }

    async addToWishList() {
      const addToWishListButton = await this.driver.findElement(this.addToWishListButton);
      await addToWishListButton.click();
    }

    async navigateToCart() {
      await this.driver.get('https://www.tvhut.com.bd/index.php?route=checkout/cart');
    }

    async navigateToWishList() {
      await this.driver.get('https://www.tvhut.com.bd/index.php?route=account/wishlist');
    }
}

module.exports = ProductPage;