/* ####################################################
                    IMPORTACIONES
######################################################*/
// Estilo
import './Item.css'
// Componentes
import ItemCount from '../itemCount/ItemCount'


/* ####################################################
                    LOGICA
######################################################*/
const  Item = (props) => { //Funcion constructora
    // retorno que se va a randerizar
    const {nombre, medida, precio, stock} = props.data
    return (
       <div>
        <p>{nombre}</p>
        <p>{medida}</p>
        <p>{precio}</p>
        <ItemCount stock={stock}/>
       </div>
    )
}


/* ####################################################
                    EXPORTACIONES
######################################################*/
export default Item