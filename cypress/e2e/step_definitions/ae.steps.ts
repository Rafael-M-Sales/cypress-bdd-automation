import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AEPage } from "../../pages/AEPage";

// ============================================================
// Step Definitions: Automation Exercise
// Projeto: cypress-bdd
// ============================================================

const ae = new AEPage();

Given("que estou na página inicial do Automation Exercise \\(Cypress)", () => {
    ae.visitar();
});

When("eu clico em {string}", (item: string) => {
    // Lógica condicional: se for o link de login, usa o Page Object, senão busca pelo texto.
    if (item === "Signup / Login") {
        ae.clicarLoginMenu();
    } else {
        cy.contains(item).click();
    }
});

When("eu preencho e-mail {string} e senha {string}", (email, pass) => {
    ae.fazerLogin(email, pass);
});

When("clico em {string}", (botao) => {
    // Se o botão for "Login", a ação já foi feita no step anterior (submissão do form).
    if (botao === "Login") {
        // Nada a fazer aqui, já clicado no Step anterior na função fazerLogin
    } else {
        cy.contains(botao).click();
    }
});

Then("devo ver que estou logado", () => {
    ae.verificarLogado();
});
