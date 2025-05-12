import { test, expect } from '@playwright/test';

test('Pude comprar 2 entradas para Rock En Vivo 2023, con los datos que se me pedia del usuario', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Inicio' }).click();
  await page.locator('div').filter({ hasText: /^\$95\.50Ver detalles$/ }).getByRole('link').click();
  await page.locator('.space-y-4 > div').first().click();
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$85\.99Ver detalles$/ }).getByRole('link').click();
  await page.getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Comprar entradas' }).click();
  await page.getByRole('textbox', { name: 'Nombre del titular' }).click();
  await page.getByRole('textbox', { name: 'Nombre del titular' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Nombre del titular' }).fill('LOPEZ RUBEN ');
  await page.getByRole('textbox', { name: 'Número de tarjeta' }).click();
  await page.getByRole('combobox', { name: 'Mes' }).click();
  await page.getByRole('option', { name: '08' }).click();
  await page.getByRole('combobox', { name: 'Año' }).click();
  await page.getByRole('option', { name: '2029' }).click({
    button: 'middle'
  });
  await page.getByRole('textbox', { name: 'CVC' }).click();
  await page.getByRole('textbox', { name: 'CVC' }).fill('123');
  await page.getByRole('textbox', { name: 'Email para recibir las' }).click();
  await page.getByRole('textbox', { name: 'Email para recibir las' }).fill('');
  await page.getByRole('textbox', { name: 'Email para recibir las' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Email para recibir las' }).fill('rubenlopez@gmail.com');
  await page.getByRole('textbox', { name: 'Número de tarjeta' }).click();
  await page.getByRole('textbox', { name: 'Número de tarjeta' }).fill('1234123412341234');
  await page.getByRole('button', { name: 'Completar compra' }).click();
  await page.locator('div').filter({ hasText: '¡Compra exitosa!Tu compra ha' }).nth(1).click();
});

