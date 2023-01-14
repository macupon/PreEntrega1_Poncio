/* ####################################################
                    IMPORTACIONES
######################################################*/

// Esilo
import './ItemList.css'
// Componentes
import Item from '../item/Item'


/* ####################################################
                    LOGICA
######################################################*/
const  ItemList = (props) => { //Funcion constructora
    // Llamada a array de objs
    // Iterar array de objs
    // Objs


    const listaApliques = [
        {
           id:1,
           nombre:"Coco",
           medida:"1x1",
           precio: 3000,
           categoria:"Disney",
           stock:"4"

        },  {
            id:2,
            nombre:"Guason",
            medida:"1x1",
            precio:3000,
            categoria:"Persona",
            stock:"4"
 
         },  {
            id:3,
            nombre:"Mario",
            medida:"1x1",
            precio:3000,
            categoria:"Personajes",
            stock:"4"
 
         },  {
            id:4,
            nombre:"Simba",
            medida:"1x1",
            precio:3000,
            categoria:"Disney",
            stock:"4"
 
         },  {
            id:5,
            nombre:"Goku",
            medida:"1x1",
            precio:3000,
            categoria:"Personajes",
            stock:"4"
 
         },  {
            id:6,
            nombre:"Malefica",
            medida:"1x1",
            precio:3000,
            categoria:"Disney",
            stock:"4"
 
         },  {
            id:7,
            nombre:"Maradona",
            medida:"1x1",
            precio:3000,
            categoria:"Persona",
            stock:"4"
 
         },  {
            id:8,
            nombre:"Krosti",
            medida:"1x1",
            precio:3000,
            categoria:"Personajes",
            stock:"4"
 
         },  {
            id:9,
            nombre:"Snoopi",
            medida:"1x1",
            precio:3000,
            categoria:"Personajes",
            stock:"4"
 
         },  {
            id:10,
            nombre:"Monster",
            medida:"1x1",
            precio:3000,
            categoria:"Disney",
            stock:"4"
 
         }
    ]
    
        let apliquesRenderizables = []
    // const respuesta = new Promise ((resolve, reject)=>{
        if (props.categoriaName === "all") {
            apliquesRenderizables = listaApliques.map( apliques => <Item key={apliques.id} id={"producto" + apliques.id} data={apliques} />)
        }else {
            const apliquesPorCategoria = listaApliques.filter(e=> e.categoria === props.categoriaName)
            apliquesRenderizables = apliquesPorCategoria.map( apliques => <Item key={apliques.id} id={"producto" + apliques.id} data={apliques} />)
        }
        
    // })
    // respuesta.then((data)=>{setRenderizable(data)})


    // setTimeout ( () => {const listaApliquesRenderizables = 
    // setRenderizable(listaApliquesRenderizables)
    // },3000)
        
    
    
        return (
       <div>
        {apliquesRenderizables}
       </div>
    ) 
}


/* ####################################################
                    EXPORTACIONES
######################################################*/
export default ItemList