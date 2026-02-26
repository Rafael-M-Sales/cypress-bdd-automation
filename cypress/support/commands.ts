// ============================================================
// Support: commands.ts
// Projeto: cypress-bdd
// Aqui ficam os custom commands do Cypress
// ============================================================

// --- Exemplo de Custom Command ---
// Uso: cy.login("usuario", "senha")
Cypress.Commands.add("login", (username: string, senha: string) => {
    cy.visit("/login");
    cy.get("#username").clear().type(username);
    cy.get("#password").clear().type(senha);
    cy.get('button[type="submit"]').click();
});

// --- Declaração de tipos para o TypeScript ---
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command para login na aplicação
             * @example cy.login("tomsmith", "SuperSecretPassword!")
             */
            login(username: string, senha: string): Chainable<void>;
        }
    }
}
