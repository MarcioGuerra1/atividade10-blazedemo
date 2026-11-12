const { BasePage } = require('./BasePage');

// Aqui mapeio a confirmação da compra (confirmation.php).
class ConfirmationPage extends BasePage {
  constructor(page) {
    super(page);
    this.titulo = page.getByRole('heading', { level: 1 });
    this.tabelaDetalhes = page.locator('table');
  }
}

module.exports = { ConfirmationPage };
