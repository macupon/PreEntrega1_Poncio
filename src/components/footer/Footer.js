/* ####################################################
                    IMPORTACIONES
######################################################*/
import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



/* ####################################################
                    LOGICA
######################################################*/
const  Footer = () => { //Funcion constructora
    // retorno que se va a randerizar
    return (
       <p className='foot social'>
        <a href='https://www.facebook.com/apliquesmarian' ><FaFacebookSquare size={35}/></a>
        <a href='https://www.instagram.com/apliquesmarian/' ><FaInstagram size={35}/></a>
       </p>
    )
}


/* ####################################################
                    EXPORTACIONES
######################################################*/
export default Footer