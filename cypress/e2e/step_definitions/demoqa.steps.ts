import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { DemoQAPages } from "../../pages/DemoQAPages";

const demoqa = new DemoQAPages();

Given("que estou na página Text Box do DemoQA", () => {
    demoqa.visitarTextBox();
});

When("eu preencho o nome {string}, email {string} e endereço {string}", (n, e, d) => {
    demoqa.preencherForm(n, e, d);
});

When("clico em enviar", () => {
    demoqa.clicarEnviar();
});

Then("devo ver os dados confirmados abaixo do formulário", () => {
    demoqa.verificarConfirmacao("João Silva");
});
