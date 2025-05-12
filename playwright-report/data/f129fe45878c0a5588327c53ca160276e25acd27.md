# Test info

- Name: Compra exitosa de entradas
- Location: C:\Users\valec\learn-playwright-ticket-master\tests\ticket-purchase.spec.ts:3:5

# Error details

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('heading', { name: 'Rock en Vivo 2023' }).locator('xpath=following-sibling::div').getByRole('button', { name: 'Ver detalles' }) to be visible

    at C:\Users\valec\learn-playwright-ticket-master\tests\ticket-purchase.spec.ts:9:28
```

# Page snapshot

```yaml
- banner:
  - link "Ticket Master":
    - /url: /
    - img
    - text: Ticket Master
  - navigation:
    - link "Inicio":
      - /url: /
    - link "Conciertos":
      - /url: /concerts
- main:
  - heading "Conciertos Disponibles" [level=1]
  - paragraph: Encuentra los mejores conciertos y asegura tus entradas de forma rápida y segura.
  - img "Rock en Vivo 2023"
  - heading "Rock en Vivo 2023" [level=3]
  - img
  - text: 14 de diciembre de 2023
  - img
  - text: Estadio Nacional, Ciudad de México
  - paragraph: El festival de rock más grande del año con las mejores bandas nacionales e internacionales. Una experiencia musical inolvidable con más de 8 horas de música en vivo.
  - text: $85.99
  - link "Ver detalles":
    - /url: /concerts/1
  - img "Noche de Jazz"
  - heading "Noche de Jazz" [level=3]
  - img
  - text: 19 de noviembre de 2023
  - img
  - text: Teatro Metropolitan, Ciudad de México
  - paragraph: Una velada elegante con los mejores exponentes del jazz contemporáneo. Disfruta de una atmósfera íntima y sofisticada mientras escuchas a los maestros del género.
  - text: $65.50
  - link "Ver detalles":
    - /url: /concerts/2
  - img "Festival Electrónico"
  - heading "Festival Electrónico" [level=3]
  - img
  - text: 30 de diciembre de 2023
  - img
  - text: Autódromo Hermanos Rodríguez, Ciudad de México
  - paragraph: Despide el año con la mejor música electrónica. DJs internacionales, efectos visuales impresionantes y la mejor producción para una fiesta inolvidable.
  - text: $120.00
  - link "Ver detalles":
    - /url: /concerts/3
  - img "Concierto Sinfónico"
  - heading "Concierto Sinfónico" [level=3]
  - img
  - text: 9 de noviembre de 2023
  - img
  - text: Palacio de Bellas Artes, Ciudad de México
  - paragraph: La orquesta sinfónica nacional presenta las obras maestras de Beethoven y Mozart. Una experiencia cultural que no te puedes perder en el recinto más emblemático del país.
  - text: $75.00
  - link "Ver detalles":
    - /url: /concerts/4
  - img "Festival de Pop Latino"
  - heading "Festival de Pop Latino" [level=3]
  - img
  - text: 4 de diciembre de 2023
  - img
  - text: Foro Sol, Ciudad de México
  - paragraph: Los artistas más populares del momento reunidos en un solo escenario. Más de 6 horas de música pop latina con tus canciones favoritas.
  - text: $95.50
  - link "Ver detalles":
    - /url: /concerts/5
  - img "Noche de Reggaetón"
  - heading "Noche de Reggaetón" [level=3]
  - img
  - text: 24 de noviembre de 2023
  - img
  - text: Arena Ciudad de México, Ciudad de México
  - paragraph: Los mejores exponentes del reggaetón y el trap latino en un concierto explosivo. Prepárate para bailar toda la noche con los éxitos del momento.
  - text: $110.00
  - link "Ver detalles":
    - /url: /concerts/6
  - heading "¿Buscas algo especial?" [level=2]
  - paragraph: Explora nuestra selección completa de eventos y encuentra el concierto perfecto para ti.
  - link "Ver todos los conciertos":
    - /url: /concerts
    - text: Ver todos los conciertos
    - img
- contentinfo: © 2025 Ticket Master. Todos los derechos reservados.
- region "Notifications (F8)":
  - list
- button "Open Next.js Dev Tools":
  - img
- alert
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Compra exitosa de entradas', async ({ page }) => {
   4 |   // 1. El usuario accede a la plataforma.
   5 |   await page.goto('http://localhost:3000');
   6 |
   7 |   // 2. Selecciona el concierto "Rock en Vivo 2023" y va a la página de detalles.
   8 |   const detailsButtonLocator = page.getByRole('heading', { name: 'Rock en Vivo 2023' }).locator('xpath=following-sibling::div').getByRole('button', { name: 'Ver detalles' });
>  9 | await detailsButtonLocator.waitFor();
     |                            ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  10 | await detailsButtonLocator.click();
  11 |
  12 |   // Esperar a que cargue la página de detalles del concierto.
  13 |   await expect(page.getByRole('heading', { name: 'Rock en Vivo 2023' })).toBeVisible();
  14 |
  15 |   // 3. Elige 3 entradas.
  16 |   const quantityInput = page.locator('input[type="number"]');
  17 |   await quantityInput.fill('3');
  18 |
  19 |   // 4. Hace clic en "Comprar entradas".
  20 |   await page.getByRole('button', { name: 'Comprar entradas' }).click();
  21 |
  22 |   // Resultado esperado: La compra se procesa correctamente y vemos la confirmación.
  23 |   const confirmationTitle = await page.locator('text=¡Compra exitosa!').first();
  24 |   await expect(confirmationTitle).toBeVisible();
  25 |
  26 |   // Nota: La verificación del email requeriría una configuración adicional.
  27 | });
```