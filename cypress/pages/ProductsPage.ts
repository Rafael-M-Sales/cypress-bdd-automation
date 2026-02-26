// ============================================================
// Page Object: ProductsPage (SauceDemo)
// Projeto: cypress-bdd
// Alvo: https://www.saucedemo.com/inventory.html
// Esta classe gerencia a lista de produtos e o carrinho.
// ============================================================

export class ProductsPage {
    // Seletores para elementos da página de inventário.
    private readonly productTitle = ".title";
    private readonly productItems = ".inventory_item";
    private readonly sortDropdown = "[data-test='product-sort-container']";
    private readonly cartBadge = ".shopping_cart_badge";
    private readonly cartLink = ".shopping_cart_link";

    /** 
     * Valida que o título da página é o esperado (ex: "Products").
     */
    verificarTitulo(titulo: string): void {
        cy.get(this.productTitle).should("contain.text", titulo);
    }

    /** 
     * Valida o número de produtos exibidos em tela.
     * .should("have.length.gte", ...) garante que existem "pelo menos" X itens.
     */
    verificarQuantidadeProdutos(minimo: number): void {
        cy.get(this.productItems).should("have.length.gte", minimo);
    }

    /** 
     * Muda a ordenação dos produtos usando o elemento <select>.
     */
    ordenarPor(opcao: string): void {
        cy.get(this.sortDropdown).select(opcao);
    }

    /** 
     * Captura o texto do nome do primeiro produto da lista.
     * Retorna um Chainable para permitir asserções no teste.
     */
    obterNomePrimeiroProduto(): Cypress.Chainable<string> {
        return cy
            .get(this.productItems)
            .first()
            .find(".inventory_item_name")
            .invoke("text");
    }

    /** 
     * Localiza um produto específico pelo nome e clica no botão "Add to cart".
     */
    adicionarAoCarrinho(nomeProduto: string): void {
        cy.contains(".inventory_item", nomeProduto)
            .find("button")
            .should("contain.text", "Add to cart")
            .click();
    }

    /** 
     * Localiza um produto específico e clica no botão "Remove".
     */
    removerDoCarrinho(nomeProduto: string): void {
        cy.contains(".inventory_item", nomeProduto)
            .find("button")
            .should("contain.text", "Remove")
            .click();
    }

    /** 
     * Valida o número exibido no ícone do carrinho (o badge vermelho).
     */
    verificarIconeCarrinho(quantidade: string): void {
        cy.get(this.cartBadge).should("have.text", quantidade);
    }

    /** 
     * Garante que o badge do carrinho não existe (totalmente vazio).
     */
    verificarCarrinhoVazio(): void {
        cy.get(this.cartBadge).should("not.exist");
    }

    /** 
     * Clica no link do carrinho para visualizar os itens selecionados.
     */
    irParaCarrinho(): void {
        cy.get(this.cartLink).click();
    }
}
