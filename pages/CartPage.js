const { By, until } = require('selenium-webdriver');

class CartPage {
    constructor(driver) {
        this.driver = driver;
        this.cartItems = By.xpath('//*[@id="content"]/div/form/div/table/tbody/tr/td[2]/a');
        this.productQuantityInput = By.xpath('//*[@id="content"]/div/form/div/table/tbody/tr/td[4]/div/div/input');
        this.updateCartButton = By.xpath('//*[@id="content"]/div/form/div/table/tbody/tr/td[4]/div/span/button[1]/i');
        this.emptyCartMessage = By.xpath('//*[@id="content"]/p');
    }

    async navigateToCartPage(url) {
      await this.driver.get(url);
    }

    async getCartItems() {
        const cartItemElements = await this.driver.findElements(this.cartItems);
        const cartItems = [];
        for (const element of cartItemElements) {
            const cartItem = await element.getText();
            cartItems.push(cartItem);
        }
        return cartItems;
    }

    async updateProductQuantity(newQuantity) {
        const quantityInput = await this.driver.findElement(this.productQuantityInput);
        await this.driver.wait(until.elementIsVisible(quantityInput));
        await this.driver.executeScript("arguments[0].value = '';", quantityInput);
        await quantityInput.sendKeys(newQuantity);

        const updateButton = await this.driver.findElement(this.updateCartButton);
        await updateButton.click();
    }

    async getProductQuantity() {
        const quantityInput = await this.driver.findElement(this.productQuantityInput);
        return quantityInput.getAttribute('value');
    }

    async getItemCountInCart() {
      const cartItemElements = await this.driver.findElements(this.cartItems);
      return cartItemElements.length;
    }

    async isCartEmpty() {
      const cartItemElements = await this.driver.findElements(this.cartItems);
      const emptyCartMessageElement = await this.driver.findElement(this.emptyCartMessage);
      return cartItemElements.length === 0 && emptyCartMessageElement.isDisplayed();
    }

}

module.exports = CartPage;