/* ####################################################
                    IMPORTACIONES
######################################################*/
import { useState } from 'react'
// import { useEffect, useState } from 'react'
// Esilo
import './ItemList.css'
// Componentes
import Item from '../item/Item'
// import imagen1 from '../../assets/img/coco.jpg'
// import imagen2 from '../../assets/img/goku.jpg'
// import imagen3 from '../../assets/img/guason.jpg'
// import imagen4 from '../../assets/img/krosti.jpg'
// import imagen5 from '../../assets/img/leon.jpg'
// import imagen6 from '../../assets/img/malefica.jpg'
// import imagen7 from '../../assets/img/maradona.jpg'
// import imagen8 from '../../assets/img/mario.jpg'
// import imagen9 from '../../assets/img/monster.jpg'
// import imagen10 from '../../assets/img/snoopy.jpg'


/* ####################################################
                    LOGICA
######################################################*/
const  ItemList = (props) => { //Funcion constructora
    // Llamada a array de objs
    // Iterar array de objs
    // Objs


    // const listaApliques = [
    //     {
    //        id:1,
    //        nombre:"Coco",
    //        descripcion:"1x1",
    //        precio: 3000,
    //        categoria:"Disney",
    //        stock:"4",
    //        img: `${imagen1}`

    //     },  {
    //         id:2,
    //         nombre:"Goku",
    //         medida:"1x1",
    //         precio:3000,
    //         categoria:"Personajes",
    //         stock:"4",
    //         img: `${imagen2}`
 
    //      },  {
    //         id:3,
    //         nombre:"Guason",
    //         medida:"1x1",
    //         precio:3000,
    //         categoria:"Personajes",
    //         stock:"4",
    //         img: `${imagen3}`
 
    //      },  {
    //         id:4,
    //         nombre:"Krosti",
    //         medida:"1x1",
    //         precio:3000,
    //         categoria:"Personaje",
    //         stock:"4",
    //         img: `${imagen4}`
 
    //      },  {
    //         id:5,
    //         nombre:"Simba",
    //         medida:"1x1",
    //         precio:3000,
    //         categoria:"Disney",
    //         stock:"4",
    //         img: `${imagen5}`
 
    //      },  {
    //         id:6,
    //         nombre:"Malefica",
    //         medida:"1x1",
    //         precio:3000,
    //         categoria:"Disney",
    //         stock:"4",
    //         img: `${imagen6}`
 
    //      },  {
    //         id:7,
    //         nombre:"Maradona",
    //         medida:"1x1",
    //         precio:3000,
    //         categoria:"Persona",
    //         stock:"4",
    //         img: `${imagen7}`
 
    //      },  {
    //         id:8,
    //         nombre:"Mario",
    //         medida:"1x1",
    //         precio:3000,
    //         categoria:"Personajes",
    //         stock:"4",
    //         img: `${imagen8}`
 
    //      },  {
    //         id:9,
    //         nombre:"Monster",
    //         medida:"1x1",
    //         precio:3000,
    //         categoria:"Personajes",
    //         stock:"4",
    //         img: `${imagen9}`
 
    //      },  {
    //         id:10,
    //         nombre:"Snoopy",
    //         medida:"1x1",
    //         precio:3000,
    //         categoria:"Personajes",
    //         stock:"4",
    //         img: `${imagen10}`
 
    //      }
    // ]

    const [apliques, setApliques] = useState([])
   

    // useEffect(()=>{
        fetch('../json_local.json')
        .then(res=>res.json())
        .then(json=>setApliques(json.apliquesPorCategoria.map( apliques => <Item key={apliques.id} id={"producto" + apliques.id} data={apliques} />)))
        // },[])
    
        
    // const respuesta = new Promise ((resolve, reject)=>{
        // if (props.categoriaName === "all") {
        //     apliquesRenderizables = listaApliques.map( apliques => <Item key={apliques.id} id={"producto" + apliques.id} data={apliques} />)
        // }else {
        //     const apliquesPorCategoria = listaApliques.filter(e=> e.categoria === props.categoriaName)
        //     apliquesRenderizables = apliquesPorCategoria.map( apliques => <Item key={apliques.id} id={"producto" + apliques.id} data={apliques} />)
        // }
        
    // })
    // respuesta.then((data)=>{setRenderizable(data)})


        
    
    
        return (
       <div className='grids'>
        
        {apliques}
        
       </div>
    ) 
}


/* ####################################################
                    EXPORTACIONES
######################################################*/
export default ItemList