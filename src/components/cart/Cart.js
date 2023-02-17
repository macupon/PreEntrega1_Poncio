/* ####################################################
                    IMPORTACIONES
######################################################*/

// Modulos
 import { Link } from 'react-router-dom';
 import { useContext } from 'react';
 import { CartContext } from '../context/CartContext';
 import CartItem from './CartItem';
 import './Cart.css'


// Estilos


// Componentes

// Core

/* ####################################################
                    LOGICA
######################################################*/

    const  Cart = () => { //Funcion constructora
        const {itemsCarrito, removeItem} = useContext(CartContext);

        const calcularPrecioTotal = () => {
            var total = 0
            itemsCarrito.forEach(element => {total = total + element.totalPrice  
            });
            return total
        }        

        return (
        
        <div>
            <div className='grids'> 
                    {itemsCarrito.map((e) => (
                            <CartItem item={e} removeItem={removeItem}/>))}
            </div>
                <div className='totales container'>
                    <p className='iva'> Subtotal:</p>
                    <p className='card-price'>${calcularPrecioTotal()*0.8}</p>
                    <p className='iva'> IVA:</p>
                    <p className='card-price'>${calcularPrecioTotal()*0.2}</p>
                    <p className='iva'> Total:</p>
                    <p className='card-price'>${calcularPrecioTotal()}</p>
                </div>

            <div className='checkout'>
                <Link to="/checkout">
                <button component={Link} to="/checkout" className='checkoutButton' id="buttoncheck" >Checkout</button>
                </Link>
            </div>
        </div>

       
        )
    }
/* ####################################################
                    EXPORTACIONES
######################################################*/
export default Cart;