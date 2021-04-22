import React , { useState } from "react";

export const CartContext = React.createContext ([])


export const CartProvider = ({children}) => {      

    const [cart, setCart] = useState ([]);

    const addItem = (newItem, newQuantity) => { 

        console.log ("hola, esta funcionando" ) 

        const prevCartItem = cart.find ( e => e.item.id === newItem.id )

        let newCart;
        let qty;
        if (prevCartItem) { newCart = cart.filter ( e => e.item.id !== newItem.id ) 
                            qty = prevCartItem.quantity + newQuantity ; }
        else {
                newCart= [...cart]
                qty = newQuantity ; 
        }                    

setCart ([...newCart, {item: newItem, quantity: qty}]       ); } 


const removeItem = (itemId) => {   const newCart = cart.filter ( e => e.item.id !== itemId ) 
    setCart (newCart) }; // remover un item del cart usando su Id

const clear = () => { setCart ([]) }; //remover todos los items  
  
   
   
const isInCart = (id) => {  const currentItem = cart.find ( e => e.item.id === id ) 

                                return currentItem ? true : false
                                                                       } 




  





return <CartContext.Provider value={ { cart, addItem, removeItem, clear, isInCart   } }  >   {children}    </CartContext.Provider>


 }

