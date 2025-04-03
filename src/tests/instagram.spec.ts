import { test, expect } from '@playwright/test';

test('Wait for dynamic API response', async ({ page }) => {
    await page.goto('https://www.instagram.com/');
    const response = await page.waitForResponse(response => 
        response.url().includes('/your-api-endpoint') && response.status() === 200
    );
    const responseData = await response.json();
    console.log('API Response:', responseData);
    expect(responseData).not.toBeNull;
});
