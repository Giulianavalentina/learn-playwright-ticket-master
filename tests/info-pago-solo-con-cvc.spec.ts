import { test, expect } from '@playwright/test';

test('Al completar solo el CVC, deberia saltar errores en los otros campos para completar', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$85\.99Ver detalles$/ }).getByRole('link').click();
  await page.getByRole('button', { name: 'Comprar entradas' }).click();
  await page.getByRole('textbox', { name: 'CVC' }).click();
  await page.getByRole('textbox', { name: 'CVC' }).fill('317');
  await page.getByRole('button', { name: 'Completar compra' }).click();
  await page.getByText('El nombre debe tener al menos').click();
  await page.getByText('El número de tarjeta debe').click();
  await page.getByText('Selecciona un mes').click();
  await page.getByText('Selecciona un año').click();
  await page.getByText('Ingresa un email válido').click();
  await page.getByRole('button', { name: 'Completar compra' }).click();
  await page.getByRole('main').locator('div').filter({ hasText: 'Nombre del titularEl nombre debe tener al menos 3 caracteresNúmero de tarjetaEl' }).nth(4).click();
});