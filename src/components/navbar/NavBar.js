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
    <header className="navbar row">
        
      <h1 className="apliques col-4">Apliques Marian <FaStar size={20}/> </h1> 
      <nav className="navbar navbar-expand-lg nav-custom-purple col-7">
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
              <li className="nav-item">
                <Link className="nav-link  px-3" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  px-3" aria-current="page" to="/nosotros">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  px-3" aria-current="page" to="/presupuesto">Presupuesto</Link>
              </li>
              <li className="nav-item dropdown">
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
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CardWidget cantidad="10" />
    </header>
  );
};

/* ####################################################
                    EXPORTACIONES
######################################################*/
export default NavBar;