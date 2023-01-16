/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos
import { useState } from 'react'

// import "bootstrap/dist/css/bootstrap.min.css"

//Estilo
import './ItemListContainer.css'
//Componentes
import ItemList from '../itemList/ItemList'


/* ####################################################
                    LOGICA 
######################################################*/
const  ItemListContainer = (props) => { //Funcion constructora

   
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
        <ul className='nav justify-content-end'>
            <li className='nav-item'>
                <button className='nav-link button_cat' onClick={categoriaPersonajes}>Personajes</button>
             </li>
            <li className='nav-item'>
                <button className='nav-link button_cat' onClick={categoriaPersona}>Persona</button>
            </li>
            <li className='nav-item'>
                <button className='nav-link button_cat' onClick={categoriaDisney}>Disney</button>
            </li>
            <li className='nav-item'>
                <button className='nav-link button_cat' onClick={categoriaAll}>Todos</button>
            </li>
         </ul>
        <div className='fondo_cards'>
        <ItemList categoriaName={categoria}/>
        </div>
    </div>
    )
}



/* ####################################################
                    EXPORTACIONES
######################################################*/
export default ItemListContainer