import {CartContext} from '../Contexts/CartContext'
import { useState } from 'react'

export const CartProvider = (props) =>{
  //Recebemos via props o componente que será
  //filgo do nosso provider. Sendo assim,
  //ele vai herdar os valores que meu provider oferta. 

  // O estado do carrinho
    const[cart,setCart] = useState(['teste']);

  // função extraída lá do productScreen.js 
  //Podemos colocar nossas funções aqui
  //Requisições e afins

    const addToCart = (product) => {
        const newArray = [...cart, product]
        setCart(newArray)
      }
// no retorno do provider definimos os valores que serão
// retornados, nesse caso um objeto com cart,setCart
// addToCart
    return <CartContext.Provider value ={cart}>

{/* {Aqui adicionamos quem será o filho do nosso provider.
Ele vem carregado pela props} */}

        {props.children}
        
        </CartContext.Provider>

}