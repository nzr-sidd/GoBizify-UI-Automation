import { test, expect } from '../../../fixtures/test';

test('Verify portal authenticated session', async ({ portalAuthPage }) => {
    await portalAuthPage.goto('https://dev-portal.gobizify.in/choice');

    await expect(portalAuthPage).toHaveURL(/choice/);
});