import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { OrangePages } from "../../pages/OrangePages";

const orange = new OrangePages();

Given("que estou na página de login do OrangeHRM", () => {
    orange.visitar();
});

When("eu entro com usuário {string} e senha {string}", (u: string, s: string) => {
    orange.login(u, s);
});

Then("sou redirecionado para o dashboard", () => {
    orange.verificarDashboard();
});

Then("devo ver o título da seção como {string}", (t: string) => {
    orange.verificarTituloSecao(t);
});

Given("que estou logado no OrangeHRM como admin", () => {
    orange.visitar();
    orange.login("Admin", "admin123");
});

When("eu clico no menu lateral {string}", (m: string) => {
    orange.clicarMenu(m);
});

Then("o título da seção deve mudar para {string}", (t: string) => {
    orange.verificarTituloSecao(t);
});
