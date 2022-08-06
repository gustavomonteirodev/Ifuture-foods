import React from "react";
import Router from "./Routes/Router";
import { ChakraProvider } from '@chakra-ui/react'
import { CartProvider } from './providers/CartProvider'
import GlobalState from "./Global/GlobalState";
import { TestandoContext } from "./Pages/CartPage/TestandoContext";



function App() {
// aqui adicionarei o global Context

  return (
       

    <ChakraProvider>
      {/* <TestandoContext> */}
      <GlobalState> 
      <Router>
        <h1>PROJETO LABEFOOD - GRUPO 3</h1>
      </Router>
      
      {/* </TestandoContext> */}
      </GlobalState>
    </ChakraProvider>);
}

export default App;
