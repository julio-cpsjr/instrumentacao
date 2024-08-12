import React from 'react';
import ChartLine2 from '../chart/ChartLine2';
import ChartLine from '../chart/ChartLine';
import styles from './Execucao.module.css';
import BarChart from '../chart/ChartBar';


function Execucao() {
    
    var setValue = [10,20,30,40];
    var S1 = parseInt(setValue[0]);
    var S2 = parseInt(setValue[1]);
    var S3 = parseInt(setValue[2]);
    var S4 = parseInt(setValue[3]);
    
    
    return (
        <div className={styles.social}>
          <header>
            <p className={styles.social_text}>
              Acompanhamento de execuções 
            </p>
            <br/>
            <p className={styles.social_chart}>
            
              <ChartLine 
              Id = "LineChart2" 
              titulo = "Setembro" 
              S1 = {40} S2 = {30} S3 = {20} S4 = {10} 
              Color = 'rgb(0,0,250)' 
              Color_back='rgba(0,0,250,0.3)'/>
             
              <ChartLine2
              titulo = "Outubro"
              S1 = {S1} S2 = {S2} S3 = {S3} S4 = {S4} 
              Color = 'rgb(250,0,0)' 
              Color_back='rgba(250,0,0,0.3)'/>

              <BarChart titulo= 'Qtd' cor_fill= 'rgba(250,0,0,0.4)' cor_border= 'rgb(250,0,0)'/>
            </p>
            
            <br/>
            </header>
        </div>
    )
}

export default Execucao;