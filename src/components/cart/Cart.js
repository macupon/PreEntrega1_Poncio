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
                    <div className='div-card-price'>
                        <p className='iva'> Subtotal:</p>
                        <p className='card-price'>${calcularPrecioTotal()*0.8}</p>
                    </div>
                    <div className='div-card-price'>
                        <p className='iva'> IVA:</p>
                        <p className='card-price'>${calcularPrecioTotal()*0.2}</p>                       
                    </div>
                    <div className='div-card-price'>
                        <p className='iva'> Total:</p>
                        <p className='card-price'>${calcularPrecioTotal()}</p>
                    </div>
                </div> 

            <div className='checkout'>
                <Link to="/checkout" style={{ textDecoration: 'none' }}>
                    <button component={Link} to="/checkout" className='btn-checkout' id="buttoncheck">Checkout</button>
                </Link>
            </div>
        </div>

       
        )
    }
/* ####################################################
                    EXPORTACIONES
######################################################*/
export default Cart;