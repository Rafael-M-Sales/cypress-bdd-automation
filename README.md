# 🌲 cypress-bdd

Projeto de automação de testes com **Cypress 13 + TypeScript + BDD (Cucumber/Gherkin)** e testes unitários com **Jest**.

## 📦 Stack

| Tecnologia | Versão | Função |
|---|---|---|
| Cypress | ^13.x | Framework de testes E2E |
| @badeball/cypress-cucumber-preprocessor | ^21.x | BDD/Gherkin no Cypress |
| TypeScript | ^5.x | Linguagem principal |
| Jest + ts-jest | ^29.x | Testes unitários |

## 📁 Estrutura

```
cypress-bdd/
├── cypress/
│   ├── e2e/
│   │   ├── features/          # Arquivos .feature (Gherkin pt-BR)
│   │   │   ├── login.feature
│   │   │   └── api.feature
│   │   └── step_definitions/  # Step Definitions TypeScript
│   │       ├── login.steps.ts
│   │       └── api.steps.ts
│   ├── pages/                 # Page Objects
│   │   └── LoginPage.ts
│   ├── fixtures/              # Dados de teste (JSON)
│   │   └── usuarios.json
│   └── support/               # Suporte e custom commands
│       ├── commands.ts
│       └── e2e.ts
├── src/
│   └── utils/
│       ├── helpers.ts         # Funções utilitárias puras
│       └── helpers.test.ts    # Testes unitários Jest
├── cypress.config.ts
├── tsconfig.json
├── jest.config.ts
└── package.json
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
npm install
```

### Testes Unitários (Jest)
```bash
npm run test:unit
npm run test:unit:coverage   # com cobertura de código
```

### Testes E2E BDD (Cypress headless)
```bash
npm test
```

### Testes E2E BDD (Cypress com interface)
```bash
npm run test:headed
```

## 🏷️ Tags disponíveis

| Tag | Descrição |
|---|---|
| `@login` | Cenários de login |
| `@api` | Testes de API REST |
| `@happy-path` | Fluxos de sucesso |
| `@sad-path` | Fluxos de erro |
| `@logout` | Cenários de logout |

## 🌐 Alvos dos Testes

- **UI:** [https://the-internet.herokuapp.com](https://the-internet.herokuapp.com)
- **API:** [https://reqres.in](https://reqres.in)
