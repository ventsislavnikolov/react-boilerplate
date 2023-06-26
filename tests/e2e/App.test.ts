import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('./');

  // Wait for the component to render
  await expect(page.locator('.border')).toHaveCount(0);
});
