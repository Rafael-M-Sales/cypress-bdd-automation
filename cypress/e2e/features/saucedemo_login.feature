# language: pt
Funcionalidade: Login - SauceDemo
  Como um usuário da Sauce Labs Demo Shop
  Quero realizar login com diferentes tipos de usuários
  Para validar o comportamento de autenticação

  @saucedemo @login @happy-path
  Cenário: Login com usuário padrão válido
    Dado que estou na página de login do SauceDemo
    Quando eu faço login com credenciais "standard_user" e "secret_sauce"
    Então devo ser redirecionado para a página de produtos
    E devo ver o título "Products"

  @saucedemo @login @sad-path
  Cenário: Login com usuário bloqueado
    Dado que estou na página de login do SauceDemo
    Quando eu faço login com credenciais "locked_out_user" e "secret_sauce"
    Então devo ver a mensagem de erro "Epic sadface: Sorry, this user has been locked out."

  @saucedemo @login @sad-path
  Cenário: Login sem preencher campos
    Dado que estou na página de login do SauceDemo
    Quando eu clico no botão de entrar sem preencher os campos
    Então devo ver a mensagem de erro "Epic sadface: Username is required"

  @saucedemo @login @sad-path
  Cenário: Login sem preencher senha
    Dado que estou na página de login do SauceDemo
    Quando eu preencho apenas o usuário "standard_user" e clico em entrar
    Então devo ver a mensagem de erro "Epic sadface: Password is required"

  @saucedemo @login @performance
  Cenário: Login com usuário de performance lenta
    Dado que estou na página de login do SauceDemo
    Quando eu faço login com credenciais "performance_glitch_user" e "secret_sauce"
    Então devo ser redirecionado para a página de produtos
