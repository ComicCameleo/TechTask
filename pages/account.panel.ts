import { expect, Locator, Page } from '@playwright/test';

export default class AccountPanel {

    private readonly loginButton: Locator

    constructor(page: Page) {
        this.loginButton = page.getByTestId("log-in"); 
    }

    async openLoginPopup()
    {
        await this.loginButton.click();
    }
}