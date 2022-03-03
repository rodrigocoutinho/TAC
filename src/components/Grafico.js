import React from "react";
import {Bar} from 'react-chartjs-2';

const Grafico = () => {
    return(
    <div>
        <Bar
        data={{
            labels: ['18 a 21 anos', '22 a 25 anos', '25 a 30 anos', 'Acima de 30 anos'],
            datasets: [
                { labels: 'Respostas por Faixa Etária',
                  data: [5, 10, 15, 20, 25, 30],
                  backgroundColor: ['Green', 'Yellow', 'Orange', 'Red'],
                },
            ],
        }}
        height={100}
        width={100}
        options={{
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