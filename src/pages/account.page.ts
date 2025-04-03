import { expect,Page } from "@playwright/test";

export class AccountPage {
  constructor(private readonly page: Page) {}
  async ClickOnMessageonAccountPage() {
    await this.page.locator("//*[text()='Message']").click();
  }
}
