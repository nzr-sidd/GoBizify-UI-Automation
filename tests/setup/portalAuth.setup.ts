import { test as setup } from '@playwright/test';
import { SignInPage } from '../../portal/pages/SignInPage';
import { UserData } from '../../utils/UserData';
import path from 'path';

const authFile = path.resolve('playwright/.auth/portal-user.json');
setup('authenticate portal user', async ({ page }) => {
    const client = UserData.getClient();

    const signInPage = new SignInPage(page);

    await signInPage.open();

    const choicePage = await signInPage.signIn(
        client.email,
        client.password
    );

    await choicePage.verifyChoicePageIsDisplayed();

    await page.context().storageState({
        path: authFile,
    });
});
