import { useContext,  createContext, useState, useEffect } from "react";

// 1 Crear el Contexto
// 2 Exportar el Contexto

export const CartContext = createContext([ ])

//3 Crear Funcion para usar el contexto
//4 Podemos definirlo como un hook personalizado
//5 Exporta la FUNCION que almacena el hook useContext

export const useCartContext = () => {return useContext(CartContext)}

//6 Crear el componente del contexto proveedor 
const CartProvider = ({children}) => {
    
    // Estado de mi CartProvider
    const [itemsCarrito, setItemsCarrito] = useState(()=>{
        const carritoRecuperado = JSON.parse(localStorage.getItem("ultimoCarrito"));
        return carritoRecuperado || ""
    })
    
    // nuevo estado para el OrderID
    const [CartOrderID, setCartOrderID] = useState()
    const upDateOrderId = (newOrder) =>{
        setCartOrderID(newOrder)
    }

    // ///////////////////////////////////////
    // Funciones de mi CartProvider

    const isInCart = (id)=>{
        const elementExists = itemsCarrito.some((elemento)=>elemento.id === id);
        return elementExists;
    }

    const addItem = (item, quantity)=>{
        const newList = [...itemsCarrito];
        //verifico si el item existe en el array
        // si existe, actualice la propiedad quantity de ese item
        // const newList = isInCart(item);
        if (isInCart(item.id)) {
            const itemIndex = itemsCarrito.findIndex(element => element.id === item.id);
            newList[itemIndex].quantity = newList[itemIndex].quantity + quantity;
            newList[itemIndex].totalPrice = newList[itemIndex].quantity * newList[itemIndex].precio;

            setItemsCarrito(newList)

        } else{
        //si no existe, agregue el item al listado
            const newItem ={...item, quantity:quantity, totalPrice: quantity*item.precio} 
            const newList = [...itemsCarrito];
            newList.push(newItem);
            setItemsCarrito(newList);
        }

    
    
    }
    console.log(itemsCarrito)

    // Guardamos en local storage
    useEffect(()=>{
        localStorage.setItem("ultimoCarrito", JSON.stringify(itemsCarrito))
        },[itemsCarrito])
        
    
    
    const removeItem = (id) => {
        const newArray = [...itemsCarrito].filter(e => e.id !== id)
        setItemsCarrito(newArray)
    }

    const clearCart = () => {
        setItemsCarrito ([])
    }

    const getTotalProducts = ()=>{
        const totalProducts = itemsCarrito.reduce((acc,item)=>acc + item.quantity,0);
        return totalProducts;
    }

    const itemAmount = () =>{
        return itemsCarrito.length
    }

    return(
        <CartContext.Provider value={{itemsCarrito, isInCart, addItem, itemAmount, clearCart, removeItem, getTotalProducts, CartOrderID, setCartOrderID } }>
            {children}
        </CartContext.Provider>
    )
}

export  default  CartProvider;

 // /////////////////////////////////////////////////////////////////////
    // const listaDeCarrito = () => {
    //     return itemsCarrito
    // }
    
    

    

    // const addItem = (item, quantity) => {
    //     // Ojo que item es todo el aplique con todas las propiedades (categoria, nombre, medida, etc...)
    //     // Miro si el item ya existia con la función checkSiExiste, si no encuentra nada no retorna
    //     // nada y por tanto no entra en el "if" y añade el item y cantidad a itemsCarrito directamente
    //     const ItemQueYaExistia = checkSiExiste(item)
    //     // si la función checkSiExiste encuentra un item igual entonces escupe un ItemQueYaExistia y entra en el siguiente if
    //     if (ItemQueYaExistia){
    //         console.log("ya existia")
    //         // coger cantidad que había de este aplique y sumarle la nueva cantidad del mismo aplique
    //         quantity = quantity + ItemQueYaExistia.quantity
    //         // busco el aplique que ya existia en "itemsCarrito" y lo elimino
    //         // lo busco con el id y me quedo con el indice, y luego elimino usando:
    //         // UnaArray.splice(2,1) - que hace "en la posición 2 de la "UnaArray" elimino 1 elemento"
    //         setItemsCarrito(
    //             itemsCarrito.splice(
    //                 itemsCarrito.findIndex((element)=>element.item.id ===item.id),
    //                 1
    //             )
    //         )
    //     }
    //     // Ahora que lo he borrado lo añado con la cantidad correcta
    //     setItemsCarrito([...itemsCarrito, {item, quantity}])

    //     console.log(itemsCarrito)
    //     // console.log([...itemsCarrito, {item, quantity}])
    // }

    // Esta funcion encuentra
    // const checkSiExiste = (item) =>{
    //     return itemsCarrito.find((element)=> element.item === item)
    // }

    // const isInCart = (id)=>{
    //     const elementExists = itemsCarrito.some((elemento)=>elemento.id === id);
    //     return elementExists;
    // }

    // const agregarAlCarrito = (data) => {
    //     if(validaritemoExistente(data.id)){
    //         alert("el item ya esta en el carrito")
    //     } else {
    //         const listaActual = itemsCarrito
    //     listaActual.push(data)
    //     setItemsCarrito(listaActual)
    //     console.log(itemsCarrito);
    //     } 
    // }

    

   

    // const validaritemExistente = (id) => {
    //     if(itemsCarrito.find(e=> e.id === id)){
    //         return true
    //     }else {
    //         return false
    //     }
    // }
    // Render de mi CartProvider
