/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos

// Estilos
import './OrderId.css'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

// Componentes

// Core

/* ####################################################
                    LOGICA
######################################################*/
const  OrderId = (props) => { //Funcion constructora
    const {CartOrderID} = useContext(CartContext);


    // retorno que se va a randerizar
    return (
       <p>
        Muchas gracias por su pedido!
        Su número de orden es {CartOrderID}
       </p>
    )
}


/* ####################################################
                    EXPORTACIONES
######################################################*/
export default OrderId