const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { VacationPage } = require('../pages/VacationPage');
const dados = require('../data/destino-semana.json');

for (const d of dados) {
  test(`Destino da semana: ${d.cenario}`, async ({ page }) => {
    const home = new HomePage(page);
    const vacation = new VacationPage(page);

    await home.abrir();
    await home.clicarDestinoDaSemana();

    await expect(page).toHaveURL(/vacation/);
    await expect(page.locator('body')).not.toContainText(/Rate exceeded/i);
    await expect(vacation.titulo).toContainText(d.textoEsperado);
    await expect(vacation.titulo).toContainText(d.destinoEsperado);
    await expect(vacation.imagem).toBeVisible();
  });
}
