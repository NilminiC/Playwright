import { Page, Locator, expect } from '@playwright/test';
import { Button } from './components/Button';

export class DynamicControlsPage {
  readonly page: Page;
  readonly checkbox: Locator;
  readonly removeButton: Button;
  readonly enableButton: Button;
  readonly message: Locator;
  readonly inputField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkbox = page.locator('#checkbox');
    this.removeButton = new Button(page, 'button:has-text("Remove")');
    this.enableButton = new Button(page, 'button:has-text("Enable")');
    this.message = page.locator('#message');
    this.inputField = page.locator('input[type="text"]');
  }

  async navigate(): Promise<void> {
    await this.page.goto('/dynamic_controls');
  }

  async removeCheckbox(): Promise<void> {
    await this.removeButton.click();
    await expect(this.message).toHaveText("It's gone!");
  }

  async enableInput(): Promise<void> {
    await this.enableButton.click();
    await expect(this.message).toHaveText("It's enabled!");
  }

  async typeIntoInput(text: string): Promise<void> {
    await this.inputField.fill(text);
  }
}
