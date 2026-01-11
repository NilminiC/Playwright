import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type MyFixtures = {
  loginPage: LoginPage;
  loginAsValidUser: () => Promise<void>;
};

export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  loginAsValidUser: async ({ loginPage, page }, use) => {
    await loginPage.navigate();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await use(async () => {});
    await page.goto('/logout');
  },
});

export { expect } from '@playwright/test';
