import React from "react";
import { Router } from "./Router/Routes";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalState from "./Global/GlobalState";


const App = () => {
  return (
    <GlobalState>
      <ChakraProvider>
        
          <Router />
        
      </ChakraProvider>
    </GlobalState>
  );
};

export default App;
