import type { Config } from "jest";

/**
 * Configuração do JEST (Framework de Testes Unitários).
 * Estes testes não usam Cypress e rodam isoladamente.
 */
const config: Config = {
    // Diz ao Jest para usar o ts-jest para entender TypeScript.
    preset: "ts-jest",

    // Ambiente de execução (Node.js é suficiente para lógica pura).
    testEnvironment: "node",

    // Pastas onde o Jest deve procurar arquivos.
    roots: ["<rootDir>/src"],

    // Padrão de nome de arquivo para o Jest reconhecer como teste unitário.
    testMatch: ["**/*.test.ts"],

    // Extensões de arquivo suportadas.
    moduleFileExtensions: ["ts", "js", "json"],

    // Configurações para medir a cobertura de código (quantas linhas foram testadas).
    collectCoverageFrom: ["src/**/*.ts", "!src/**/*.test.ts"],
    coverageDirectory: "coverage",
    coverageReporters: ["text", "html"],

    // Exibe detalhes de cada teste no terminal.
    verbose: true,
};

export default config;
