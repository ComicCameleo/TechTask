import { expect, Locator, Page } from '@playwright/test';

export default class HomePage {
    private readonly loginButton: Locator
    private readonly newOrderButton: Locator
    private readonly closeAllOrdersButton: Locator
    readonly positionCounterLabel: Locator
    readonly closeOrderButtonList: Locator

    constructor(page: Page) {
        this.loginButton = page.getByTestId("log-in");
        this.newOrderButton = page.locator("//*[@id ='ic_new_order']/ancestor::button");
        this.positionCounterLabel = page.locator("//*[text()='Positions']/div");
        this.closeOrderButtonList = page.locator("//*[@id='ic_access_cross']");
        this.closeAllOrdersButton = page.locator("//button//*[contains(text(),'Close')]");
    }

    async openLoginPopup()
    {
        await this.loginButton.click();
    }

    async openNewOrderPopUp()
    {
        await this.newOrderButton.click();
    }
z
    async cleanAllOrders()
    {
        if(await this.closeAllOrdersButton.isEnabled())
        {
            await this.closeAllOrdersButton.click();
        }
    }
}