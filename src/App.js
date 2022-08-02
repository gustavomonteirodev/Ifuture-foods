import React from "react";
import Router from "./Routes/Router";
import { ChakraProvider } from '@chakra-ui/react'
import { CartProvider } from './providers/CartProvider'


function App() {
// aqui adicionarei o global Context

  return (
    <ChakraProvider>
      <CartProvider>
      <Router>
        <h1>PROJETO LABEFOOD - GRUPO 3</h1>
      </Router>
      </CartProvider>
    </ChakraProvider>);
}

export default App;
