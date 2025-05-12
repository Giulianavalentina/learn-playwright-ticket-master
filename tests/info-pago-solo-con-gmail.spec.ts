import { test, expect } from '@playwright/test';

test('Solo completando el campo del email para recibir las entradas, deberia haber errores en los demás por no completarlos con los datos del usuario', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$120\.00Ver detalles$/ }).getByRole('link').click();
  await page.getByRole('button', { name: 'Comprar entradas' }).click();
  await page.getByRole('textbox', { name: 'Email para recibir las' }).click();
  await page.getByRole('textbox', { name: 'Email para recibir las' }).fill('lopezhector@gmail.com');
  await page.getByRole('button', { name: 'Completar compra' }).click();
  await page.getByText('El nombre debe tener al menos').click();
  await page.getByText('El número de tarjeta debe').click();
  await page.getByText('Selecciona un mes').click();
  await page.getByText('Selecciona un año').click();
  await page.getByText('El CVC debe tener 3 o 4 dí').click();
  await page.getByRole('button', { name: 'Completar compra' }).click();
  await page.getByRole('main').locator('div').filter({ hasText: 'Nombre del titularEl nombre debe tener al menos 3 caracteresNúmero de tarjetaEl' }).nth(4).click();
});