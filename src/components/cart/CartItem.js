import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import React from 'react'

import './CartItem.css'

const CartItem = (props) => {
    const {addItem} = useContext(CartContext);
    const {id, nombre, precio, medida, img, stock, categoria, quantity, totalPrice} = props.item;

    const [count,setCount] = useState(quantity)

    // Funcion sumar con maximo de stock
    const addOne = () => {
        if(count < stock){
            setCount(prevCount => prevCount + 1)
            addItem(props.item, 1)
        }
    }
    // Funcion restar
    const disOne = () => {
        if(count > 1){
            setCount (prevCount => prevCount  - 1)
            addItem(props.item, -1)
        }
    }

    return(
        <div className='card_cart'>
            <img src={img} className='img_cart' alt=""></img>
            <h5 className='title_card_cart'>{nombre} </h5>
            <p className='txt-cart'>Tamaño: {medida} cm</p>

                <div className='btn-CountCart'>
                    <button onClick={disOne}>-</button>
                    <p>{count}</p>
                    <button onClick={addOne}>+</button>
                </div>
            
                <p className='txt-cart'>${precio}</p>
            
                <button onClick={() => props.removeItem(id)} className='delete-btn'>Eliminar</button>

                <p className='txt-cart price_cart'> Total: ${totalPrice}</p>
        </div>
    );
}

export default CartItem;   