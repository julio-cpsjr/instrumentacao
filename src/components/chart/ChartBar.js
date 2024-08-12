import Chart from 'chart.js/auto';
import React, {useEffect} from 'react';
import styles from './ChartBar.module.css';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

let BarChart;
var dats = [];
function ChartBar({titulo,cor_fill,cor_border}){
    dats = [{id:'Set',teste:70},{id:'Out',teste:30}];
    var teste1 = dats[0].teste;
    var teste2 = dats[1].teste;
    useEffect(() => {
        buildChart();
    }, []);
    
    const buildChart = () => {
        var ctx = document.getElementById("BarChart").getContext("2d");
        
        if (typeof BarChart !== "undefined")
         BarChart.destroy();
         
         BarChart = new Chart(ctx, {
             type: 'bar',
             data: {
                 labels: ['Set', 'Out'],
                 datasets: [
                     {
                         label: 'Taxa em %',
                         data: [teste1,teste2],
                         fill: true,
                         backgroundColor: `${cor_fill}`,
                         borderColor: `${cor_border}`,
                         borderWidth: 3
                        }],
                        
                    },
            Options:{
                scales: {
                    x: {
                        grid: {
                            display: false,
                            offset: false,
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
                  },
               }
            }
         })
    }
    return(
     <div className={styles.chart}>
        
        <canvas id='BarChart' className={styles.canvas}/>
     </div>
    ) 
}
export default ChartBar;