import React from "react";
import Router from "./Routes/Router";
import { ChakraProvider } from '@chakra-ui/react'
import GlobalState from "./Global/GlobalState";

function App() {
  return (
    <ChakraProvider>
      <GlobalState> 
      <Router>
      </Router>
      </GlobalState>
    </ChakraProvider>);
}
export default App;
