import { test as base, Page, APIRequestContext } from '@playwright/test';
import { SignInPage } from '../portal/pages/SignInPage';
import { HomePage } from '../website/pages/HomePage';
import { UserData } from '../utils/UserData';

type Fixtures = {
    signInPage: SignInPage;
    homePage: HomePage;
    portalAuthPage: Page;
    clientUser: ReturnType<typeof UserData.getClient>;
    apiClient: APIRequestContext;
};

export const test = base.extend<Fixtures>({
    signInPage: async ({ page }, use) => {
        const signInPage = new SignInPage(page);
        await use(signInPage);
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    portalAuthPage: async ({ page }, use) => {
        await use(page);
    },
    clientUser: async ({}, use) => {
        const clientUser = UserData.getClient();
        await use(clientUser);
    },
    apiClient: async ({ playwright }, use) => {
        const apiClient = await playwright.request.newContext();
        await use(apiClient);
        await apiClient.dispose();
    },
});

export { expect } from '@playwright/test';
