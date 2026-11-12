const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ReservePage } = require('../pages/ReservePage');
const { PurchasePage } = require('../pages/PurchasePage');
const { ConfirmationPage } = require('../pages/ConfirmationPage');
const dados = require('../data/compra.json');

// DDT: gero um teste para cada item do compra.json
for (const d of dados) {
  test(`Compra de passagem: ${d.cenario}`, async ({ page }) => {
    const home = new HomePage(page);
    const reserve = new ReservePage(page);
    const purchase = new PurchasePage(page);
    const confirmacao = new ConfirmationPage(page);

    await home.abrir();
    await home.buscarVoos(d.origem, d.destino);

    await expect(reserve.titulo).toContainText(`Flights from ${d.origem} to ${d.destino}`);
    await reserve.escolherVoo(d.indiceVoo);

    await expect(purchase.titulo).toContainText('has been reserved');
    await purchase.preencherEComprar(d.comprador);

    await expect(page).toHaveURL(/confirmation/);
    await expect(confirmacao.titulo).toContainText('Thank you for your purchase today!');
  });
}
