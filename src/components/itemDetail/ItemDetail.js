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
    const { nombre, precio, medida, img, stock} = props.data;
    return (
        <div className='datail_card'>
            <div className='card_style tam_card_detail container'>
                <div className='card'>
                <img className='card-img-top card' src={img} alt=""></img>
                <div className='card-body'>
                    <div className='title_card'>
                        <h5 className='card-title title_card'>{nombre} </h5>
                        <p className='card-price'>${precio}.-</p>
                    </div>
                    <p className='card-text'>Tamaño: {medida} cm</p>
                    <div className='bloque_count'>
                        <ItemCount stock={stock}/>
                    </div>
                    <div className='product_details'>
                        <Link to="/productos" > volver a mis productos</Link>
                    </div>
                    
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