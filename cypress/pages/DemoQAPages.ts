// DemoQAPages.ts (Cypress)
export class DemoQAPages {
    visitarTextBox(): void {
        cy.visit("https://demoqa.com/text-box");
    }

    preencherForm(nome: string, email: string, endereco: string): void {
        cy.get("#userName").type(nome);
        cy.get("#userEmail").type(email);
        cy.get("#currentAddress").type(endereco);
    }

    clicarEnviar(): void {
        cy.get("#submit").click();
    }

    verificarConfirmacao(nome: string): void {
        cy.get("#output").should("contain.text", nome);
    }
}
