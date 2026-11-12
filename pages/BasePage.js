// Minha classe base: deixo aqui tudo que é comum às páginas.
class BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
  }

  async abrir(caminho = '/') {
    await this.page.goto(caminho);
  }
}

module.exports = { BasePage };
