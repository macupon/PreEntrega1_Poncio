/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos
import { Link } from 'react-router-dom'
// Componentes
import ItemCount from '../itemCount/ItemCount'
// Estilos
import './ItemDetail.css'

// Core

/* ####################################################
                    LOGICA
######################################################*/
const  ItemDetail = (props) => { //Funcion constructora
    // retorno que se va a randerizar
    const {nombre, medida, precio, stock, img, id} = props.data
    return (
        <div className='card_style container'>
            <div className='card'>
            <img className='card-img-top card' src={img} alt=""></img>
            <div className='card-body'>
                <div className='title_card'>
                    <h5 className='card-title title_card'>{nombre} </h5>
                    <p className='card-price'>${precio}.-</p>
                </div>
                <p className='card-text'>Tamaño: {medida}cm</p>
                <div className='bloque_count'>
                    <ItemCount stock={stock}/>
                </div>
                <div className='product_details'>
                    <Link to={`/producto/${id}`} > ver detalle del producto</Link>
                </div>
                
            </div>
            </div>
        </div>
    )
}


/* ####################################################
                    EXPORTACIONES
######################################################*/
export default ItemDetail