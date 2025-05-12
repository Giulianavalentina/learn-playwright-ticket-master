import { test, expect } from '@playwright/test';

test('En la información de pago solo completando el año, tienen que saltar errores en los otros campos', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$65\.50Ver detalles$/ }).getByRole('link').click();
  await page.getByRole('button', { name: 'Comprar entradas' }).click();
  await page.getByRole('combobox', { name: 'Año' }).click();
  await page.getByRole('option', { name: '2030' }).click();
  await page.getByRole('button', { name: 'Completar compra' }).click();
  await page.getByText('El nombre debe tener al menos').click();
  await page.getByText('El número de tarjeta debe').click();
  await page.getByText('Selecciona un mes').click();
  await page.getByText('El CVC debe tener 3 o 4 dí').click();
  await page.getByText('Ingresa un email válido').click();
  await page.getByRole('button', { name: 'Completar compra' }).click();
  await page.getByRole('main').locator('div').filter({ hasText: 'Nombre del titularEl nombre debe tener al menos 3 caracteresNúmero de tarjetaEl' }).nth(4).click();
});