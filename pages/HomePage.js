const { BasePage } = require('./BasePage');

// Aqui mapeio a página inicial: escolha de origem/destino e o link do destino da semana.
class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.selectOrigem = page.locator('select[name="fromPort"]');
    this.selectDestino = page.locator('select[name="toPort"]');
    this.botaoBuscarVoos = page.getByRole('button', { name: 'Find Flights' });
    this.linkDestinoDaSemana = page.getByRole('link', { name: /destination of the week/i });
    this.linkLogin = page.getByRole('link', { name: 'Login' });
    this.linkRegister = page.getByRole('link', { name: 'Register' });
  }

  async abrir() {
    await super.abrir('/');
  }

  async buscarVoos(origem, destino) {
    await this.selectOrigem.selectOption(origem);
    await this.selectDestino.selectOption(destino);
    await this.botaoBuscarVoos.click();
  }

  async clicarDestinoDaSemana() {
    await this.linkDestinoDaSemana.click();
  }
}

module.exports = { HomePage };
