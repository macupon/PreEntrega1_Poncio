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
        <main>
            <div className='div-checkout'>
                <div className='columns_pedido'>
                    <div className='div-title-checkout'>
                        <p className='title-checkout'>Gracias por su pedido! </p>
                    </div>

                    <div>
                        <div class="line-1"></div>
                        <div class="line-2"></div>
                    </div>

                    <div className='div-form-resumen'>
                        <div className='div-resumenPedido'>
                            <div className='resumen'>
                                <h5 className='title-resumen' id="contactmilo">Resumen de su pedido</h5>
                                <p>{itemsCarrito.map((e)=> (<span> {(e.quantity)} x {(e.nombre)} <br/> </span>))}</p>
                                <p>Total a Pagar: ${calcularPrecioTotal()}</p>
                                <div>
                                    <p>Su número es:<br/> {orderID}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='div-contact-form'>
                            <form action="#" className='contact-form' id="sendForm">
                                <h4 className='form-title' id="contactmilo">Complete con sus datos</h4>
                                <div>
                                    <input type="text" className='form-control rounded border-white mb-3 form-input'id="name" placeholder="Name" required/>
                                </div>
                                <div>
                                    <input type="email" className='form-control rounded border-white mb-3 form-input' id="emailForm" placeholder=" Email" required/>
                                </div>
                                <div>
                                    <textarea  class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" id="message" placeholder=" Message" required></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className='div-btn-enviar' >
                <button onClick={sendOrder} className='btn-enviar' id="enviarForm" type="submit" value="Send">Enviar 😊</button>
            </div>

        </main>    
        
    )
}


/* ####################################################
                    EXPORTACIONES
######################################################*/
export default CheckoutForm