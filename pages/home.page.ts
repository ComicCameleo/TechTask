import { expect, Locator, Page } from '@playwright/test';

export default class HomePage {
    private readonly newOrderButton: Locator
    private readonly closeAllOrdersButton: Locator
    readonly positionCounterLabel: Locator
    readonly closeOrderButtonList: Locator

    constructor(page: Page) {
        this.newOrderButton = page.locator("//*[@id ='ic_new_order']/ancestor::button");
        this.positionCounterLabel = page.locator("//*[text()='Positions']/div");
        this.closeOrderButtonList = page.locator("//*[@id='ic_access_cross']");
        this.closeAllOrdersButton = page.locator("//button//*[contains(text(),'Close')]");
    }

    async openNewOrderPopUp()
    {
        await this.newOrderButton.click();
    }

    async cleanAllOrders()
    {
        await this.closeAllOrdersButton.click();
    }
}
