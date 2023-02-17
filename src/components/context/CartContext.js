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
        <CartContext.Provider value={{itemsCarrito, isInCart, addItem, itemAmount, clearCart, removeItem, getTotalProducts} }>
            {children}
        </CartContext.Provider>
    )
}

export  default  CartProvider;