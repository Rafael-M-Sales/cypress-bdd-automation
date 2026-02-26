// AEPage.ts (Cypress)
export class AEPage {
    visitar(): void {
        cy.visit("https://automationexercise.com");
    }

    clicarLoginMenu(): void {
        cy.contains("Signup / Login").click();
    }

    fazerLogin(email: string, pass: string): void {
        cy.get('input[data-qa="login-email"]').type(email);
        cy.get('input[data-qa="login-password"]').type(pass);
        cy.get('button[data-qa="login-button"]').click();
    }

    verificarLogado(): void {
        cy.contains("Logged in as").should("be.visible");
    }
}
