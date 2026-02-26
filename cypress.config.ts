import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  // ===== REPORTER =====
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Relatório de Testes - Cypress BDD",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  // ===== E2E CONFIG =====
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: true,
    video: false,
    specPattern: "cypress/e2e/features/**/*.feature",

    async setupNodeEvents(on, config) {
      // Registra o plugin Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Preprocessa TypeScript com esbuild
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
