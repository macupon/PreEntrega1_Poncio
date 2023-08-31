/* ####################################################
                    IMPORTACIONES
######################################################*/
// Estilo
import './Item.css'
import { Link } from 'react-router-dom'
// Componentes
import { useEffect, useState } from 'react'


/* ####################################################
                    LOGICA
######################################################*/
const  Item = (props) => { //Funcion constructora
    // retorno que se va a randerizar
    const [cantidadProductos, setCantidadProductos] = useState(0)

    useEffect(()=>{
        console.log(`${cantidadProductos}`)
    },[cantidadProductos])

    const {nombre, precio, stock, img, id} = props.data
    
    return (
        <div className='card_style container'>
            <div className='card'>
                <img className='card-img-top' src={img} alt=""></img>
                <div className='card-body'>
                    <div className='title_card'>
                        <h5 className='card-title title_card'>{nombre}</h5>
                        <p className='card-price'>${precio}.-</p>
                    </div>
                    <div className='product_details'>
                        <Link to={`/producto/${id}`} className='product_details_text'> Ver detalle del producto</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    
    )
}


/* ####################################################
                    EXPORTACIONES
######################################################*/
export default Item