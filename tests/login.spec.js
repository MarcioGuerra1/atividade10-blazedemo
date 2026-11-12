
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const dados = require('../data/login.json');

for (const d of dados) {
  test(`Login: ${d.cenario}`, async ({ page }) => {
    const email = d.emailEnv ? process.env[d.emailEnv] : d.email;
    const senha = d.senhaEnv ? process.env[d.senhaEnv] : d.senha;
    test.skip(
      d.usarUsuarioCadastrado && (!email || !senha),
      'Configure BLAZEDEMO_EMAIL e BLAZEDEMO_PASSWORD para testar uma conta cadastrada'
    );

    const login = new LoginPage(page);

    await login.abrir();
    await login.fazerLogin(email, senha);
    await expect(page.locator('body')).not.toContainText(/419\s+Page Expired/i);

    if (d.sucesso) {
      await expect(page).not.toHaveURL(/login/);
    } else {
      await expect(page).toHaveURL(/login/);
      await expect(login.mensagemErro.first()).toBeVisible();
    }
  });
}
