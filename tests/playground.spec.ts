import { test, expect } from '@playwright/test';
import { SignInPage } from '../portal/pages/SignInPage';
import { HomePage } from '../website/pages/HomePage';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test', async ({page}) =>{
  const timestamp = new Date();
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth();
  const day = timestamp.getDate();
  const hour = timestamp.getHours();
  const min = timestamp.getMinutes();
  const sec = timestamp.getSeconds();
  const formattedTimestamp = 
  `${year}${String(month+1).padStart(2,'0')}${String(day).padStart(2,'0')}-${String(hour).padStart(2,'0')}${String(min).padStart(2,'0')}${String(sec).padStart(2,'0')}`;
  console.log(formattedTimestamp);
});