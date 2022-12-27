/* ####################################################
                    IMPORTACIONES
######################################################*/
import './ItemListContainer.css'



/* ####################################################
                    LOGICA
######################################################*/
const  ItemListContainer = (props) => { //Funcion constructora
    // retorno que se va a randerizar
    return (
       <p>
        COMPONENTE CONTENEDOR {props.greeting}
       </p>
    )
}



/* ####################################################
                    EXPORTACIONES
######################################################*/
export default ItemListContainer