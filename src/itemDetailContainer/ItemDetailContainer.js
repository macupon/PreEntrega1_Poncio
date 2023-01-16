/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// Estilos
import './ItemDetailContainer.css'

// Componentes
import ItemDetail from '../components/itemDetail/ItemDetail'

// Core

/* ####################################################
                    LOGICA
######################################################*/
const  ItemDetailContainer = () => {
    const [apliques, setApliques] = useState([])
    const { productoId } = useParams ()
    //Funcion constructora
    
    // useEffect(()=>{

    //     fetch(`https://fakestoreapi.com/products/${productoId}`)
    //         .then(res=>res.json())
    //         .then(apliques=>setApliques(<ItemDetail key={apliques.id} id={"producto" + apliques.id} data={apliques}/>))
    // },[productoId])
    // retorno que se va a randerizar
    // useEffect (() => {
    //     apliques=>setApliques(<ItemDetail key={apliques.id} id={"producto" + apliques.id} data={apliques}/>)
    // },[productoId])
    return (
       <p>
        {apliques}
        ItemDetailContainer
       </p>
    )
}


/* ####################################################
                    EXPORTACIONES
######################################################*/
export default ItemDetailContainer