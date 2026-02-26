// ============================================================
// Support: e2e.ts
// Projeto: cypress-bdd
// Arquivo carregado antes de cada spec de E2E
// ============================================================

import "./commands";

// Prevent Cypress from failing on uncaught exceptions from the app
Cypress.on("uncaught:exception", (err) => {
    console.warn("Exceção não tratada capturada:", err.message);
    // Retornar false impede que o Cypress falhe o teste
    return false;
});

// Log de início e fim de cada cenário
beforeEach(() => {
    cy.log("🚀 Iniciando cenário...");
});

afterEach(function () {
    if (this.currentTest?.state === "failed") {
        cy.log("❌ Cenário falhou: " + this.currentTest?.title);
    } else {
        cy.log("✅ Cenário passou!");
    }
});
