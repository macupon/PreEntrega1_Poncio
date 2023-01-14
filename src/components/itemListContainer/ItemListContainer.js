/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos
import { useState } from 'react'

//Estilo
import './ItemListContainer.css'
//Componentes
import ItemList from '../itemList/ItemList'



/* ####################################################
                    LOGICA
######################################################*/
const  ItemListContainer = (props) => { //Funcion constructora
    // retorno que se va a randerizar
    const [categoria, setCategoria] = useState("all")

    const categoriaPersonajes = () => {
        setCategoria("Personajes")
    }
    const categoriaPersona = () => {
        setCategoria("Persona")
    }
    const categoriaDisney = () => {
        setCategoria("Disney")
    }
    const categoriaAll = () => {
        setCategoria("all")
    }


    return (
       <div>
        <p>Item List container</p>
        <button onClick={categoriaPersonajes}>Personajes</button>
        <button onClick={categoriaPersona}>Persona</button>
        <button onClick={categoriaDisney}>Disney</button>
        <button onClick={categoriaAll}>Todos</button>

        <ItemList categoriaName={categoria}/>
       </div>
    )
}



/* ####################################################
                    EXPORTACIONES
######################################################*/
export default ItemListContainer