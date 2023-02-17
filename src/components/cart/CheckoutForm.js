/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos

// Estilos
import './CheckoutForm.css'

// Componentes
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';

// Core

/* ####################################################
                    LOGICA
######################################################*/
const  CheckoutForm = () => { //Funcion constructora
    const {itemsCarrito} = useContext(CartContext);
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

            alert(`Gracias por su pedido, su número de orden es: ${response.id}`)
        }
        

    // retorno que se va a randerizar
    return (
        
            <div className=' columns_pedido container'>
                <div className='containerResumenPedido container'>
                    <p className='tituloPedido'>Resumen de su Pedido</p>
                    <div className='resumen'>
                        
                        <p>{itemsCarrito.map((e)=> (<span> {(e.quantity)} x {(e.nombre)} <br/> </span>))}</p>
                        <p>Total a Pagar: ${calcularPrecioTotal()}</p>
                        <div>
                        <p>Su número es:<br/> {orderID}</p>
                        </div>
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
                        
                        <button onClick={sendOrder} id="enviarForm" type="submit" value="Send">Enviar</button>
                        
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