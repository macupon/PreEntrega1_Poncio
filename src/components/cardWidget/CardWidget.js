/* ####################################################
                    IMPORTACIONES
######################################################*/
import './CardWidget.css'
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


/* ####################################################
                    LOGICA
######################################################*/
const  CardWidget = () => { //Funcion constructora

    const {itemsCarrito} = useContext(CartContext);

    const calcularPrecioTotal = () => {
        var cant = 0
        if (typeof itemsCarrito !== 'undefined' && itemsCarrito.length > 0) {
            itemsCarrito.forEach(element => {cant = cant + element.quantity});
        }
        return cant
    }

    
    


    // retorno que se va a randerizar
    return (
       <p className='col-1 img_carrito'>
            <Link to={'/cart'} style={{ color: 'inherit', textDecoration: 'none' }}>   
            <FaShoppingCart size={40}/> {calcularPrecioTotal()}
            </Link> 
       </p>
      
    )

}




/* ####################################################
                    EXPORTACIONES
######################################################*/
export default CardWidget