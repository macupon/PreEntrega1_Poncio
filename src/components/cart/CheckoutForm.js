/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos

// Estilos
import './CheckoutForm.css'

// Componentes
import { useContext, useEffect, useState, useCallback } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';

import OrderId from './OrderID';


// Core

/* ####################################################
                    LOGICA
######################################################*/
const  CheckoutForm = () => { //Funcion constructora
    const {itemsCarrito, CartOrderID, setCartOrderID} = useContext(CartContext);
    const [orderID, setOrderID] = useState()

    const calcularPrecioTotal = () => {
        var total = 0
        itemsCarrito.forEach(element => {total = total + element.totalPrice});
        return total
    }  

    const sendOrder = async(event) =>{
        const newOrder = {
            buyer:{
                name:"Maca",
                phone:"fjnrejf",
                email:"fnejf@gmial.com"
            }, 
                items:itemsCarrito,
                total: "mdekmd",
            };
            console.log(newOrder)
            const queryRef = collection(db, "orders");
            const response = await addDoc(queryRef, newOrder);
            console.log(response)
            setOrderID(response.id)

            setCartOrderID(response.id)
            
            
            // return response.id
        }
        
    
        // useEffect(()=>{
        //     setCartOrderID(orderID);
        //     console.log(CartOrderID)
        //     },[orderID])

        // const navigate = useNavigate()
        // const handleOnClick = useCallback( (orderID) => navigate('/blabla', {replace: true}), [navigate]);

        // const onclick = (orderID) =>{
        //     sendOrder()
        //     console.log(orderID)
        //     handleOnClick(orderID)
        // }



    // retorno que se va a randerizar
    return (
        
            <div className=' columns_pedido container'>
                <div className='containerResumenPedido container'>
                    <p className='tituloPedido'>Resumen de su Pedido</p>
                    <div className='resumen'>
                        
                        <p>-3x Mario</p>
                        <p>-2x Maradona</p>
                        {orderID}
                    </div>
                </div>
                
                <div  data-aos="fade-up" className='contact-form-wrapper d-flex justify-content-center'>
                    <form action="#" className='contact-form' id="sendForm">
                        <h5 className='title' id="contactmilo">Enviar Pedido</h5>
                        <div>
                        <input type="text" className='form-control rounded border-white mb-3 form-input'id="name" placeholder="Name" required/>
                        </div>
                        <div>
                        <input type="email" className='form-control rounded border-white mb-3 form-input' id="emailForm" placeholder=" Email" required/>
                        </div>
                        <div>
                        <textarea  class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" id="message" placeholder=" Message" required></textarea>
                        </div>
                        <div className='submit-button-wrapper' >
                        <Link to={`/${orderID}`}>  
                        <button onClick={sendOrder} id="enviarForm" type="submit" value="Send">Enviar</button>
                        </Link>
                        </div>
                    </form>
                </div>
            </div>
               
        
    )
}


/* ####################################################
                    EXPORTACIONES
######################################################*/
export default CheckoutForm



{/* <form>
<label>
    Name:
    <input type="text" name="name" />
</label>
<label>
    phone:
    <input type="text" name="phone" />
</label>
<label>
    email:
    <input type="text" name="email" />
</label>
<input type="submit" value="Enviar Orden" onClick={sendOrder}/>
</form> */}