/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase'; 
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
        const getProducto = async () => {

            const queryRef = doc(db, "apliques", productoId); 

            const response = await getDoc(queryRef);

            const newDoc = {
                id:response.id,
                ...response.data()
                }
            //console.log(newDoc)
            setAplique(newDoc);
        
        }
        getProducto();
        },[productoId])

  
    return (
       <ItemDetail data={aplique}/>
    )
}
/* ####################################################
                    EXPORTACIONES
######################################################*/
export default ItemDetailContainer

// LLamar productos con archivo JSON
// fetch('../json_local.json')
// .then(res=>res.json())
// .then(data=>setAplique(data.apliques.find((item)=> item.id === parseInt(productoId))))


