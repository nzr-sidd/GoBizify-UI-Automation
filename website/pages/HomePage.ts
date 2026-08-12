// Imports
import { Page } from "@playwright/test";
import { BasePage } from "../../core/BasePage";
import { Header } from "../components/navigation/Header";
import { CookieBanner } from "../components/common/CookieBanner";
import { WhatsAppChatWidget } from "../components/common/WhatsAppChatWidget";
import { Footer } from "../components/navigation/Footer";
import { SignInPage } from "../../portal/pages/SignInPage";
import { currentEnvironment } from "../../config/currentEnvironment";
import { routes } from "../../config/routes";

// Class Declaration
export class HomePage extends BasePage {
    // Constructor
    constructor(page: Page) {
        super(page);
    }

    // Private Readonly Locators
    private readonly header = new Header(this.page);
    private readonly cookieBanner = new CookieBanner(this.page);
    private readonly whatsAppChatWidget = new WhatsAppChatWidget(this.page);
    private readonly footer = new Footer(this.page);

    // Public Business Methods
    public async open(): Promise<void> {
        const url = currentEnvironment.website + routes.website.home;
        console.log("Navigating to: ", url);
        await this.navigateTo(url);
    }
    public async clickLogin(): Promise<SignInPage> {
        return this.header.clickLogin();
    }
}