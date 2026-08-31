import { test } from "../../fixtures/test";

test("Verify client login with valid credentials", {
    tag: ['@smoke', '@portal', '@regression'],
}, async ({ signInPage, clientUser }) => {
    // Arrange

    // Act
    await signInPage.open();
    const choicePage = await signInPage.signIn(
        clientUser.email,
        clientUser.password
    );

    // Assert: Verify Choice Page
    await choicePage.verifyChoicePageIsDisplayed();
});