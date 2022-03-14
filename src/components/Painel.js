import React, { useEffect, useState } from "react";
import api from "../services/api"
//Importa o componente grafico criado no arquivo Grafico.js
import Grafico from "./Grafico";
//Importa o componente QuadroRespostas criado no arquivo QuadroRespostas.js
import QuadroRespostas from "./QuadrosRespostas";

//Dashboard onde serão exibidas as pesquisas
const Painel = () => {
    const [user, setUser] = useState([]);

    //consumindo os dados da api, para testar a comunicação entre back e front
    useEffect(() => {
        api
            .get("http://localhost:8080/api/users")
            .then((response) => setUser(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []); 

    return (
        //container html
        <div>
        {/*Lista que recupera nome de usuário logado*/}
        <ul>
            {user.map(({ name, id }) => (
                <li key={'Nome do Usuáro: '+ id}>{'Tipo de Usuário: ' + name}</li>
            ))}
        </ul>
        
        {/*Chamada do componente QuadroRespostas*/}
        <QuadroRespostas/>
        {/*Chamada do componente Grafico*/}
        <Grafico/>

        </div>
    );
}

export default Painel;