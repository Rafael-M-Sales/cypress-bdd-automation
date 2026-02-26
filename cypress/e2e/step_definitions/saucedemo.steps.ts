import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SauceLoginPage } from "../../pages/SauceLoginPage";
import { ProductsPage } from "../../pages/ProductsPage";
import { CartPage } from "../../pages/CartPage";

// ============================================================
// Step Definitions: SauceDemo (Login + Produtos + Carrinho)
// Projeto: cypress-bdd
// ============================================================

const sauceLoginPage = new SauceLoginPage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();

// ===== LOGIN =====

Given("que estou na página de login do SauceDemo", () => {
    sauceLoginPage.visitar();
});

Given("que estou logado no SauceDemo como {string}", (usuario: string) => {
    sauceLoginPage.visitar();
    sauceLoginPage.fazerLogin(usuario, "secret_sauce");
    productsPage.verificarTitulo("Products");
});

When(
    "eu faço login com credenciais {string} e {string}",
    (usuario: string, senha: string) => {
        sauceLoginPage.fazerLogin(usuario, senha);
    }
);

When(
    "eu clico no botão de entrar sem preencher os campos",
    () => {
        sauceLoginPage.clicarEntrar();
    }
);

When(
    "eu preencho apenas o usuário {string} e clico em entrar",
    (usuario: string) => {
        sauceLoginPage.preencherUsuario(usuario);
        sauceLoginPage.clicarEntrar();
    }
);

Then("devo ser redirecionado para a página de produtos", () => {
    sauceLoginPage.verificarUrlProdutos();
});

Then("devo ver o título {string}", (titulo: string) => {
    productsPage.verificarTitulo(titulo);
});

Then("devo ver a mensagem de erro {string}", (mensagem: string) => {
    sauceLoginPage.verificarMensagemErro(mensagem);
});

// ===== PRODUTOS =====

Then("devo ver a lista de produtos disponíveis", () => {
    productsPage.verificarQuantidadeProdutos(1);
});

Then("a lista deve conter ao menos {int} produto", (minimo: number) => {
    productsPage.verificarQuantidadeProdutos(minimo);
});

When("eu ordeno os produtos por {string}", (opcao: string) => {
    productsPage.ordenarPor(opcao);
});

Then("o primeiro produto deve ser {string}", (nomeProduto: string) => {
    productsPage.obterNomePrimeiroProduto().should("eq", nomeProduto);
});

Then("o primeiro produto deve ser o mais barato", () => {
    // Verifica que a ordenação por preço está aplicada comparando os dois primeiros
    cy.get(".inventory_item_price").then(($prices) => {
        const preco1 = parseFloat($prices.eq(0).text().replace("$", ""));
        const preco2 = parseFloat($prices.eq(1).text().replace("$", ""));
        expect(preco1).to.be.lte(preco2);
    });
});

// ===== CARRINHO =====

When("eu adiciono o produto {string} ao carrinho", (nomeProduto: string) => {
    productsPage.adicionarAoCarrinho(nomeProduto);
});

When("eu removo o produto {string} do carrinho", (nomeProduto: string) => {
    productsPage.removerDoCarrinho(nomeProduto);
});

Then(
    "o ícone do carrinho deve mostrar {string} item",
    (quantidade: string) => {
        productsPage.verificarIconeCarrinho(quantidade);
    }
);

Then(
    "o ícone do carrinho deve mostrar {string} itens",
    (quantidade: string) => {
        productsPage.verificarIconeCarrinho(quantidade);
    }
);

Then("o ícone do carrinho deve estar vazio", () => {
    productsPage.verificarCarrinhoVazio();
});

When("eu vou para o carrinho", () => {
    productsPage.irParaCarrinho();
});

When("eu clico em {string}", (botao: string) => {
    cy.contains(botao).click();
});

When(
    "eu preencho os dados de entrega {string} {string} {string}",
    (nome: string, sobrenome: string, cep: string) => {
        cartPage.preencherDadosEntrega(nome, sobrenome, cep);
    }
);

When("eu confirmo o pedido", () => {
    cartPage.confirmarPedido();
});

Then("devo ver a mensagem de confirmação {string}", (mensagem: string) => {
    cartPage.verificarConfirmacao(mensagem);
});
