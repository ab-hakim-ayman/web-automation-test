const { By, until } = require('selenium-webdriver');

class WishListPage {
    constructor(driver) {
        this.driver = driver;
        this.wishListItems = By.xpath('//*[@id="content"]/div[1]/table/tbody/tr[1]/td[2]/a');
        this.deleteWishButton = By.xpath('//*[@id="content"]/div[1]/table/tbody/tr[1]/td[6]/a');
        this.emptyWishListMessage = By.xpath('//*[@id="content"]/p');
        this.successMessage = By.className('alert');
    }

    async navigateToWishListPage(url) {
      await this.driver.get(url);
    }

    async getWishListItems() {
        const wishItemElements = await this.driver.findElements(this.wishListItems);
        const wishListItems = [];
        for (const element of wishItemElements) {
            const wishListItem = await element.getText();
            wishListItems.push(wishListItem);
        }
        return wishListItems;
    }

    async updateWishList() {
        const deleteWishButton = await this.driver.findElement(this.deleteWishButton);
        await deleteWishButton.click();
        await this.driver.wait(until.elementLocated(By.className('alert')), 5000);
    }

    async getSuccessMessage() {
      const successMessageElement = await this.driver.findElement(this.successMessage);
      return successMessageElement.getText();
    }

    async getEmptyMessage() {
      const successMessageElement = await this.driver.findElement(this.emptyWishListMessage);
      return successMessageElement.getText();
    }

    async getItemCountInWishList() {
      const wishListItemElements = await this.driver.findElements(this.wishListItems);
      return wishListItemElements.length;
    }

    async isWishListEmpty() {
      const wishListItemElements = await this.driver.findElements(this.wishListItems);
      const emptyWishListMessageElement = await this.driver.findElement(this.emptyWishListMessage);
      return wishListItemElements.length === 0 && emptyWishListMessageElement.isDisplayed();
    }

}

module.exports = WishListPage;