/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos
// import { doc, QuerySnapshot } from 'firebase/firestore';
// import { useEffect } from 'react';
// import { getFirestore } from '../../services/firebase.js';
// Estilos
import './Home.css'

// Componentes

// Core

/* ####################################################
                    LOGICA
######################################################*/
const  Home = () => { //Funcion constructora
    // retorno que se va a randerizar
// useEffect (()=>{

// const db = getFirestore()
// const apliques = db.collection('apliquesMarian')

// const apliquesFiltrados = apliques.where('stock','>',0)

// apliquesFiltrados.get().then((querySnapshot) => {
// if(querySnapshot.size===0){
//     console.log("Error");
// }
// console.log(querySnapshot.doc.map({...doc.data(), id:doc.id}));
// })

// },[])

    return (
       <p>
         Home
       </p>
    )
}


/* ####################################################
                    EXPORTACIONES
######################################################*/
export default Home