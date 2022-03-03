import React, { useEffect, useState } from "react";
import api from "../services/api"

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
        <div>
        <ul>
            {user.map(({ name, id }) => (
                <li key={id}>{name}</li>
            ))}
        </ul>
        <ul>
            <h4>Pesquisas Realizadas</h4>
            <li>Pesquisa Docentes 2022-1</li>
            <li>Pesquisa Docentes 2022-2</li>
            <li>Pesquisa Infraestrutura UFG 2022</li>
        </ul>
        
        <Grafico/>

        </div>
    );
}

export default Painel;