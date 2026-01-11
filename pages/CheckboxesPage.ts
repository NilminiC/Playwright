import { Page, Locator } from '@playwright/test';

export class CheckboxesPage {
  readonly page: Page;
  readonly firstCheckbox: Locator;
  readonly secondCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstCheckbox = page.locator('#checkboxes input').nth(0);
    this.secondCheckbox = page.locator('#checkboxes input').nth(1);
  }

  async navigate(): Promise<void> {
    await this.page.goto('/checkboxes');
  }

  async ensureFirstCheckboxChecked(): Promise<void> {
    if (!(await this.firstCheckbox.isChecked())) {
      await this.firstCheckbox.check();
    }
  }

  async ensureSecondCheckboxChecked(): Promise<void> {
    if (!(await this.secondCheckbox.isChecked())) {
      await this.secondCheckbox.check();
    }
  }
}
