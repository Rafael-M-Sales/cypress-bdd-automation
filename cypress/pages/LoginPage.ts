// ============================================================
// Page Object: LoginPage
// Projeto: cypress-bdd
// Padrão: Page Object Model (POM)
// Esta classe encapsula os elementos e ações da página de login.
// Isso ajuda a manter os testes limpos e fáceis de manter.
// ============================================================

export class LoginPage {
    // Definimos os seletores (IDs, classes, etc.) como propriedades privadas.
    // Isso evita repetição (DRY) e facilita a atualização se o site mudar.
    private readonly url = "/login";
    private readonly usernameInput = "#username";
    private readonly passwordInput = "#password";
    private readonly loginButton = 'button[type="submit"]';
    private readonly flashMessage = "#flash";
    private readonly logoutButton = "a.button.secondary";

    /**
     * Navega até a página de login usando a URL base configurada.
     */
    visitar(): void {
        cy.visit(this.url);
    }

    /**
     * Preenche o campo de usuário.
     * .clear() remove qualquer texto existente antes de digitar.
     */
    preencherUsuario(username: string): void {
        cy.get(this.usernameInput).clear().type(username);
    }

    /**
     * Preenche o campo de senha.
     */
    preencherSenha(senha: string): void {
        cy.get(this.passwordInput).clear().type(senha);
    }

    /**
     * Clica no botão de login (submit).
     */
    clicarLogin(): void {
        cy.get(this.loginButton).click();
    }

    /**
     * Clica no botão de logout que aparece após o login.
     */
    clicarLogout(): void {
        cy.get(this.logoutButton).click();
    }

    /**
     * Verifica se a mensagem de alerta (flash) contém o texto esperado.
     * Usamos .should("contain.text", ...) para validar o conteúdo.
     */
    verificarMensagem(texto: string): void {
        cy.get(this.flashMessage).should("contain.text", texto);
    }

    /**
     * Verifica se a URL atual mudou para o caminho esperado.
     */
    verificarUrl(segmento: string): void {
        cy.url().should("include", segmento);
    }

    /**
     * Método auxiliar que agrupa as ações de login em um único comando.
     * Muito útil para simplificar steps no Cucumber.
     */
    realizarLogin(username: string, senha: string): void {
        this.preencherUsuario(username);
        this.preencherSenha(senha);
        this.clicarLogin();
    }
}
