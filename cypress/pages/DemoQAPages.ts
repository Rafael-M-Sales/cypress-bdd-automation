// ============================================================
// Page Object: DemoQAPages
// Projeto: cypress-bdd
// Alvo: https://demoqa.com/text-box
// Esta classe demonstra interações com campos de texto e formulários simples.
// ============================================================

export class DemoQAPages {
    /**
     * Navega para a seção de Text Box do DemoQA.
     */
    visitarTextBox(): void {
        cy.visit("https://demoqa.com/text-box");
    }

    /**
     * Preenche os campos do formulário usando IDs.
     */
    preencherForm(nome: string, email: string, endereco: string): void {
        cy.get("#userName").type(nome);
        cy.get("#userEmail").type(email);
        cy.get("#currentAddress").type(endereco);
    }

    /**
     * Envia o formulário.
     */
    clicarEnviar(): void {
        cy.get("#submit").click();
    }

    /**
     * Valida que o bloco de saída (output) contém os dados digitados.
     */
    verificarConfirmacao(nome: string): void {
        cy.get("#output").should("contain.text", nome);
    }
}
