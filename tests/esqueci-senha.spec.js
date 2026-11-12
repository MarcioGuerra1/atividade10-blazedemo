const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ForgotPasswordPage } = require('../pages/ForgotPasswordPage');
const dados = require('../data/esqueci-senha.json');

test('Esqueci a senha: link leva à página de recuperação', async ({ page }) => {
  const login = new LoginPage(page);
  const esqueci = new ForgotPasswordPage(page);

  await login.abrir();
  await login.linkEsqueciSenha.click();

  await expect(page).toHaveURL(/password\/reset/);
  await expect(esqueci.titulo).toBeVisible();
});

for (const d of dados) {
  test(`Esqueci a senha: ${d.cenario}`, async ({ page }) => {
    const esqueci = new ForgotPasswordPage(page);

    await esqueci.abrir();
    await esqueci.solicitarLink(d.email);

    await expect(page.locator('body')).not.toContainText(/419\s+Page Expired/i);
    await expect(esqueci.mensagemRetorno.first()).toBeVisible();
  });
}
