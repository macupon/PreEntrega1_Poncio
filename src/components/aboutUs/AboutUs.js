/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos
import { Helmet } from 'react-helmet';
import React from 'react';
import mariImg from '../../assets/img/mariProcreate.png';
// Estilos
import './AboutUs.css'

// Componentes

// Core

/* ####################################################
                    LOGICA
######################################################*/
const  AboutUs = () => { //Funcion constructora
    // retorno que se va a randerizar
    return (
        <div className='nosotros-div'>
            <Helmet>
                <style>{'body{ background-color: #F7D6D0;}'}</style>
            </Helmet>
            <div className='nosotros-img-text'>
                <div>
                    <img className='nosotros-img' src={mariImg}  alt=""></img>
                </div>
                <p className='nosotros-text-div'>
                    Hola!!! Soy Marianita <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}


/* ####################################################
                    EXPORTACIONES
######################################################*/
export default AboutUs;