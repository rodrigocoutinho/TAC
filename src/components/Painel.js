import React, { useEffect, useState } from "react";
import api from "../services/api"
//Importa o componente grafico criado no arquivo Grafico.js
import Grafico from "./Grafico";

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
                <li key={id}>{name}</li>
            ))}
        </ul>
        {/*Lista estática de pesquisas realizadas(futuramente servirá para pesquisas realmente realizadas).*/}
        <ul>
            <h4>Pesquisas Realizadas</h4>
            <li>Pesquisa Docentes 2022-1</li>
            <li>Pesquisa Docentes 2022-2</li>
            <li>Pesquisa Infraestrutura UFG 2022</li>
        </ul>
        {/*Chamada do componente Grafico*/}
        <Grafico/>

        </div>
    );
}

export default Painel;