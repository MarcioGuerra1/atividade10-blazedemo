const { BasePage } = require('./BasePage');

// Aqui mapeio a página de cadastro de usuário (/register).
class RegisterPage extends BasePage {
  constructor(page) {
    super(page);
    this.inputNome = page.getByLabel('Name', { exact: true });
    this.inputEmpresa = page.getByLabel('Company');
    this.inputEmail = page.getByLabel('E-Mail Address');
    this.inputSenha = page.getByLabel('Password', { exact: true });
    this.inputConfirmarSenha = page.getByLabel('Confirm Password');
    this.botaoRegistrar = page.getByRole('button', { name: 'Register' });
    this.mensagemErro = page.locator('.help-block, .invalid-feedback, .alert-danger');
  }

  async abrir() {
    await super.abrir('/register');
  }

  async cadastrar({ nome, empresa, email, senha, confirmarSenha }) {
    await this.inputNome.fill(nome);
    await this.inputEmpresa.fill(empresa);
    await this.inputEmail.fill(email);
    await this.inputSenha.fill(senha);
    await this.inputConfirmarSenha.fill(confirmarSenha);
    await this.botaoRegistrar.click();
  }
}

module.exports = { RegisterPage };
