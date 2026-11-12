const { BasePage } = require('./BasePage');

// Aqui mapeio o formulário de compra (purchase.php).
class PurchasePage extends BasePage {
  constructor(page) {
    super(page);
    this.titulo = page.getByRole('heading', { level: 2 });
    this.inputNome = page.locator('#inputName');
    this.inputEndereco = page.locator('#address');
    this.inputCidade = page.locator('#city');
    this.inputEstado = page.locator('#state');
    this.inputCep = page.locator('#zipCode');
    this.selectTipoCartao = page.locator('#cardType');
    this.inputNumeroCartao = page.locator('#creditCardNumber');
    this.inputMes = page.locator('#creditCardMonth');
    this.inputAno = page.locator('#creditCardYear');
    this.inputNomeNoCartao = page.locator('#nameOnCard');
    this.checkLembrar = page.locator('#rememberMe');
    this.botaoComprar = page.getByRole('button', { name: 'Purchase Flight' });
  }

  async preencherEComprar(dados) {
    await this.inputNome.fill(dados.nome);
    await this.inputEndereco.fill(dados.endereco);
    await this.inputCidade.fill(dados.cidade);
    await this.inputEstado.fill(dados.estado);
    await this.inputCep.fill(dados.cep);
    await this.selectTipoCartao.selectOption({ label: dados.tipoCartao });
    await this.inputNumeroCartao.fill(dados.numeroCartao);
    await this.inputMes.fill(dados.mes);
    await this.inputAno.fill(dados.ano);
    await this.inputNomeNoCartao.fill(dados.nomeNoCartao);
    await this.botaoComprar.click();
  }
}

module.exports = { PurchasePage };
