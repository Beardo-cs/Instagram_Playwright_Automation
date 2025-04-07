import { test, expect } from "@playwright/test";
import { EMAIL, PASSWORD, APPLICATION_URL } from "./constants/app.constant";
import { LandingPage } from "../pages/landing.page";
import { AccountPage } from "../pages/account.page";
import { MessagePage } from "../pages/message.page";
import { LoginPage } from "../pages/login.page";

test.describe("Instagram E2E Test", () => {
  let landingPage: LandingPage;
  let accountPage: AccountPage;
  let messagePage: MessagePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    landingPage = new LandingPage(page);
    accountPage = new AccountPage(page);
    messagePage = new MessagePage(page);
  });

  test("Login, Search User, and Send a Message", async ({ page }) => {
    // Step 1: Login to Instagram
    await test.step("Login to Instagram", async () => {
      await loginPage.navigateToInstagram(APPLICATION_URL);
      await loginPage.loginToInstagram(EMAIL, PASSWORD);
    });

    // Step 2: Search for a user
    await test.step("Search for a user on the Landing Page", async () => {
      await landingPage.SearchUser(); // Directly call LandingPage.SearchUser()
    });

    // Step 3: Click on the message button
    await test.step("Click on the message button on the Account page", async () => {
      await accountPage.ClickOnMessageonAccountPage(); // Directly call AccountPage method
    });

    // Step 4: Validate the username
    await test.step("Validate the username on the Message Page", async () => {
      const userName = await messagePage.ValidateUserName(); // Directly call MessagePage method
      expect(userName).toBe("Harsha Sekar");
    });

    // Step 5: Enter and send a message
    await test.step("Enter and send a message", async () => {
      await messagePage.EnterMessage();
      await messagePage.ClickOnSend(); // Directly call MessagePage method
    });
  });
});
