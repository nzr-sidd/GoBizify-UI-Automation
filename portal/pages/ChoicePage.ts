// Imports
import { Page } from "@playwright/test";
import { BasePage } from "../../core/BasePage";

// Class Declaration
export class ChoicePage extends BasePage {
    // Constructor
    constructor(page: Page) {
        super(page)
    }

    // Private Readonly Locators
    private readonly appLogo = this.page.locator("div.text-center.mb-10 > img");
    private readonly welcomeText = this.page.locator("div.text-center.mb-10 > h1");
    private readonly message = this.page.locator("div.text-center.mb-10 > p");
    private readonly browseWebsiteLink = this.page.locator("div:nth-child(1) > button");
    private readonly clientPortalLink = this.page.locator("div:nth-child(2) > button");

    // Public Business Methods

    // Public Assertion Methods
    public async verifyChoicePageIsDisplayed(): Promise<void> {
        await this.verifyUrl(/choice/);
        await this.verifyLogo();
        await this.verifyWelcomeText();
        await this.verifyMessage();
        await this.verifyBrowseWebsiteLink();
        await this.verifyClientPortalLink();        
    }

    // Private/Protected Helper Methods
    private async verifyLogo(): Promise<void> {
        await this.verifyVisible(this.appLogo);
    }
    private async verifyWelcomeText(): Promise<void> {
        await this.verifyContainsText(this.welcomeText, "Welcome back");
    }
    private async verifyMessage(): Promise<void> {
        await this.verifyVisible(this.message);
    }
    private async verifyBrowseWebsiteLink(): Promise<void> {
        await this.verifyVisible(this.browseWebsiteLink);
    }
    private async verifyClientPortalLink(): Promise<void> {
        await this.verifyVisible(this.clientPortalLink);
    }

}
