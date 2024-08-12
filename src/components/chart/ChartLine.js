import Chart from 'chart.js/auto';
import React, {useEffect} from 'react';
import styles from './ChartLine.module.css';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

let LineChart;
function ChartLine({Id,titulo,S1,S2,S3,S4,Color,Color_back}){
     
    useEffect(() => {
        buildChart();
    }, []);

    const buildChart = () => {
        var ctx = document.getElementById(`${Id}`).getContext("2d");

        if (typeof LineChart !== "undefined")
         LineChart.destroy();

        LineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['S1', 'S2', 'S3', 'S4'],
                datasets: [
                    { 
                        label: 'Execução em %',
                        data: [`${S1}`,`${S2}`,`${S3}`,`${S4}`],
                        fill: true,
                        backgroundColor: `${Color_back}`,
                        borderColor: `${Color}`,
                        tension: 0
                    },
                ]
            },
            options: {
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                        min: 0,
                        max: 100,
                    }
                },
                animation: {
                    duration: 750,
                },
                plugins: {
                    title: {
                        display: true,
                        text: `${titulo}`,
                        position: 'top',
                        align: 'center',
                    },
                    legend:{
                        labels:{
                            font:{
                                weight: 'bold',
                            }
                        }
                    }
                }
            }
        });
    }   
   return(
     <div className={styles.chart}>
        <canvas id={Id} className={styles.canvas}/>
     </div>
   )
   

}
export default ChartLine;



