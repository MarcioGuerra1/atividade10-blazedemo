const { BasePage } = require('./BasePage');

// Aqui mapeio a página "Esqueci a senha" (/password/reset).
class ForgotPasswordPage extends BasePage {
  constructor(page) {
    super(page);
    this.titulo = page.getByText('Reset Password', { exact: true }).first();
    this.inputEmail = page.getByLabel('E-Mail Address');
    this.botaoEnviarLink = page.getByRole('button', { name: 'Send Password Reset Link' });
    this.mensagemRetorno = page.locator('.alert, .help-block, .invalid-feedback');
  }

  async abrir() {
    await super.abrir('/password/reset');
  }

  async solicitarLink(email) {
    await this.inputEmail.fill(email);
    await this.botaoEnviarLink.click();
  }
}

module.exports = { ForgotPasswordPage };
