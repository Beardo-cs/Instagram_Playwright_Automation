import { Page } from "@playwright/test";

export class LandingPage {
  constructor(private readonly page: Page) {}

  async ValidateDashboardText() {
    return await this.page.getByText("Not now").click();
  }
  async SearchUser(){
    await this.page.locator("//*[@aria-label='Search']").click();
    await this.page.locator("//*[@placeholder='Search']").first().fill("theexotic_h_");
    await this.page.locator("//*[text()='theexotic_h_']").click();

  }
}
