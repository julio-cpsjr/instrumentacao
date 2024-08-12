
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Execucao from './components/pages/Execucao';
import Contato from './components/pages/Contato';
import Instrumentos from './components/pages/Instrumentos';
import Footer from './components/layout/Footer';


function App() {
   return (
    <Router>
       <Navbar/>
       <Routes>
         <Route exact path='/'element={<Home/>}/> 
         <Route path='/instrumentos'element={<Instrumentos/>}/>
         <Route path='/execucao' element={<Execucao/>}/>
         <Route path='/contato'element={<Contato/>}/>
       </Routes>
       <Footer/>
    </Router>
       );
 }

 export default App;