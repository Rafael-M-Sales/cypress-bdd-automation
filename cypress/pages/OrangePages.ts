// ============================================================
// Page Object: OrangePages
// Projeto: cypress-bdd
// Alvo: https://opensource-demo.orangehrmlive.com
// Esta classe gerencia o sistema corporativo OrangeHRM.
// ============================================================

export class OrangePages {
    private readonly baseUrl = "https://opensource-demo.orangehrmlive.com";

    /**
     * Navega diretamente para a URL de login.
     */
    visitar(): void {
        cy.visit(`${this.baseUrl}/web/index.php/auth/login`);
    }

    /**
     * Realiza o login. Note que o OrangeHRM usa nomes de campos amigáveis (name="username").
     */
    login(user: string, pass: string): void {
        cy.get('input[name="username"]').type(user);
        cy.get('input[name="password"]').type(pass);
        cy.get('button[type="submit"]').click();
    }

    /**
     * Valida que o redirecionamento para o dashboard ocorreu com sucesso.
     */
    verificarDashboard(): void {
        cy.url().should("include", "/dashboard/index");
    }

    /**
     * Verifica o título da seção atual no breadcrumb (topo da página).
     */
    verificarTituloSecao(titulo: string): void {
        cy.get(".oxd-topbar-header-breadcrumb h6").should("have.text", titulo);
    }

    /**
     * Navega pelos itens do menu lateral usando o texto visível.
     */
    clicarMenu(nome: string): void {
        cy.get(".oxd-main-menu-item").contains(nome).click();
    }
}
