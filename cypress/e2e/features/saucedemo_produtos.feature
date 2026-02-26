# language: pt
Funcionalidade: Produtos e Carrinho - SauceDemo
  Como um usuário autenticado na Sauce Labs Demo Shop
  Quero navegar e adicionar produtos ao carrinho
  Para validar o fluxo de compra

  Contexto:
    Dado que estou logado no SauceDemo como "standard_user"

  @saucedemo @produtos @happy-path
  Cenário: Visualizar lista de produtos
    Então devo ver a lista de produtos disponíveis
    E a lista deve conter ao menos 1 produto

  @saucedemo @produtos @ordenacao
  Cenário: Ordenar produtos por nome de A a Z
    Quando eu ordeno os produtos por "Name (A to Z)"
    Então o primeiro produto deve ser "Sauce Labs Backpack"

  @saucedemo @produtos @ordenacao
  Cenário: Ordenar produtos por preço crescente
    Quando eu ordeno os produtos por "Price (low to high)"
    Então o primeiro produto deve ser o mais barato

  @saucedemo @carrinho @happy-path
  Cenário: Adicionar produto ao carrinho
    Quando eu adiciono o produto "Sauce Labs Backpack" ao carrinho
    Então o ícone do carrinho deve mostrar "1" item

  @saucedemo @carrinho @happy-path
  Cenário: Adicionar múltiplos produtos ao carrinho
    Quando eu adiciono o produto "Sauce Labs Backpack" ao carrinho
    E eu adiciono o produto "Sauce Labs Bike Light" ao carrinho
    Então o ícone do carrinho deve mostrar "2" itens

  @saucedemo @carrinho @remover
  Cenário: Remover produto do carrinho
    Quando eu adiciono o produto "Sauce Labs Backpack" ao carrinho
    E eu removo o produto "Sauce Labs Backpack" do carrinho
    Então o ícone do carrinho deve estar vazio

  @saucedemo @carrinho @checkout
  Cenário: Finalizar compra com sucesso
    Quando eu adiciono o produto "Sauce Labs Backpack" ao carrinho
    E eu vou para o carrinho
    E eu clico em "Checkout"
    E eu preencho os dados de entrega "Maria" "Silva" "01310-100"
    E eu confirmo o pedido
    Então devo ver a mensagem de confirmação "Thank you for your order!"
