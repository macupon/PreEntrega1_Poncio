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
    const { title, price, description, image, id } = props.data;
    return (
        <div className='card_style container'>
            <div className='card'>
            <img className='card-img-top card' src={image} alt=""></img>
            <div className='card-body'>
                <div className='title_card'>
                    <h5 className='card-title title_card'>{title} </h5>
                    <p className='card-price'>${price}.-</p>
                </div>
                <p className='card-text'>Tamaño: {description}cm</p>
                <div className='bloque_count'>
                    <ItemCount/>
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