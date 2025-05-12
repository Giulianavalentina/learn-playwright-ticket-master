import { test, expect } from '@playwright/test';

test('Al tocar el boton de abajo de la página de inicio "Ver todos los conciertos", deberian mostrarse todos los conciertos', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Inicio' }).click();
  await page.getByRole('main').locator('div').filter({ hasText: 'Conciertos' }).click();
  await page.getByRole('link', { name: 'Ver todos los conciertos' }).click();
  await page.getByText('Todos los conciertosRock en').click();
});