import styles from './Contato.module.css';
import lab from '../img/LabTronic.jpeg';

function Contato (){

    return (
        <div className = {styles.App}>
          <header className={styles.App_header}>
           <img src={lab} className={styles.App_lab} alt="lab" />
           <h3> Contato...</h3>
          <br/>
          <h4> Se precisar, não estou...</h4>
          </header>
        </div>
    )
}
export default Contato;