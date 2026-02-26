import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

/**
 * Este é o arquivo principal de configuração do Cypress.
 * Aqui definimos o comportamento global do framework e ativamos os plugins.
 */
export default defineConfig({
  // ===== REPORTER (Relatórios) =====
  // Configuramos o 'mochawesome-reporter' para gerar arquivos HTML bonitos com fotos dos erros.
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Relatório de Testes - Cypress BDD",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  // ===== E2E CONFIG (Testes de Ponta a Ponta) =====
  e2e: {
    // URL base do sistema principal. Permite usar cy.visit("/") nos testes.
    baseUrl: "https://the-internet.herokuapp.com",

    // Resolução da tela do navegador na nuvem/CI.
    viewportWidth: 1280,
    viewportHeight: 720,

    // Tempo máximo (em ms) que o Cypress espera um elemento aparecer antes de falhar.
    defaultCommandTimeout: 10000,

    // Tira print automaticamente se um teste falhar.
    screenshotOnRunFailure: true,

    // Desativamos vídeo para economizar memória e tempo no GitHub Actions.
    video: false,

    // Indica ao Cypress para procurar arquivos .feature como se fossem testes.
    specPattern: "cypress/e2e/features/**/*.feature",

    /**
     * Esta função configura os eventos do Node.js necessários para o Cucumber rodar.
     */
    async setupNodeEvents(on, config) {
      // Ativa o plugin do Cucumber para entender arquivos .feature.
      await addCucumberPreprocessorPlugin(on, config);

      // Configura o 'esbuild' para converter TypeScript de forma ultra rápida.
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
