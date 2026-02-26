// ============================================================
// Page Object: CartPage (SauceDemo)
// Projeto: cypress-bdd
// Alvo: https://www.saucedemo.com/cart.html
// ============================================================

export class CartPage {
    private readonly checkoutButton = "[data-test='checkout']";
    private readonly cartItems = ".cart_item";
    private readonly firstNameInput = "[data-test='firstName']";
    private readonly lastNameInput = "[data-test='lastName']";
    private readonly postalCodeInput = "[data-test='postalCode']";
    private readonly continueButton = "[data-test='continue']";
    private readonly finishButton = "[data-test='finish']";
    private readonly confirmationMsg = ".complete-header";

    verificarProdutoNoCarrinho(nomeProduto: string): void {
        cy.get(this.cartItems).should("contain.text", nomeProduto);
    }

    clicarCheckout(): void {
        cy.get(this.checkoutButton).click();
    }

    preencherDadosEntrega(nome: string, sobrenome: string, cep: string): void {
        cy.get(this.firstNameInput).type(nome);
        cy.get(this.lastNameInput).type(sobrenome);
        cy.get(this.postalCodeInput).type(cep);
        cy.get(this.continueButton).click();
    }

    confirmarPedido(): void {
        cy.get(this.finishButton).click();
    }

    verificarConfirmacao(mensagem: string): void {
        cy.get(this.confirmationMsg).should("contain.text", mensagem);
    }
}
