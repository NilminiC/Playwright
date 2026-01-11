import { defineConfig, devices } from '@playwright/test';
import { BASE_URL } from './config/env.config';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  
  projects: [
    {
      name: 'chromium',
      use: { browserName:"chromium", ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { browserName:"firefox", ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { browserName:"webkit", ...devices['Desktop Safari'] },
    },
  ],
});
