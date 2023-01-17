/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// Estilos
import './ItemDetailContainer.css'
// Componentes
import ItemDetail from '../itemDetail/ItemDetail'
/* ####################################################
                    LOGICA
######################################################*/
const  ItemDetailContainer = () => {
    const [aplique, setAplique] = useState({})
     const { productoId } = useParams ()
    //Funcion constructora
   useEffect(()=>{
        fetch('../json_local.json')
        .then(res=>res.json())
        .then(data=>setAplique(data.apliques.find((item)=> item.id === parseInt(productoId))))
},[productoId])
  
    return (
       <ItemDetail data={aplique}/>
    )
}
/* ####################################################
                    EXPORTACIONES
######################################################*/
export default ItemDetailContainer