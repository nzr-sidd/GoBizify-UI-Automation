// Imports
import { Page } from "@playwright/test";
import { BasePage } from "../../../core/BasePage";
import { SignInPage } from "../../../portal/pages/SignInPage";

// Class Declaration
export class Header extends BasePage {
    // Constructor
    constructor(page: Page) {
        super(page);
    }
    // Private Readonly Locators
    private readonly logo = this.page.locator("");
    private readonly login = this.page.getByText('Login');
    private readonly aboutUs = this.page.locator("");
    private readonly registrationsComplianceMenu = this.page.locator("");
    private readonly taxationMenu = this.page.locator("");
    private readonly ipBrandBuildingMenu = this.page.locator("");
    private readonly legalDrafting = this.page.locator("");
    private readonly contact = this.page.locator("");
    private readonly blogs = this.page.locator("");

    // Public Business Methods
    public async clickLogin(): Promise<SignInPage> {
        await this.click(this.login);
        return new SignInPage(this.page);
    }
}
