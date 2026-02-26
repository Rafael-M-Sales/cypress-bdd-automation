import {
    isNulaOuVazia,
    capitalizarPrimeira,
    mascararEmail,
    apenasNumeros,
    contarPalavras,
    truncar,
} from "../../src/utils/helpers";

// ============================================================
// Testes Unitários - Helpers
// Projeto: cypress-bdd
// Framework: Jest + ts-jest
// ============================================================

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

    it("deve retornar true para string com apenas espaços", () => {
        expect(isNulaOuVazia("   ")).toBe(true);
    });

    it("deve retornar false para string com conteúdo", () => {
        expect(isNulaOuVazia("texto")).toBe(false);
    });
});

describe("capitalizarPrimeira", () => {
    it("deve capitalizar a primeira letra", () => {
        expect(capitalizarPrimeira("hello")).toBe("Hello");
    });

    it("deve converter o resto para minúscula", () => {
        expect(capitalizarPrimeira("WORLD")).toBe("World");
    });

    it("deve retornar vazio para string vazia", () => {
        expect(capitalizarPrimeira("")).toBe("");
    });
});

describe("mascararEmail", () => {
    it("deve mascarar e-mail corretamente", () => {
        expect(mascararEmail("joao@gmail.com")).toBe("jo***@gmail.com");
    });

    it("deve mascarar e-mail com local curto", () => {
        expect(mascararEmail("ab@gmail.com")).toBe("ab***@gmail.com");
    });

    it("deve retornar vazio para string vazia", () => {
        expect(mascararEmail("")).toBe("");
    });
});

describe("apenasNumeros", () => {
    it("deve remover caracteres não numéricos", () => {
        expect(apenasNumeros("(11) 99999-0000")).toBe("11999990000");
    });

    it("deve retornar string vazia para valores sem números", () => {
        expect(apenasNumeros("abc")).toBe("");
    });

    it("deve retornar string vazia para string vazia", () => {
        expect(apenasNumeros("")).toBe("");
    });
});

describe("contarPalavras", () => {
    it("deve contar palavras corretamente", () => {
        expect(contarPalavras("olá mundo")).toBe(2);
    });

    it("deve retornar 0 para string vazia", () => {
        expect(contarPalavras("")).toBe(0);
    });

    it("deve ignorar espaços extras", () => {
        expect(contarPalavras("  uma  palavra  ")).toBe(2);
    });
});

describe("truncar", () => {
    it("deve truncar string maior que o limite", () => {
        expect(truncar("abcdefgh", 5)).toBe("abcde...");
    });

    it("não deve truncar string dentro do limite", () => {
        expect(truncar("abc", 5)).toBe("abc");
    });

    it("deve lidar com string vazia", () => {
        expect(truncar("", 5)).toBe("");
    });
});
