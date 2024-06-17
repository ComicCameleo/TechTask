import { expect, Locator, Page } from '@playwright/test';

export default class NewMarketOrderPopUp {
    private readonly placeOrderButton: Locator
    private readonly okButton: Locator

    constructor(page: Page) {
        this.placeOrderButton = page.getByText("Place Order");
        this.okButton = page.locator("//*[contains(text(), 'Order Filled ')]/ancestor::div[contains(@class,'root_el')]/following-sibling::div//div[text()='OK']");
    }

    async placeOrder()
    {
        await this.placeOrderButton.click();
        await this.okButton.click();
    }
}