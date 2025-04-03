# Instagram E2E Test with Playwright


## Overview
This repository contains an end-to-end (E2E) test for Instagram using Playwright. The test performs the following actions:
- Logs into Instagram.
- Searches for a user.
- Clicks on the message button.
- Validates the username.
- Sends a message to the user.

## Prerequisites
Before running the test, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [Playwright](https://playwright.dev/)

## Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/Beardo-cs/Instagram-Playwright-Automation
   cd Instagram-Playwright-Automation
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

## Configuration
The application URL and test credentials are loaded dynamically from the Playwright config and JSON test data file. Ensure the following setup:
- `APPLICATION_URL` is fetched from `playwright.config.ts`.
- `EMAIL` and `PASSWORD` are read from `testdata.json`.

Example `testdata.json`:
```json
{
  "email": "your-email@example.com",
  "password": "your-password"
}
```

### Fragments
Fragments are required if we have different configurations for development, production, and staging environments. This ensures that different `APPLICATION_URL` and API endpoints are correctly set up based on the environment.

## Running the Test
Execute the test using one of the following commands:
```sh
# Run tests in headed mode and generate report
npm run test

# Run tests in headless mode and generate report
npm run headless-test

# Run tests in Playwright UI for debugging
npm run debug-test-dev
```

## Test Flow
The test follows these steps:

### 1. Login to Instagram
- Navigates to Instagram.
- Logs in using provided credentials.

### 2. Search for a User
- Searches for a user from the landing page.

### 3. Click on the Message Button
- Navigates to the user's account page.
- Clicks on the message button.

### 4. Validate the Username
- Ensures the correct user is selected in the message page.

### 5. Send a Message
- Enters and sends a message to the selected user.

## Test Case
The detailed test case is documented in a Google Spreadsheet. You can access it here:
[Instagram E2E Test Case](https://docs.google.com/spreadsheets/d/1IuN880tinX60OjQdC9Sb_5DeeYhz6hkIHEPZ0DiYBmE/edit?usp=sharing)

## File Structure
```
├── pages/
│   ├── landing.page.ts
│   ├── account.page.ts
│   ├── message.page.ts
│   ├── login.page.ts
├── constants/
│   ├── app.constant.ts
├── testdata/
│   ├── testdata.json
├── tests/
│   ├── instagram.test.ts
├── package.json
├── playwright.config.ts
└── README.md
```

## Reporting
To generate a Playwright report after execution:
```sh
npx playwright show-report
```

