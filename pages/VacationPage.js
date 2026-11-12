const { BasePage } = require('./BasePage');

// Aqui mapeio a página do destino da semana (/vacation.html).
class VacationPage extends BasePage {
  constructor(page) {
    super(page);
    this.titulo = page.locator('.container').filter({ hasText: /Destination of the week:/i });
    this.imagem = page.locator('img[src*="vacation.jpg"]');
  }
}

module.exports = { VacationPage };
