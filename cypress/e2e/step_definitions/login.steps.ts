import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../pages/LoginPage";

// ============================================================
// Step Definitions: Login
// Projeto: cypress-bdd
// Este arquivo traduz os passos do Gherkin (Dado, Quando, Então)
// em ações reais usando o Page Object.
// ============================================================

// Instanciamos a página para usar seus métodos.
const loginPage = new LoginPage();

// O "Given" (Dado) define o estado inicial do teste.
Given("que estou na página de login", () => {
    loginPage.visitar();
});

// O "When" (Quando) define uma ação do usuário.
When("eu preencho o campo de usuário com {string}", (username: string) => {
    loginPage.preencherUsuario(username);
});

When("eu preencho o campo de senha com {string}", (senha: string) => {
    loginPage.preencherSenha(senha);
});

When("eu clico no botão de login", () => {
    loginPage.clicarLogin();
});

When("eu clico no botão de logout", () => {
    loginPage.clicarLogout();
});

// O "Then" (Então) define o resultado esperado (validação/asserção).
Then("eu devo ser redirecionado para a área segura", () => {
    loginPage.verificarUrl("/secure");
});

Then("devo ver a mensagem {string}", (mensagem: string) => {
    loginPage.verificarMensagem(mensagem);
});

Then("devo ver a mensagem de erro {string}", (mensagem: string) => {
    loginPage.verificarMensagem(mensagem);
});

Then("eu devo ver a mensagem de logout {string}", (mensagem: string) => {
    loginPage.verificarMensagem(mensagem);
});
