import { defineConfig, devices } from '@playwright/test';

// See https://playwright.dev/docs/test-configuration.

const desktopViewport = { width: 1920, height: 1080 };

export default defineConfig({
  testDir: './tests',
  // Run tests in files in parallel
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry failed tests only in CI
  retries: process.env.CI ? 2 : 0,

  // Use a single worker in CI for stability
  workers: process.env.CI ? 1 : undefined,

  // Reporting
  reporter: [
    ['list'],
    [
      'allure-playwright',
      {
        resultsDir: 'allure-results',
      },
    ],
  ],

  // Shared settings
  use: {
    // Local = headed, CI = headless
    headless: !!process.env.CI,

    // Capture screenshot only when a test fails
    screenshot: 'only-on-failure',

    // Collect trace on the first retry
    trace: 'on-first-retry',
  },

  // Browser projects
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        deviceScaleFactor: undefined,
        viewport: process.env.CI
          ? { width: 1920, height: 1080 }
          : null,

        launchOptions: process.env.CI
          ? undefined
          : {
            args: ['--start-maximized'],
          },
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        deviceScaleFactor: undefined,
        viewport: desktopViewport,
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        viewport: desktopViewport,
      },
    },
  ],
});
