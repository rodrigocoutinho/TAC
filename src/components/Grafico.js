import React from "react";
import {Bar} from 'react-chartjs-2';

const Grafico = () => {
    return(
    <div>    
        <Bar
        /*Bar é o componente de gráfico em coluna, importado no cabeçalho*/
        /*data contém as informações de preenchimento do gráfico*/
        data={{
            /*labels é um array que vai definir quantas colunas vamos ter e a legenda das mesmas*/
            labels: ['18 a 21 anos', '22 a 25 anos', '25 a 30 anos', 'Acima de 30 anos'],
            /*datasets preenche o título do gráfico(através do campo labels) e o eixo Y do mesmo(através do campo data)*/
            datasets: [
                { labels: 'Respostas por Faixa Etária',
                  data: [5, 10, 15, 20, 25, 30],
                  /*Em backgroundColor, definimos as cores das nossas colunas*/
                  backgroundColor: ['Green', 'Yellow', 'Orange', 'Red'],
                },
            ],
        }}
        /*Em height e width, definimos a altura e largura do nosso gráfico*/
        height={100}
        width={100}
        /*Em options, podemos alterar alguns detalhes da tabela*/
        options={{
            /*À partir dess ponto, vamos alterar a escala da tabela para começar do zero no eixo Y*/
            maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        }}
        />
    </div>
    )
}

export default Grafico;