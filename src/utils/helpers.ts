/**
 * Funções utilitárias puras para uso geral nos testes
 * Projeto: cypress-bdd / playwright-bdd
 * Testado via Jest em: helpers.test.ts
 */

/**
 * Verifica se uma string é nula, undefined ou vazia
 */
export function isNulaOuVazia(valor: string | null | undefined): boolean {
    return valor === null || valor === undefined || valor.trim() === "";
}

/**
 * Capitaliza a primeira letra de uma string
 */
export function capitalizarPrimeira(valor: string): string {
    if (!valor) return valor;
    return valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase();
}

/**
 * Mascara parcialmente um e-mail para exibição (ex: jo***@gmail.com)
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
 * Remove caracteres não numéricos de uma string
 */
export function apenasNumeros(valor: string): string {
    if (!valor) return "";
    return valor.replace(/[^0-9]/g, "");
}

/**
 * Conta palavras em uma string
 */
export function contarPalavras(texto: string): number {
    if (!texto || texto.trim() === "") return 0;
    return texto.trim().split(/\s+/).length;
}

/**
 * Trunca uma string ao tamanho máximo e adiciona reticências
 */
export function truncar(texto: string, tamanhoMax: number): string {
    if (!texto) return texto;
    if (texto.length <= tamanhoMax) return texto;
    return texto.substring(0, tamanhoMax) + "...";
}
