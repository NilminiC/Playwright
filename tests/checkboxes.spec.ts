import { test, expect } from '@playwright/test';
import { CheckboxesPage } from '../pages/CheckboxesPage';

test('both checkboxes should be checked', async ({ page }) => {
  const checkboxesPage = new CheckboxesPage(page);

  await checkboxesPage.navigate();

  await checkboxesPage.ensureFirstCheckboxChecked();
  await checkboxesPage.ensureSecondCheckboxChecked();

  await expect(checkboxesPage.firstCheckbox).toBeChecked();
  await expect(checkboxesPage.secondCheckbox).toBeChecked();
});
