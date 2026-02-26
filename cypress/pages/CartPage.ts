// ============================================================
// Page Object: CartPage (SauceDemo)
// Projeto: cypress-bdd
// Alvo: https://www.saucedemo.com/cart.html
// Esta classe gerencia o fluxo de checkout e finalização de compra.
// ============================================================

export class CartPage {
    // Seletores do formulário de checkout.
    private readonly checkoutButton = "[data-test='checkout']";
    private readonly cartItems = ".cart_item";
    private readonly firstNameInput = "[data-test='firstName']";
    private readonly lastNameInput = "[data-test='lastName']";
    private readonly postalCodeInput = "[data-test='postalCode']";
    private readonly continueButton = "[data-test='continue']";
    private readonly finishButton = "[data-test='finish']";
    private readonly confirmationMsg = ".complete-header";

    /** 
     * Verifica se um produto específico está na lista do carrinho.
     */
    verificarProdutoNoCarrinho(nomeProduto: string): void {
        cy.get(this.cartItems).should("contain.text", nomeProduto);
    }

    /** 
     * Clica no botão para iniciar o processo de checkout.
     */
    clicarCheckout(): void {
        cy.get(this.checkoutButton).click();
    }

    /** 
     * Preenche as informações de entrega e avança para a próxima etapa.
     */
    preencherDadosEntrega(nome: string, sobrenome: string, cep: string): void {
        cy.get(this.firstNameInput).type(nome);
        cy.get(this.lastNameInput).type(sobrenome);
        cy.get(this.postalCodeInput).type(cep);
        cy.get(this.continueButton).click();
    }

    /** 
     * Finaliza o pedido clicando no botão de confirmação.
     */
    confirmarPedido(): void {
        cy.get(this.finishButton).click();
    }

    /** 
     * Valida a mensagem final de agradecimento/confirmação.
     */
    verificarConfirmacao(mensagem: string): void {
        cy.get(this.confirmationMsg).should("contain.text", mensagem);
    }
}
