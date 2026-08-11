import { Page } from "@playwright/test";
import { BasePage } from "../../../core/BasePage";

export class WhatsAppChatWidget extends BasePage {
    constructor(page: Page) {
        super(page)
    }
}