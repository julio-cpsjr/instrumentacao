import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';


function Navbar (){

   return (

    <nav className={styles.navbar}>
       <Link to={"/"} className={styles.App_lab}> </Link>
       <ui className={styles.list}>
          <li className={styles.item}>
             <Link to={"/"}> <h3>Home</h3></Link>
         </li>
          <li className={styles.item}>
          <Link to={"/instrumentos"}><h3> Instrumentos</h3></Link>
         </li>
          <li className={styles.item}>
          <Link to={"/execucao"}><h3> Execução</h3></Link>
          </li>
          <li className={styles.item}>
          <Link to={"/contato"}><h3> Contato</h3></Link>
          </li>
          <br/>
         
       </ui>
    </nav>
   )

}
export default Navbar;