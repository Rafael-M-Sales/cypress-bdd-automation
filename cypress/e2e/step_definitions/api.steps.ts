import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// ============================================================
// Step Definitions: API
// Projeto: cypress-bdd
// ============================================================

interface DataTable {
    hashes(): Array<Record<string, string>>;
}

let baseUrl: string = "";
let response: Cypress.Response<unknown>;

Given("que a API está disponível em {string}", (url: string) => {
    baseUrl = url;
});

When("eu faço uma requisição GET em {string}", (endpoint: string) => {
    cy.request({ method: "GET", url: `${baseUrl}${endpoint}` }).then((res) => {
        response = res;
    });
});

When(
    "eu envio uma requisição POST em {string} com os dados:",
    (endpoint: string, dataTable: DataTable) => {
        const dados = dataTable.hashes()[0];
        cy.request({
            method: "POST",
            url: `${baseUrl}${endpoint}`,
            body: { name: dados["nome"], job: dados["cargo"] },
        }).then((res) => {
            response = res;
        });
    }
);

When(
    "eu envio uma requisição PUT em {string} com os dados:",
    (endpoint: string, dataTable: DataTable) => {
        const dados = dataTable.hashes()[0];
        cy.request({
            method: "PUT",
            url: `${baseUrl}${endpoint}`,
            body: { name: dados["nome"], job: dados["cargo"] },
        }).then((res) => {
            response = res;
        });
    }
);

Then("o status da resposta deve ser {int}", (statusCode: number) => {
    expect(response.status).to.equal(statusCode);
});

Then("a resposta deve conter a lista de usuários", () => {
    const body = response.body as { data: unknown[] };
    expect(body).to.have.property("data");
    expect(body.data).to.be.an("array").and.have.length.greaterThan(0);
});

Then(
    "a resposta deve conter o campo {string} com valor {string}",
    (campo: string, valor: string) => {
        const body = response.body as Record<string, unknown>;
        const partes = campo.split(".");
        let atual: unknown = body;
        for (const parte of partes) {
            atual = (atual as Record<string, unknown>)[parte];
        }
        expect(String(atual)).to.equal(valor);
    }
);
