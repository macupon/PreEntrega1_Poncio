import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../itemCount/ItemCount'

import './CartItem.css'

const CartItem = (props) => {
    
    const {itemsCarrito} = useContext(CartContext);

    const [cantidadProductos, setCantidadProductos] = useState()
    const {addItem, removeItem} = useContext(CartContext);

    const {id, nombre, precio, medida, img, stock, categoria, quantity, totalPrice} = props.item;


    // const elementroEncontrado = itemsCarrito.filter(element => {element.nombre === id});

    // const checkExist = (id) => {
    //     const elementroEncontrado = itemsCarrito.filter(e => e.id === id)
    //    return elementroEncontrado
    // }
    // checkExist(id)
    // if (elementroEncontrado) {
    //     cantidadActual = elementroEncontrado.quantity
    // }
    // else {
    //     cantidadActual = 0
    // }


    const [count,setCount] = useState(quantity)


    // Funcion sumar con maximo de stock
    const addOne = () => {
        if(count < stock){
            setCount(prevCount => prevCount + 1)
            addItem(props.item, 1)
            // props.guardarCantidadAComprar(prevCount => prevCount + 1)
        }
    }
    // Funcion restar
    const disOne = () => {
        if(count > 1){
            setCount (prevCount => prevCount  - 1)
            addItem(props.item, -1)
            // props.guardarCantidadAComprar(prevCount => prevCount - 1)
        }
    }


    return(
        <div className='card_cart'>
        
            <img src={img} className='img_cart' alt=""></img>
            <h5 className='title_card_cart'>{nombre} </h5>
            <p>Tamaño: {medida} cm</p>

            
                <button onClick={disOne}>-</button>
                <p>{count}</p>
                <button onClick={addOne}>+</button>
            
                <p>${precio}-</p>
            
            
                <button onClick={() => props.removeItem(id)} id='onadd'>Eliminar</button>
            
            
                <p> Total: {totalPrice}</p>
            

        </div>

        // <div className='datail_cart datail_cart_cart container'>
        //     <div className='card_style tam_card_cart'>
        //     <img className='card-img-top card-img-top-cart cardCart' src={img} alt=""></img>
        //         <div className='cardCart'>
        //             <div className='card-body-cart'>
        //                 <div className='title_card' id="title_card_cart">
        //                         <h5 className='card-title title_card'>{nombre} </h5>
                                
        //                 </div>
        //                 <p className='card-price'>${precio}-</p>
        //                 <p className='card-text'>Tamaño: {medida} cm</p>
        //                 <div className='bloque_count'>
        //                     <div className='bloque_count'>
        //                         <button onClick={addOne}>+</button>
        //                         <p className='count_number'>{count}</p>
        //                         <button onClick={disOne}>-</button>
        //                     </div>
        //                     <div className='button-count'>
        //                         <button onClick={() => props.removeItem(id)} id='onadd'>Eliminar</button>
        //                     </div>
        //                 </div>
        //                 <div className='product_details'>
        //                     <p> Total: {totalPrice}</p>
        //                 </div>
                        
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default CartItem;   