const { BasePage } = require('./BasePage');

// Aqui mapeio a lista de voos (reserve.php).
class ReservePage extends BasePage {
  constructor(page) {
    super(page);
    this.titulo = page.getByRole('heading', { level: 3 });
    this.botoesEscolherVoo = page.getByRole('button', { name: 'Choose This Flight' });
  }

  async escolherVoo(indice = 0) {
    await this.botoesEscolherVoo.nth(indice).click();
  }
}

module.exports = { ReservePage };
