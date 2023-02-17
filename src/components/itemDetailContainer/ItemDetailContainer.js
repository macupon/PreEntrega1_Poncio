/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc} from 'firebase/firestore';
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
