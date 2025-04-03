import { Page } from "@playwright/test";

export class MessagePage {
  constructor(private readonly page: Page) {}

  async ValidateUserName(){
    return (this.page.locator("//*[@title='Harsha Sekar']")).textContent();
  }
  async EnterMessage() {
    await this.page.locator("//*[@aria-label='Message']").fill("Hi");
  }
  async ClickOnSend(){
    await this.page.locator("//*[text()='Send']").click();
  }





}
