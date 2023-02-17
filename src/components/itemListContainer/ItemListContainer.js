/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase';

//Estilo
import './ItemListContainer.css'
//Componentes
import ItemList from '../itemList/ItemList'
/* ####################################################
                    LOGICA 
######################################################*/
const  ItemListContainer = (props) => { //Funcion constructora
    const [apliques, setApliques] = useState([])
    const {categoriaId}= useParams()

    useEffect(()=>{
        const getData = async() => {
            // 1.Crear consulta a base de datos, "queryRef" como referencia para traer los documentos
            const queryRef = categoriaId ? query(collection (db, "apliques"), 
                             where("categoria","==",categoriaId)) : collection (db, "apliques");

            // 2.Hacer consulta/peticion a la base de datos (proceso asincrono, entonces usamos await)
            const response = await getDocs(queryRef);

            const docsInfo = response.docs.map(doc=>{
                const newDoc = {
                    id:doc.id,
                    ...doc.data()
                }
                return newDoc
            });
            console.log(docsInfo)

            setApliques(docsInfo)

        }
        getData();

        },[categoriaId])



    return (
    
    <div>
     
        <div className='fondo_cards'>
        <ItemList apliques={apliques} />
        </div>
    </div>
    )
}
/* ####################################################
                    EXPORTACIONES
######################################################*/
export default ItemListContainer