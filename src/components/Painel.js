import React, { useEffect, useState } from "react";
import api from "../services/api";
//Importa o componente grafico criado no arquivo Grafico.js
import Grafico from "./Grafico";
//Importa o componente QuadroRespostas criado no arquivo QuadroRespostas.js
import QuadroRespostas from "./QuadrosRespostas";

//Dashboard onde serão exibidas as pesquisas
const Painel = () => {
    const [user, setUser] = useState([]);
    const token = sessionStorage.getItem('token');
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
            <div>
                <ul>
                    {user.map(({ name, id }) => (
                        <li key={id}>{name}</li>
                    ))}
                </ul>
            </div>
            <div>
                {/*Chamada do componente QuadroRespostas*/}
                <QuadroRespostas />
            </div>
            <div>
                {/*Chamada do componente Grafico*/}
                <Grafico />
            </div>

        </div>
    );
}

export default Painel;