import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AEPage } from "../../pages/AEPage";

const ae = new AEPage();

Given("que estou na página inicial do Automation Exercise \\(Cypress)", () => {
    ae.visitar();
});

When("eu clico em {string}", (item: string) => {
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
    if (botao === "Login") {
        // Já clicado no Step anterior na função fazerLogin
    } else {
        cy.contains(botao).click();
    }
});

Then("devo ver que estou logado", () => {
    ae.verificarLogado();
});
