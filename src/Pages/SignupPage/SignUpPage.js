import React from "react";
import { goToHomePage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react'


function SignUpPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>PÁGINA DE CADASTRO</h1>
      <Button colorScheme='teal' variant='solid' onClick={() => goToHomePage(navigate)}>Voltar</Button>
    </div>
  );
}

export default SignUpPage;