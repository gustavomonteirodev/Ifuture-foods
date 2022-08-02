import React from "react";
import { goToHomePage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react'


function CartPage() {
  
  const navigate = useNavigate();

  return (
    <div>
      <h1>CARRINHO</h1>
      <Button colorScheme='teal' variant='solid' onClick={() => goToHomePage(navigate)}>Voltar</Button>
    </div>
  );
}

export default CartPage;