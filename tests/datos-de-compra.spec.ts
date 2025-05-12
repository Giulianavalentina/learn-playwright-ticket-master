import { test, expect } from '@playwright/test';

test('Al no poner los datos para completar la compra, deberia saltar errores en los campos', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$65\.50Ver detalles$/ }).getByRole('link').click();
  await page.getByRole('button', { name: 'Comprar entradas' }).click();
  await page.getByRole('button', { name: 'Completar compra' }).click();
  await page.getByText('Nombre del titular').click();
  await page.getByText('El nombre debe tener al menos').click();
  await page.getByText('El número de tarjeta debe').click();
  await page.getByText('Selecciona un mes').click();
  await page.getByText('Selecciona un año').click();
  await page.getByText('El CVC debe tener 3 o 4 dí').click();
  await page.getByText('Ingresa un email válido').click();
  await page.locator('div').filter({ hasText: 'Resumen de compraDetalles de tu pedidoNoche de Jazz19 de noviembre de 2023 - 19' }).nth(2).click();
});