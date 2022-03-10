const express = require('express');
const cors = require('cors');
const Routes = require('./Routes');

const App = express();

//Recebe o express json na aplicação APP
App.use(express.json());
App.use(cors());

// Adiciona as rotas na aplicação
App.use(Routes);

// Roda o servidor e atribui a porta em que será usada
App.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
})