import { test } from "../../fixtures/test";
import { UserData } from "../../utils/UserData";

test("Verify client login from website to choice page", {
    tag: ['@smoke', '@e2e', '@website', '@portal', '@regression'],
}, async ({ homePage, clientUser }) => {
    // Arrange

    // Act
    await homePage.open();
    const signInPage = await homePage.clickLogin();
    const choicePage = await signInPage.signIn(
        clientUser.email,
        clientUser.password
    );

    // Assert: Verify Choice Page
    await choicePage.verifyChoicePageIsDisplayed();
});