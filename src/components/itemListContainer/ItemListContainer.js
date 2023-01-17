/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos
import { useState, useEffect } from 'react'
//Estilo
import './ItemListContainer.css'
//Componentes
import ItemList from '../itemList/ItemList'
/* ####################################################
                    LOGICA 
######################################################*/
const  ItemListContainer = (props) => { //Funcion constructora
    const [apliques, setApliques] = useState([])
    useEffect(()=>{
        fetch('../json_local.json')
        .then(res=>res.json())
        .then(json=>setApliques(json.apliques))
        },[])

console.log(apliques)
    return (
    
    <div>
     
        <div className='fondo_cards'>
        <ItemList apliques={apliques}/>
        </div>
    </div>
    )
}
/* ####################################################
                    EXPORTACIONES
######################################################*/
export default ItemListContainer