# BlazeDemo – Automação com Playwright

Projeto de automação de testes para o site https://www.blazedemo.com usando **Playwright (JavaScript)**, **Page Objects** e **DDT** (Data-Driven Testing).

## Fluxos cobertos

| Fluxo | Teste | Dados (DDT) |
|---|---|---|
| Compra de passagem (busca, reserva, compra e confirmação) | `tests/compra.spec.js` | `data/compra.json` |
| Login | `tests/login.spec.js` | `data/login.json` |
| Cadastro de usuário | `tests/cadastro.spec.js` | `data/cadastro.json` |
| Esqueci a senha | `tests/esqueci-senha.spec.js` | `data/esqueci-senha.json` |
| Destino da semana | `tests/destino-semana.spec.js` | `data/destino-semana.json` |

## Estrutura

```
pages/   -> Page Objects (um por página do site)
data/    -> massas de dados em JSON (DDT)
tests/   -> specs do Playwright
```

## Como rodar

```bash
npm install
npx playwright install chromium
npm test              # roda tudo (headless)
npm run test:headed   # abre o navegador
npm run report        # abre o relatório HTML
```

Os testes de login com conta existente e senha incorreta usam uma conta de teste
fornecida pelo ambiente, sem armazenar credenciais nos arquivos do projeto:

```powershell
$env:BLAZEDEMO_EMAIL = "seu-email-de-teste"
$env:BLAZEDEMO_PASSWORD = "sua-senha-de-teste"
npm test
```

## Limitações observadas no site

Os formulários de cadastro, login e recuperação de senha podem responder com
`419 Page Expired` ao serem enviados. Esse erro vem do servidor do BlazeDemo e
é reportado pelos testes, em vez de ser confundido com uma validação bem-sucedida.
O site também pode retornar `Rate exceeded`; os testes rodam em um único worker
para reduzir requisições simultâneas.
