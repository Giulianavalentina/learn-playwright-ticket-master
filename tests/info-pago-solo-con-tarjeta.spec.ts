import { test, expect } from '@playwright/test';

test('En la información de pago, al solo poner numero de la tarjeta deberia saltar errores en los campos anteriores y los que le siguen', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$65\.50Ver detalles$/ }).getByRole('link').click();
  await page.getByRole('button', { name: 'Comprar entradas' }).click();
  await page.getByRole('textbox', { name: 'Número de tarjeta' }).click();
  await page.getByRole('textbox', { name: 'Número de tarjeta' }).fill('1234123412341234');
  await page.getByRole('button', { name: 'Completar compra' }).click();
  await page.getByText('El nombre debe tener al menos').click();
  await page.getByText('Selecciona un mes').click();
  await page.getByText('Selecciona un año').click();
  await page.getByText('El CVC debe tener 3 o 4 dí').click();
  await page.getByText('Ingresa un email válido').click();
  await page.getByRole('main').locator('div').filter({ hasText: 'Nombre del titularEl nombre debe tener al menos 3 caracteresNúmero de' }).nth(4).click();
});