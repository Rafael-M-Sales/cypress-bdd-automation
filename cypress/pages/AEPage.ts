// ============================================================
// Page Object: AEPage
// Projeto: cypress-bdd
// Alvo: https://automationexercise.com
// Esta classe gerencia as interações básicas no site Automation Exercise.
// ============================================================

export class AEPage {
    /**
     * Abre a página inicial do Automation Exercise.
     */
    visitar(): void {
        cy.visit("https://automationexercise.com");
    }

    /**
     * Navega para a tela de login clicando no menu superior.
     */
    clicarLoginMenu(): void {
        cy.contains("Signup / Login").click();
    }

    /**
     * Preenche os campos de e-mail e senha e submete o formulário.
     * Usamos seletores de atributo [data-qa] que são mais estáveis.
     */
    fazerLogin(email: string, pass: string): void {
        cy.get('input[data-qa="login-email"]').type(email);
        cy.get('input[data-qa="login-password"]').type(pass);
        cy.get('button[data-qa="login-button"]').click();
    }

    /**
     * Valida que o usuário está logado verificando o texto do menu.
     */
    verificarLogado(): void {
        cy.contains("Logged in as").should("be.visible");
    }
}
