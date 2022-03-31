# language: pt

@conta
Funcionalidade: Criar conta na plataforma de avaliação de usabilidade de software
  A fim de criar de conta na plataforma.
  Como usuario externo
  Eu quero criar conta para ter acesso ou criar avaliações de usabilidade de software.

    Cenário: Criar conta válida
        Dado que um usuário ainda não tem cadastro
        Quando  fornece nome "Rodrigo"
        E fornece telefone "62-9999-9999"
        E fornece tipo "Engenheiro de Software"
        E fornece email "rodrigo@teste.com.br"
        E fornece senha "123"
        Então é exibida mensagem "Usuário cadastrado com sucesso"

    Cenário: Conta Existente
        Dado um usuário que tem conta
        Quando os dados forem preenchidos.
        E email existente
        Então é exibida mensagem "Usuário já é cadastrado."

    Cenário: Dados Ausentes
        Dado que um usuário não preenche as informações para criação de conta
        E que o Usuario não possui uma conta.
        Quando  campo obrigatório não é preenchido
        Então é exibida mnensagem "Campo obrigatório"