/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
        fetch('../json_local.json')
        .then(res=>res.json())
        .then(json=>{
            if(categoriaId){
                setApliques(json.apliques.filter((aplique)=> aplique.categoria === categoriaId))
            }else{
                setApliques(json.apliques)
            }
        })
        },[categoriaId])

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