# language: pt

@login
Funcionalidade: Logar na plataforma de avaliação de usabilidade de software
  A fim de  logar na plataforma
  Como usuario registrado
  Eu quero Logar para ter acesso a criação e avaliação de usabilidade

    Cenário: Login válido
        Dado que o Engenheiro de Software possui uma conta
        E o usuário que forneça <email>
        E forneça <password>
        Quando  dados <email>
        E <password> são válidos
        Então o sistema deve permitir a autenticação do usuário
        E é exibida mensagem "Usuario logado"

    Cenário: Login inválido
        Dado que o Engenheiro de Software possui uma conta
        E o usuário que forneça <email>
        E forneça <password>
        Quando  dados <email>
        E <password> são inválidos
        Então exibir mensagem "Usuário ou senha incorreta"

    Cenário: Login de usuário não registrado
        Dado que o Engenheiro de Software possui uma conta
        E o usuário que forneça <email>
        E forneça <password>
        Quando  dados <email> não é valido
        Então exibir mensagem "Não registrado"