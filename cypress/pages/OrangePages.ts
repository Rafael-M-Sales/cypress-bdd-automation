export class OrangePages {
    private readonly baseUrl = "https://opensource-demo.orangehrmlive.com";

    visitar(): void {
        cy.visit(`${this.baseUrl}/web/index.php/auth/login`);
    }

    login(user: string, pass: string): void {
        cy.get('input[name="username"]').type(user);
        cy.get('input[name="password"]').type(pass);
        cy.get('button[type="submit"]').click();
    }

    verificarDashboard(): void {
        cy.url().should("include", "/dashboard/index");
    }

    verificarTituloSecao(titulo: string): void {
        cy.get(".oxd-topbar-header-breadcrumb h6").should("have.text", titulo);
    }

    clicarMenu(nome: string): void {
        cy.get(".oxd-main-menu-item").contains(nome).click();
    }
}
