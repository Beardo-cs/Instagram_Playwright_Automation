import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private readonly page: Page) {}


  async navigateToInstagram(appUrl:string) {
   await this.page.goto(appUrl);
  }
  async loginToInstagram(email: string, password: string) {
    await this.page.fill('//*[@name="username"]', email);
    await this.page.fill('//*[@name="password"]', password);
    await this.page.click('//button[@type="submit"]');
  }
}
