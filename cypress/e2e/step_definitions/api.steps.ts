import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// ============================================================
// Step Definitions: API
// Projeto: cypress-bdd
// Este arquivo lida com testes de integração (API) usando cy.request.
// ============================================================

interface DataTable {
    hashes(): Array<Record<string, string>>;
}

// Variáveis para armazenar o estado global durante a execução do cenário.
let baseUrl: string = "";
let response: Cypress.Response<unknown>;

/**
 * Define a URL base para as chamadas de API.
 */
Given("que a API está disponível em {string}", (url: string) => {
    baseUrl = url;
});

/**
 * Realiza uma chamada GET simples.
 */
When("eu faço uma requisição GET em {string}", (endpoint: string) => {
    // cy.request executa a chamada HTTP e o .then() captura a resposta.
    cy.request({ method: "GET", url: `${baseUrl}${endpoint}` }).then((res) => {
        response = res;
    });
});

/**
 * Realiza uma chamada POST enviando dados do Gherkin (DataTable).
 */
When(
    "eu envio uma requisição POST em {string} com os dados:",
    (endpoint: string, dataTable: DataTable) => {
        // .hashes()[0] pega a primeira linha da tabela do Cucumber.
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

/**
 * Realiza uma chamada PUT para atualizar dados.
 */
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

/**
 * Valida o código de status HTTP (ex: 200, 201).
 */
Then("o status da resposta deve ser {int}", (statusCode: number) => {
    expect(response.status).to.equal(statusCode);
});

/**
 * Valida se o corpo da resposta contém uma lista de dados.
 */
Then("a resposta deve conter a lista de usuários", () => {
    const body = response.body as { data: unknown[] };
    expect(body).to.have.property("data");
    expect(body.data).to.be.an("array").and.have.length.greaterThan(0);
});

/**
 * Valida campos específicos dentro do JSON retornado.
 * Suporta busca por pontos (Ex: "data.first_name").
 */
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
