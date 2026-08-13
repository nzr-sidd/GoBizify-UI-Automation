// Imports
import { Page } from "@playwright/test";
import { BasePage } from "../../core/BasePage";
import { ChoicePage } from "./ChoicePage";
import { currentEnvironment } from "../../config/currentEnvironment";
import { routes } from "../../config/routes";

// Class Declaration
export class SignInPage extends BasePage {
    // Constructor
    constructor(page: Page) {
        super(page);
    }

    // Private Readonly Locators
    private readonly emailInput = this.page.locator("//input[@type='email']");
    private readonly passwordInput = this.page.locator("//input[@type='password']");
    private readonly signInButton = this.page.locator("//button[@type='submit']");

    // Public Business Methods
    public async open(): Promise<void> {
        const url = currentEnvironment.portal + routes.portal.signIn;
        console.log("Navigating to: ", url);
        await this.navigateTo(url);
    }
    public async signIn(email: string, password: string): Promise<ChoicePage> {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickSignInButton();
        return new ChoicePage(this.page);
    }

    // Public Assertion Methods

    // Private/Protected Helper Methods
    private async enterEmail(email: string): Promise<void> {
        await this.fill(this.emailInput, email);
    }
    private async enterPassword(password: string): Promise<void> {
        await this.fill(this.passwordInput, password);
    }
    private async clickSignInButton(): Promise<void> {
        await this.click(this.signInButton);
    }

}