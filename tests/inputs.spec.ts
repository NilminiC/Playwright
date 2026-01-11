import { test, expect } from '@playwright/test';
import { InputsPage } from '../pages/InputsPage';

test('should enter a number into input field', async ({ page }) => {
  const inputsPage = new InputsPage(page);

  await inputsPage.navigate();
  await inputsPage.enterNumber(777);

  const value = await inputsPage.getValue();
  expect(value).toBe('777');
});
