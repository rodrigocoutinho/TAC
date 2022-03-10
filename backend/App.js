const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('./models/User');
const authMiddleware = require('./middlewares/auth');


const App = express();


//Recebe o express json na aplicação APP
App.use(express.json());

App.use(cors());

//Metodo post para gravação dos dados enviados da requisição para o banco.
App.post("/api/register", async (req, res) => {
    //console.log(req.body); imprime o que foi recebido no body da requisição.
    const email = req.body.email
    const senha = req.body.password;

    const verifica = await User.findAll({
        where: {
            email: email
        }
    });

    if (verifica == 0) {
        bcrypt.hash(senha, saltRounds, async function (err, hash) {
            if (err) {
                console.log(err)
            }
            await User.create({
                name: req.body.name,
                fone: req.body.fone,
                tipo: req.body.tipo,
                email: req.body.email,
                password: hash
            }
            ).then(() => {
                return res.status(200).json({
                    erro: false,
                    mensagem: "Usuário cadastrado com sucesso"
                })
            });
        })


    } else {
        res.status(401).json({
            erro: true,
            mensagem: "Usuário já é cadastrado."
        })
    }


});

App.post("/api/login", async (req, res) => {
    const email = req.body.email
    const senha = req.body.password;

    const verifica = await User.findAll({
        where: {
            email: email,
        }
    });
    if (verifica.length>0){
        bcrypt.compare(senha, verifica[0].password, function (error, response) {
            if (error) {
                res.status(400).send(error)
            }
            if(response){
                const privateKey = 'private-key';
                const token = jwt.sign({ id: verifica[0].id }, privateKey, { expiresIn: '12h' });
                res.send({mensagem: "Usuario Logado", token: token})
            }else{
                res.status(400).send({mensagem: "Usuário ou senha incorreta"})
            }
        });
    }else{
        res.status(400).send({mensagem: "Não registrado"})
    }
});

App.use(authMiddleware);

//Metodo get da api, onde será retornado as informações da api
App.get("/api/users", async (req, res) => {
    const users = await User.findAll({

    });
    res.send(users);
});

// Roda o servidor e atribui a porta em que será usada
App.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
})