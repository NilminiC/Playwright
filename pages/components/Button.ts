import { Page, Locator } from '@playwright/test';

export class Button {
  readonly locator: Locator;

  constructor(page: Page, selector: string) {
    this.locator = page.locator(selector);
  }

  async click(): Promise<void> {
    await this.locator.click();
  }

  async isVisible(): Promise<boolean> {
    return await this.locator.isVisible();
  }

  async getText(): Promise<string> {
    return await this.locator.textContent() || '';
  }
}
