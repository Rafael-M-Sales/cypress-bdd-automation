// ============================================================
// Page Object: LoginPage
// Projeto: cypress-bdd
// Padrão: Page Object Model (POM)
// ============================================================

export class LoginPage {
    private readonly url = "/login";
    private readonly usernameInput = "#username";
    private readonly passwordInput = "#password";
    private readonly loginButton = 'button[type="submit"]';
    private readonly flashMessage = "#flash";
    private readonly logoutButton = "a.button.secondary";

    /**
     * Navega até a página de login
     */
    visitar(): void {
        cy.visit(this.url);
    }

    /**
     * Preenche o campo de usuário
     */
    preencherUsuario(username: string): void {
        cy.get(this.usernameInput).clear().type(username);
    }

    /**
     * Preenche o campo de senha
     */
    preencherSenha(senha: string): void {
        cy.get(this.passwordInput).clear().type(senha);
    }

    /**
     * Clica no botão de login
     */
    clicarLogin(): void {
        cy.get(this.loginButton).click();
    }

    /**
     * Clica no botão de logout
     */
    clicarLogout(): void {
        cy.get(this.logoutButton).click();
    }

    /**
     * Verifica se a mensagem de flash (sucesso ou erro) contém o texto esperado
     */
    verificarMensagem(texto: string): void {
        cy.get(this.flashMessage).should("contain.text", texto);
    }

    /**
     * Verifica se a URL atual contém o segmento esperado
     */
    verificarUrl(segmento: string): void {
        cy.url().should("include", segmento);
    }

    /**
     * Realiza o login completo (usuário + senha + botão)
     */
    realizarLogin(username: string, senha: string): void {
        this.preencherUsuario(username);
        this.preencherSenha(senha);
        this.clicarLogin();
    }
}
