import { test, expect } from '@playwright/test';

test('Compra exitosa de entradas', async ({ page }) => {
  // 1. El usuario accede a la plataforma.
  await page.goto('http://localhost:3000');

  // 2. Selecciona el concierto "Rock en Vivo 2023" y va a la página de detalles.
  await page.getByText('Rock en Vivo 2023').locator('xpath=../..').getByRole('button', { name: 'Ver detalles' }).click();

  // Esperar a que cargue la página de detalles del concierto.
  await expect(page.getByRole('heading', { name: 'Rock en Vivo 2023' })).toBeVisible();

  // 3. Elige 3 entradas.
  const quantityInput = page.locator('input[type="number"]');
  await quantityInput.fill('3');

  // 4. Hace clic en "Comprar entradas".
  await page.getByRole('button', { name: 'Comprar entradas' }).click();

  // Resultado esperado: La compra se procesa correctamente y vemos la confirmación.
  const confirmationTitle = await page.locator('text=¡Compra exitosa!').first();
  await expect(confirmationTitle).toBeVisible();

  // Nota: La verificación del email requeriría una configuración adicional.
});