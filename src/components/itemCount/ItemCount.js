/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulo
import { useState } from 'react'
// Estilo
import './ItemCount.css'



/* ####################################################
                    LOGICA
######################################################*/
const  ItemCount = (props) => { //Funcion constructora
    const [count,setCount] = useState(0)
    
    // Funcion sumar con maximo de stock
    const addOne = () => {
        if(count < props.stock){
            setCount(prevCount => prevCount + 1)
            props.guardarCantidadAComprar(prevCount => prevCount + 1)
        }
    }
    // Funcion restar
    const disOne = () => {
        if(count > 0){
            setCount (prevCount => prevCount  - 1)
            props.guardarCantidadAComprar(prevCount => prevCount - 1)
        }
    }

    // retorno que se va a randerizar
    return (
    <div>
        <div className='count_box'>
            <div className='button-count'>
                <div className='btn-count-child'>
                    <button onClick={disOne}>-</button>
                    <p className='count_number'>{count}</p>
                    <button onClick={addOne}>+</button>
                </div>
            </div>
        </div>
    </div>
        
    )
}


/* ####################################################
                    EXPORTACIONES
######################################################*/
export default ItemCount