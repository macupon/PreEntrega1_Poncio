/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos

// Estilos
import { useEffect, useState } from 'react'
import './Loader.css'

// Componentes

// Core

/* ####################################################
                    LOGICA
######################################################*/
const  Loader = () => { //Funcion constructora
    // retorno que se va a randerizar

    const [cargando, setCargando] = useState()

    useEffect(()=>{

        setTimeout(()=>{
            setCargando(false)
        },5000)       
    },[])


    return (
       <p>
        Loader
       </p>
    )
}


/* ####################################################
                    EXPORTACIONES
######################################################*/
export default Loader