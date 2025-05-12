import { test, expect } from '@playwright/test';

test('Mi primera prueba', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByText('Get started')).toBeVisible();
});