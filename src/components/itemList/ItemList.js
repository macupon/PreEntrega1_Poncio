/* ####################################################
                    IMPORTACIONES
######################################################*/
// Esilo
import './ItemList.css'
// Componentes
import Item from '../item/Item'
/* ####################################################
                    LOGICA
######################################################*/
const  ItemList = (props) => { //Funcion constructora
        return (
       <div className='grids'> 
            {props.apliques.map((aplique)=><Item key={aplique.id} data={aplique}/>)}
       </div>
    ) 
}
/* ####################################################
                    EXPORTACIONES
######################################################*/
export default ItemList