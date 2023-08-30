/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulo

import { Link } from 'react-router-dom';

// Estilo
import './NavBar.css';
// import styles from "./NavBar.css";
import CardWidget from "../cardWidget/CardWidget.js";
import {FaStar} from "react-icons/fa";



/* ####################################################
                    LOGICA
######################################################*/
const NavBar = (props) => {
  //Funcion constructora
  // retorno que se va a randerizar
  return (
    <header className="row">
      <nav className="navbar navbar-expand-lg nav-custom-purple col-7">
        
        {/* <h1 className="apliques-title col-4">Apliques Marian <FaStar size={20}/> </h1>  */}
        <h1 className='apliques-title col-4'>
          <span className='char1'>A</span>
          <span className='char2'>p</span>
          <span className='char3'>l</span>
          <span className='char4'>i</span>
          <span className='char5'>q</span>
          <span className='char6'>u</span>
          <span className='char7'>e</span>
          <span className='char8'>s</span>
          <span className='char8'> </span>
          <span className='char9'>M</span>
          <span className='char10'>a</span>
          <span className='char11'>r</span>
          <span className='char12'>i</span>
          <span className='char13'>a</span>
          <span className='char14'>n</span>
          <span className='char8'> </span>
          <span className='char15'><FaStar size={20}/></span>
        </h1>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="faStar"><FaStar size={9}/></li>
              <li className="nav-item">
                <Link className="nav-link  px-3" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  px-3" aria-current="page" to="/nosotros">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  px-3" aria-current="page" to="/productos">Productos</Link>
              </li>
              <li className="faStar"><FaStar size={9}/></li>
            </ul>
          </div>
        </div>
      <CardWidget/>
      </nav>
    </header>
  );
};

/* ####################################################
                    EXPORTACIONES
######################################################*/
export default NavBar;




  {/* <li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle px-3" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">Productos</Link>
    <ul className="dropdown-menu">
      <li>
      <Link className="dropdown-item" aria-current="page" to="/productos/Persona">Personas</Link>
      </li>
      <li>
      <Link className="dropdown-item" aria-current="page" to="/productos/Personajes">Personajes</Link>
      </li>
      <li>
      <Link className="dropdown-item" aria-current="page" to="/productos/Disney">Disney</Link>
      <li>
      <Link className="dropdown-item" aria-current="page" to="/productos">Todos</Link>
      </li>
      </li>
    </ul>
  </li> */}