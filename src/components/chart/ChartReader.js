import Chart from 'chart.js/auto';
import React, {useEffect} from 'react';
import './ChartReader.module.css';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

let LineChart;

function ChartReader({titulo,nome,cor_fill,cor_border}){
      
    useEffect(() => {
        buildChart();
    }, []);

    const buildChart = () => {
        var ctx = document.getElementById("LineChart").getContext("2d");

        if (typeof LineChart !== "undefined")
            LineChart.destroy();

        LineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ágo', 'Set', 'Out', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: `${nome}`,
                        data: [33, 2, 100, 54, 63, 22, 77],
                        fill: true,
                        backgroundColor: `${cor_fill}`,
                        borderColor: `${cor_border}`,
                        tension: 0.5
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
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                            },
                            pinch: {
                                enabled: true
                            },
                            mode: 'xy',
                        },
                    }
                }
            }
        });
    }
   
    
   return(
     <div className="App">
       <h5>{titulo}</h5>
        <canvas id="LineChart"/>
     </div>
   )
   

}
export default ChartReader;



