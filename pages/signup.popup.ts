import { expect, Locator, Page } from '@playwright/test';

export default class SignUpPopUp {
    private readonly emailInput: Locator
    private readonly passwordInput: Locator
    private readonly logInButton: Locator
    private readonly logInTab: Locator

    constructor(page: Page) {
        this.emailInput = page.locator("//input[contains(@placeholder, 'email')]");
        this.passwordInput = page.locator("//input[contains(@placeholder, 'password')]");
        this.logInButton = page.locator("//button[@type = 'submit']");
        this.logInTab = page.locator("//*[@data-smoke-id = 'signup-tab']/preceding-sibling::*");
    }

    async signIn(email: string, password:string)
    {
        await this.logInTab.click();
        await this.emailInput.clear();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.logInButton.click();
    }
}