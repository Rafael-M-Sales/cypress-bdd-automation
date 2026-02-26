/**
 * Funções utilitárias puras para uso geral nos testes.
 * Estas funções não dependem do Cypress nem do navegador, sendo puramente lógica.
 * Projeto: cypress-bdd / playwright-bdd
 * Testado via Jest em: helpers.test.ts
 */

/**
 * Verifica se uma string é nula, indefinida ou contém apenas espaços.
 * Útil para validar retornos de campos obrigatórios.
 */
export function isNulaOuVazia(valor: string | null | undefined): boolean {
    return valor === null || valor === undefined || valor.trim() === "";
}

/**
 * Transforma a primeira letra em maiúscula e o resto em minúscula.
 * Ex: "HELLO" -> "Hello"
 */
export function capitalizarPrimeira(valor: string): string {
    if (!valor) return valor;
    return valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase();
}

/**
 * Mascara um e-mail para privacidade.
 * Ex: "joao_silva@gmail.com" -> "jo***@gmail.com"
 */
export function mascararEmail(email: string): string {
    if (!email) return email;
    const arroba = email.indexOf("@");
    if (arroba <= 0) return email;
    const local = email.substring(0, arroba);
    const dominio = email.substring(arroba);
    if (local.length <= 2) return local + "***" + dominio;
    return local.substring(0, 2) + "***" + dominio;
}

/**
 * Extrai apenas os números de uma string (remove parênteses, traços, etc).
 * Muito comum para limpar campos de Telefone ou CPF.
 */
export function apenasNumeros(valor: string): string {
    if (!valor) return "";
    return valor.replace(/[^0-9]/g, "");
}

/**
 * Conta quantas palavras existem em uma frase.
 */
export function contarPalavras(texto: string): number {
    if (!texto || texto.trim() === "") return 0;
    return texto.trim().split(/\s+/).length;
}

/**
 * Corta uma string se ela for maior que o limite e adiciona "...".
 */
export function truncar(texto: string, tamanhoMax: number): string {
    if (!texto) return texto;
    if (texto.length <= tamanhoMax) return texto;
    return texto.substring(0, tamanhoMax) + "...";
}
