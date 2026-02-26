// ============================================================
// Page Object: SauceLoginPage
// Projeto: cypress-bdd
// Alvo: https://www.saucedemo.com
// Esta classe gerencia a página de login do site de treinamento SauceDemo.
// ============================================================

export class SauceLoginPage {
    // URL completa do site externo.
    private readonly url = "https://www.saucedemo.com";

    // Seletores específicos do SauceDemo (IDs clássicos).
    private readonly usernameInput = "#user-name";
    private readonly passwordInput = "#password";
    private readonly loginButton = "#login-button";
    private readonly errorMessage = "[data-test='error']";

    /**
     * Abre o navegador na URL do SauceDemo.
     */
    visitar(): void {
        cy.visit(this.url);
    }

    /**
     * Digita o nome do usuário.
     */
    preencherUsuario(usuario: string): void {
        cy.get(this.usernameInput).clear().type(usuario);
    }

    /**
     * Digita a senha do usuário.
     */
    preencherSenha(senha: string): void {
        cy.get(this.passwordInput).clear().type(senha);
    }

    /**
     * Clica no botão de login.
     */
    clicarEntrar(): void {
        cy.get(this.loginButton).click();
    }

    /**
     * Método de conveniência para realizar o login completo.
     */
    fazerLogin(usuario: string, senha: string): void {
        this.preencherUsuario(usuario);
        this.preencherSenha(senha);
        this.clicarEntrar();
    }

    /**
     * Valida mensagens de erro (ex: usuário bloqueado ou senha errada).
     */
    verificarMensagemErro(mensagem: string): void {
        cy.get(this.errorMessage).should("contain.text", mensagem);
    }

    /**
     * Verifica se fomos redirecionados para o inventário após o login.
     */
    verificarUrlProdutos(): void {
        cy.url().should("include", "/inventory.html");
    }
}
