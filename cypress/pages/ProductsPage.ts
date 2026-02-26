// ============================================================
// Page Object: ProductsPage (SauceDemo)
// Projeto: cypress-bdd
// Alvo: https://www.saucedemo.com/inventory.html
// ============================================================

export class ProductsPage {
    private readonly productTitle = ".title";
    private readonly productItems = ".inventory_item";
    private readonly sortDropdown = "[data-test='product-sort-container']";
    private readonly cartBadge = ".shopping_cart_badge";
    private readonly cartLink = ".shopping_cart_link";

    /** Verifica título da página de produtos */
    verificarTitulo(titulo: string): void {
        cy.get(this.productTitle).should("contain.text", titulo);
    }

    /** Verifica que há pelo menos N produtos */
    verificarQuantidadeProdutos(minimo: number): void {
        cy.get(this.productItems).should("have.length.gte", minimo);
    }

    /** Ordena produtos pelo valor do dropdown */
    ordenarPor(opcao: string): void {
        cy.get(this.sortDropdown).select(opcao);
    }

    /** Retorna o nome do primeiro produto */
    obterNomePrimeiroProduto(): Cypress.Chainable<string> {
        return cy
            .get(this.productItems)
            .first()
            .find(".inventory_item_name")
            .invoke("text");
    }

    /** Adiciona um produto ao carrinho pelo nome */
    adicionarAoCarrinho(nomeProduto: string): void {
        cy.contains(".inventory_item", nomeProduto)
            .find("button")
            .should("contain.text", "Add to cart")
            .click();
    }

    /** Remove um produto do carrinho pelo nome */
    removerDoCarrinho(nomeProduto: string): void {
        cy.contains(".inventory_item", nomeProduto)
            .find("button")
            .should("contain.text", "Remove")
            .click();
    }

    /** Verifica o número de itens no ícone do carrinho */
    verificarIconeCarrinho(quantidade: string): void {
        cy.get(this.cartBadge).should("have.text", quantidade);
    }

    /** Verifica se o ícone do carrinho está vazio (sem badge) */
    verificarCarrinhoVazio(): void {
        cy.get(this.cartBadge).should("not.exist");
    }

    /** Navega para o carrinho */
    irParaCarrinho(): void {
        cy.get(this.cartLink).click();
    }
}
