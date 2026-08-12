import { test } from "@playwright/test";
import { UserData } from "../../utils/UserData";
import { HomePage } from "../../website/pages/HomePage";

test("Verify client login from website to choice page", {
    tag: ['@smoke', '@e2e', '@website', '@portal', '@regression'],
}, async ({ page }) => {
    // Arrange
    const client = UserData.getClient();
    const homePage = new HomePage(page);

    // Act
    await homePage.open();
    const signInPage = await homePage.clickLogin();
    const choicePage = await signInPage.signIn(client.email, client.password);

    // Assert: Verify Choice Page
    await choicePage.verifyChoicePageIsDisplayed();
});