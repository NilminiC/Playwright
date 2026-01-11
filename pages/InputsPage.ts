import { Page, Locator } from '@playwright/test';

export class InputsPage {
  readonly page: Page;
  readonly inputField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputField = page.locator('input[type="number"]');
  }

  async navigate(): Promise<void> {
    await this.page.goto('/inputs');
  }

  async enterNumber(value: number): Promise<void> {
    await this.inputField.fill(value.toString());
  }

  async getValue(): Promise<string> {
    return await this.inputField.inputValue();
  }
}
