import { expect, Locator, Page } from '@playwright/test';
import path from 'path';

export abstract class BasePage {
    protected page: Page;
    // Constructor
    constructor(page: Page) {
        this.page = page;
    }

    // Browser Actions
    protected async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }
    protected async click(locator: Locator): Promise<void> {
        await this.waitForVisible(locator);
        await locator.click();
    }
    protected async fill(locator: Locator, text: string): Promise<void> {
        await this.waitForVisible(locator);
        await locator.fill(text);
    }
    protected async hover(locator: Locator): Promise<void> {
        await this.waitForVisible(locator);
        await locator.hover();
    }
    protected async clear(locator: Locator): Promise<void> {
        await this.waitForVisible(locator);
        await locator.clear();
    }
    protected async takeScreenshot(name: string): Promise<void> {
        const timestamp = new Date();

        const year = timestamp.getFullYear();
        const month = timestamp.getMonth();
        const day = timestamp.getDate();
        const hour = timestamp.getHours();
        const min = timestamp.getMinutes();
        const sec = timestamp.getSeconds();

        const formattedTimestamp = `${year}${String(month + 1).padStart(2, '0')}${String(day).padStart(2, '0')}-${String(hour).padStart(2, '0')}${String(min).padStart(2, '0')}${String(sec).padStart(2, '0')}`;
        console.log(formattedTimestamp);

        const fileName = `${name}-${formattedTimestamp}.png`;
        const screenshotPath = path.join("test-results", "screenshots", fileName);
        await this.page.screenshot({ path: screenshotPath });
    }

    // Waiting
    protected async waitForVisible(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible' });
    }
    protected async waitForHidden(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'hidden' });
    }

    // Verification
    protected async verifyVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }
    protected async verifyHidden(locator: Locator): Promise<void> {
        await expect(locator).toBeHidden();
    }
    protected async verifyText(locator: Locator, expectedText: string): Promise<void> {
        await expect(locator).toHaveText(expectedText);
    }
    protected async verifyContainsText(locator: Locator, expectedText: string): Promise<void> {
        await expect(locator).toContainText(expectedText);
    }
    protected async verifyUrl(expectedUrl: string | RegExp): Promise<void> {
        await expect(this.page).toHaveURL(expectedUrl);
    }
    protected async verifyTitle(expectedTitle: string): Promise<void> {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    // Information Retrieval
    protected async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }
    protected async getText(locator: Locator): Promise<string> {
        return await locator.innerText();
    }
}