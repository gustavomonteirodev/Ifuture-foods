import React from "react";
import Router from "./Routes/Router";
import { ChakraProvider } from '@chakra-ui/react'
import { CartProvider } from './providers/CartProvider'
import GlobalState from "./Global/GlobalState";


function App() {
// aqui adicionarei o global Context

  return (
       

    <ChakraProvider>
      {/* <CartProvider> */}
      <GlobalState> 
      <Router>
        <h1>PROJETO LABEFOOD - GRUPO 3</h1>
      </Router>
      {/* </CartProvider> */}
      </GlobalState>
    </ChakraProvider>);
}

export default App;
