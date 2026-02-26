# language: pt
Funcionalidade: Automation Exercise - Cypress
  Como um usuário do site Automation Exercise
  Quero validar o login e busca de produtos no Cypress

  @ae @login
  Cenário: Login com sucesso no Automation Exercise
    Dado que estou na página inicial do Automation Exercise (Cypress)
    Quando eu clico em "Signup / Login"
    E eu preencho e-mail "qa_teste@automationexercise.com" e senha "Senha@123"
    E clico em "Login"
    Então devo ver que estou logado
