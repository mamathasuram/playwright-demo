exports.addtocartPage = class addtocartPage {
    constructor(page) {
        this.page = page;
       
        this.addtocart1 = '//button[@id="add-to-cart-sauce-labs-backpack"]';
        this.addtocart2 = '//button[@id="add-to-cart-sauce-labs-bolt-t-shirt"]';
    }

    async ClickOnaddtocart1() {
        await this.page.locator(this.addtocart1).click();
    }

    async ClickOnaddtocart2() {
        await this.page.locator(this.addtocart2).click();
    }
}
