# language: pt
@pesquisa
Funcionalidade: Criar avaliação de usabilidade
  A fim de  criar avaliação de usabilidade
  Como usuário Engenheiro de Software
  Eu quero criar avaliação de usabilidade de software

    Cenário: Criar avaliação
        Dado que o Engenheiro de Software tenha acesso a tela de login
        E que um usuário esteja logado.
        Quando  o <name> da avaliação é preenchido
        E a <descricao> é preenchida
        E o <tcle> é preenchido
        E o <status> é preenchido
        Então a pesquisa é criada

