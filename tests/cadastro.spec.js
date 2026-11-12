const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/RegisterPage');
const dados = require('../data/cadastro.json');

for (const d of dados) {
  test(`Cadastro de usuário: ${d.cenario}`, async ({ page }) => {
    const registro = new RegisterPage(page);
    // troco {timestamp} por um número único, assim o e-mail nunca se repete
    const email = d.email.replace('{timestamp}', Date.now().toString());

    await registro.abrir();
    await registro.cadastrar({
      nome: d.nome,
      empresa: d.empresa,
      email,
      senha: d.senha,
      confirmarSenha: d.confirmarSenha,
    });

    await expect(page.locator('body')).not.toContainText(/419\s+Page Expired/i);

    if (d.sucesso) {
      await expect(page).toHaveURL(/home/);
    } else {
      await expect(page).toHaveURL(/register/);
      await expect(registro.mensagemErro.first()).toBeVisible();
    }
  });
}
