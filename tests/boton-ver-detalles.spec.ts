import { test, expect } from '@playwright/test';

test('En un concierto seleccionado, el boton de "Ver Detalles" tendria que mostrar los detalles', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$65\.50Ver detalles$/ }).getByRole('link').click();
  await page.locator('div').filter({ hasText: 'Noche de Jazz19 de noviembre' }).nth(2).click();
});