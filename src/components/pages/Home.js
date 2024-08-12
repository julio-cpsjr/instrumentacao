import lab from '../img/LabTronic.jpeg';
import styles from './Home.module.css';
import React from 'react';


function Home (){

    return (
        <div>
        <header className={styles.App_header}>
           <img src={lab} className={styles.App_lab} alt="lab" />
           
        </header>       
    </div>
)
}
export default Home;