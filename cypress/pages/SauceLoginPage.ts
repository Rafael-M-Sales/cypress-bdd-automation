// ============================================================
// Page Object: SauceLoginPage
// Projeto: cypress-bdd
// Alvo: https://www.saucedemo.com
// ============================================================

export class SauceLoginPage {
    private readonly url = "https://www.saucedemo.com";
    private readonly usernameInput = "#user-name";
    private readonly passwordInput = "#password";
    private readonly loginButton = "#login-button";
    private readonly errorMessage = "[data-test='error']";

    visitar(): void {
        cy.visit(this.url);
    }

    preencherUsuario(usuario: string): void {
        cy.get(this.usernameInput).clear().type(usuario);
    }

    preencherSenha(senha: string): void {
        cy.get(this.passwordInput).clear().type(senha);
    }

    clicarEntrar(): void {
        cy.get(this.loginButton).click();
    }

    fazerLogin(usuario: string, senha: string): void {
        this.preencherUsuario(usuario);
        this.preencherSenha(senha);
        this.clicarEntrar();
    }

    verificarMensagemErro(mensagem: string): void {
        cy.get(this.errorMessage).should("contain.text", mensagem);
    }

    verificarUrlProdutos(): void {
        cy.url().should("include", "/inventory.html");
    }
}
