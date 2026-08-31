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
    private readonly appLogo = this.page.getByRole('img', { name: 'GoBizify' });
    private readonly welcomeText = this.page.getByRole('heading', { name: /Welcome back/i });
    private readonly message = this.page.getByText("Choose where you'd like to go. Browse our services or access your dedicated client portal.");
    private readonly browseWebsiteButton = this.page.getByRole('button', { name: /Browse Website/ });
    private readonly clientPortalButton = this.page.getByRole('button', { name: /Client Portal/ });

    // Public Business Methods

    // Public Assertion Methods
    public async verifyChoicePageIsDisplayed(): Promise<void> {
        await this.verifyUrl(/choice/);
        await this.verifyLogo();
        await this.verifyWelcomeText();
        await this.verifyMessage();
        await this.verifyBrowseWebsiteButton();
        await this.verifyClientPortalButton();
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
    private async verifyBrowseWebsiteButton(): Promise<void> {
        await this.verifyVisible(this.browseWebsiteButton);
    }
    private async verifyClientPortalButton(): Promise<void> {
        await this.verifyVisible(this.clientPortalButton);
    }

}
