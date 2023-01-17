/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos
// import { useState } from 'react'

// import "bootstrap/dist/css/bootstrap.min.css"

//Estilo
import './ItemListContainer.css'
//Componentes
import ItemList from '../itemList/ItemList'


/* ####################################################
                    LOGICA 
######################################################*/
const  ItemListContainer = (props) => { //Funcion constructora
    // const [apliques, setApliques] = useState([])

    // useEffect(()=>{
    //     fetch('../json_local.json')
    //     .then(res=>res.json())
    //     .then(apliques=>setApliques(apliques.find((item)=> item.id === productoId)))
    //     },[productoId])

    // const [category, setCategory] = useState("all")

    // const categoryPersonajes = () => {
    //     setCategory("Personajes")
    // }
    // const categoryPersona = () => {
    //     setCategory("Persona")
    // }
    // const categoryDisney = () => {
    //     setCategory("Disney")
    // }
    // const categoryAll = () => {
    //     setCategory("all")
    // }


    return (
    
    <div>
        {/* <ul className='nav justify-content-end'>
            <li className='nav-item'>
                <button className='nav-link button_cat' onClick={categoryPersonajes}>Personajes</button>
             </li>
            <li className='nav-item'>
                <button className='nav-link button_cat' onClick={categoryPersona}>Persona</button>
            </li>
            <li className='nav-item'>
                <button className='nav-link button_cat' onClick={categoryDisney}>Disney</button>
            </li>
            <li className='nav-item'>
                <button className='nav-link button_cat' onClick={categoryAll}>Todos</button>
            </li>
         </ul> */}
        <div className='fondo_cards'>
        <ItemList />
        </div>
    </div>
    )
}

// categoriaName={category}

/* ####################################################
                    EXPORTACIONES
######################################################*/
export default ItemListContainer