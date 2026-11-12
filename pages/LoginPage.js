const { BasePage } = require('./BasePage');

// Aqui mapeio a página de login (/login).
class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.inputEmail = page.getByLabel('E-Mail Address');
    this.inputSenha = page.getByLabel('Password', { exact: true });
    this.botaoLogin = page.getByRole('button', { name: 'Login' });
    this.linkEsqueciSenha = page.getByRole('link', { name: 'Forgot Your Password?' });
    this.mensagemErro = page.locator('.help-block, .invalid-feedback, .alert-danger');
  }

  async abrir() {
    await super.abrir('/login');
  }

  async fazerLogin(email, senha) {
    await this.inputEmail.fill(email);
    await this.inputSenha.fill(senha);
    await this.botaoLogin.click();
  }
}

module.exports = { LoginPage };
