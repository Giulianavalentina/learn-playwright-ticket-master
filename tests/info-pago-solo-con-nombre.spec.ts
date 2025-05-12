import { test, expect } from '@playwright/test';

test('En la información de pago tiene que salir errores en los demas campos, excepto en el campo de nombre del titular', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$65\.50Ver detalles$/ }).getByRole('link').click();
  await page.getByRole('button', { name: 'Comprar entradas' }).click();
  await page.getByRole('textbox', { name: 'Nombre del titular' }).click();
  await page.getByRole('textbox', { name: 'Nombre del titular' }).fill('lopez micaela');
  await page.getByRole('button', { name: 'Completar compra' }).click();
  await page.getByText('El número de tarjeta debe').click();
  await page.getByText('Selecciona un mes').click();
  await page.getByText('Selecciona un año').click();
  await page.getByText('El CVC debe tener 3 o 4 dí').click();
  await page.getByText('Ingresa un email válido').click();
  await page.getByRole('main').locator('div').filter({ hasText: 'Nombre del titularNúmero de' }).nth(4).click();
});