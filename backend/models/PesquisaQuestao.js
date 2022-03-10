const Sequelize = require('sequelize');
const db = require('./db');

//Define a tabela de pesquisa e suas colunas, conforme documentação do sequelize
const PesquisaQuestao = db.define('pesquisa_questao', {
    pergunta: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//Cria tabela, conforme definido acima
PesquisaQuestao.sync();


module.exports = PesquisaQuestao;