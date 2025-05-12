import { test, expect } from '@playwright/test';

test('Cuando no hay entradas en un festival me tiene que aparecer un error', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$95\.50Ver detalles$/ }).getByRole('link').click();
  await page.locator('div').filter({ hasText: 'Festival de Pop Latino4 de' }).nth(2).click();
  await page.getByText('Lo sentimos, no hay entradas').click();
});