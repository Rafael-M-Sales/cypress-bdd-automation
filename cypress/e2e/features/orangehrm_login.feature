# language: pt
Funcionalidade: OrangeHRM - Cypress
  Como um administrador do sistema RH
  Quero validar o login e elementos do dashboard
  Para garantir a integridade do sistema no Cypress

  @orangehrm @login
  Cenário: Login com sucesso no OrangeHRM
    Dado que estou na página de login do OrangeHRM
    Quando eu entro com usuário "Admin" e senha "admin123"
    Então sou redirecionado para o dashboard
    E devo ver o título da seção como "Dashboard"

  @orangehrm @navegacao
  Cenário: Acessar módulo administrativo
    Dado que estou logado no OrangeHRM como admin
    Quando eu clico no menu lateral "Admin"
    Então o título da seção deve mudar para "Admin"
