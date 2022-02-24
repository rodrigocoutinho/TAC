const express = require('express');

const cors = require ('cors');

const User = require('./models/User');

const App = express();

//Recebe o express json na aplicação APP
App.use(express.json());

//middleware que permite o acesso a api
App.use((req, res, next) => {
    console.log("Acesso permitido!");
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST, DELETE')
    App.use(cors());
    next();
});

//Metodo get da api, onde será retornado as informações da api
App.get("/api/users", async (req, res) => {
    const users = await User.findAll();
    res.send(users);
});

//Metodo post para gravação dos dados enviados da requisição para o banco.
App.post("/api/register", async (req, res) => {
    //console.log(req.body);

    await User.create(req.body)
        .then(() => {
            return res.status(200).json({
                erro: false,
                mensagem: "Usuario cadastrado com sucesso!"
            })/*.catch(() => {
                return res.status(400).json({
                    erro: false,
                    mensagem: "Erro: Usuário não cadastrado!"
                });
            });*/
        });
});

  // Roda o servidor e atribui a porta em que será usada
App.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
})