/* ####################################################
                    IMPORTACIONES
######################################################*/
import './CardWidget.css'
import { FaShoppingCart } from "react-icons/fa";


/* ####################################################
                    LOGICA
######################################################*/
const  CardWidget = (props) => { //Funcion constructora
    // retorno que se va a randerizar
    return (
       <p className='col-1'>
        <FaShoppingCart size={40}/> {props.cantidad}
       </p>
      
    )

}



/* ####################################################
                    EXPORTACIONES
######################################################*/
export default CardWidget