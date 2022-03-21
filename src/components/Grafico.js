import React from "react";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'


const Grafico = () => {
    return (
        <div>
            <Bar
                /*Bar é o componente de gráfico em coluna, importado no cabeçalho*/
                /*data contém as informações de preenchimento do gráfico*/
                data={{
                    /*labels é um array que vai definir quantas colunas vamos ter e a legenda das mesmas*/
                    labels: ['A serem respondidas', 'Em andamento', 'Respondidas'],
                    /*datasets preenche o título do gráfico(através do campo labels) e o eixo Y do mesmo(através do campo data)*/
                    datasets: [
                        {
                            labels: 'Pesquisas Respondidas',
                            data: [3, 5, 10, 15, 20, 0],
                            /*Em backgroundColor, definimos as cores das nossas colunas*/
                            backgroundColor: ['Green', 'Yellow', 'Orange'],
                        },
                    ],
                }}
                /*Em height e width, definimos a altura e largura do nosso gráfico*/
                height={100}
                width={100}
                /*Em options, podemos alterar alguns detalhes da tabela*/
                options={{
                    /*À partir dess ponto, vamos alterar a escala da tabela para começar do zero no eixo Y*/
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Avaliações',
                        }
                    }
                }}
                    />
    </div>
    )
}

export default Grafico;