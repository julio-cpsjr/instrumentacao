import React, { useState } from 'react';
import styles from'./Instrumentos.module.css';
import LabCsv from '../csv/instrumentos.csv';

function Instrumentos(){
    const [csvFile, setCsvFile] = useState();
    const [csvArray, setCsvArray] = useState([]);

    
    function csvJSON(csv) {
        
        const lines = csv.replace(/\r+/g,'').split('\n');
        const headers = lines[0].split(',')
        var result = [];
        for (let i = 1; i<lines.length; i++){
            if (!lines[i]) {
                continue
            }
            const obj = {}
             const currentline = lines[i].split(',')

             for (let j = 0; j< headers.length; j++){
                obj[headers[j]] = currentline[j]

             }
            result.push(obj)
        }
        setCsvArray(result)
   
    }
    async function getData(arq){     //Funçao para ler arquivo local
        const response = await fetch(arq);  //ler arquivo local 
        const table = await response.text(); // converte o arquivo em texto
        setCsvFile(response);
        csvJSON(table);
        
    }
    const submit = () => {
        
        getData(`${LabCsv}`);

    }
    
    return(
     <div className={styles.App}>
        <h3> Instrumentação</h3>
        <p> Lista de instrumentos com vencimento para os proximos 10 dias</p>
        <h4> Clique no botão para atualizar os instrumentos</h4>
        <button className={styles.buttom} 
                onClick={(e) => {
                    e.preventDefault()
                    submit()
                }}
            >
                Atualizar
            </button>
        <p className={styles.instrumento}>
        {csvArray.map((item) => {
                    let resultado;
                    let data_result;
                    let data_hora = new Date();
                    const data_slice = (data_hora.getDate())+"/"+(data_hora.getMonth()+1)+"/"+(data_hora.getFullYear());

                    const data_corrente = {
                        dia:parseInt(data_slice.slice(0,2)),
                        mes:parseInt(data_slice.slice(3,5)),
                        ano:parseInt(data_slice.slice(6,10))
                    }
                    const prodata = {
                        dia:parseInt(item.Programado.slice(0,2)),
                        mes:parseInt(item.Programado.slice(3,5)),
                        ano:parseInt(item.Programado.slice(6,10))
                    }
                    // const exedata = {
                    //     dia:parseInt(item.Executado.slice(0,2)),
                    //     mes:parseInt(item.Executado.slice(3,5)),
                    //     ano:parseInt(item.Executado.slice(6,10))
                    // }
                    // if (( exedata.dia > prodata.dia)&&(prodata.mes === exedata.mes)) {
                    //   resultado = item.Instrumento
                    // }
                    data_result = ((prodata.dia) - (data_corrente.dia))
                    
                    
                    if ((( 0 < data_result)&&(data_result <= 10))&&(prodata.mes === data_corrente.mes)) {
                        resultado = item.Instrumento
                        return(
                           <>
                             <ui>
                                <li>{resultado}</li>
                             </ui>        
                           </>
                        )                      
                    }else{
                        return(
                            <></>
                        )
                    }
                })}
        </p>
     </div>
    );

}
export default Instrumentos;