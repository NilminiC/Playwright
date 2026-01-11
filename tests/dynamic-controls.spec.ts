import { test, expect } from '@playwright/test';
import { DynamicControlsPage } from '../pages/DynamicControlsPage';

test('should remove checkbox and enable input field', async ({ page }) => {
  const dynamicPage = new DynamicControlsPage(page);

  await dynamicPage.navigate();

  await dynamicPage.removeCheckbox();
  expect(await dynamicPage.checkbox.isVisible()).toBeFalsy();

  await dynamicPage.enableInput();
  await dynamicPage.typeIntoInput('Hello');
  const value = await dynamicPage.inputField.inputValue();
  expect(value).toBe('Hello');
});
