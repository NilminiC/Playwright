import { test, expect } from '../fixtures/auth.fixture';

test('login successfully with valid credentials', async ({ loginPage, loginAsValidUser }) => {
  await loginAsValidUser();

  const flash = await loginPage.getFlashMessage();
  expect(flash).toContain('You logged into a secure area!');
});

test('login fails with invalid credentials', async ({ loginPage }) => {
  await loginPage.navigate();
  await loginPage.login('wronguser', 'wrongpass');

  const flash = await loginPage.getFlashMessage();
  expect(flash).toContain('Your username is invalid!');
});
