import { test, expect } from "@playwright/test";
import { SignInPage } from "../../portal/pages/SignInPage";
import { UserData } from "../../utils/UserData";
import { HomePage } from "../../website/pages/HomePage";

test("[Smoke] Verify client login with valid credentials", async ({ page }) => {
    // Arrange
    const client = UserData.getClient();
    const signInPage = new SignInPage(page);

    // Act
    await signInPage.open();
    const choicePage = await signInPage.signIn(client.email, client.password);

    // Assert: Verify Choice Page
    await choicePage.verifyChoicePageIsDisplayed();
});