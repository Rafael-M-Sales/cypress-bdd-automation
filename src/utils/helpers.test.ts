import {
    isNulaOuVazia,
    capitalizarPrimeira,
    mascararEmail,
    apenasNumeros,
    contarPalavras,
    truncar,
} from "../../src/utils/helpers";

/**
 * Este arquivo contém TESTES UNITÁRIOS.
 * Diferente dos testes de UI, estes rodam sem navegador usando o JEST.
 * Servem para garantir que as funções de apoio (helpers) funcionam matematicamente.
 */

describe("isNulaOuVazia", () => {
    it("deve retornar true para string nula", () => {
        expect(isNulaOuVazia(null)).toBe(true);
    });

    it("deve retornar true para string undefined", () => {
        expect(isNulaOuVazia(undefined)).toBe(true);
    });

    it("deve retornar true para string vazia", () => {
        expect(isNulaOuVazia("")).toBe(true);
    });

    it("deve retornar false para string com conteúdo", () => {
        expect(isNulaOuVazia("texto")).toBe(false);
    });
});

describe("capitalizarPrimeira", () => {
    it("deve capitalizar a primeira letra corretamente", () => {
        expect(capitalizarPrimeira("hello")).toBe("Hello");
    });

    it("deve converter o resto das letras para minúscula", () => {
        expect(capitalizarPrimeira("WORLD")).toBe("World");
    });
});

describe("mascararEmail", () => {
    it("deve esconder o meio do e-mail com asteriscos", () => {
        expect(mascararEmail("joao@gmail.com")).toBe("jo***@gmail.com");
    });
});

describe("apenasNumeros", () => {
    it("deve remover parênteses e traços de uma string", () => {
        expect(apenasNumeros("(11) 99999-0000")).toBe("11999990000");
    });
});

describe("contarPalavras", () => {
    it("deve contar o número de palavras ignorando espaços extras", () => {
        expect(contarPalavras("  Cypress é   muito legal  ")).toBe(4);
    });
});

describe("truncar", () => {
    it("deve cortar a string e adicionar reticências", () => {
        expect(truncar("Este é um texto bem longo", 10)).toBe("Este é um ...");
    });
});
