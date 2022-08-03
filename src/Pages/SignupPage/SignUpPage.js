import React from "react";
import { goToHomePage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from '@chakra-ui/react'
import SignUpForm from "./SignUpForm";
import RedLogo from "../../assets/RedLogo.png"
import { SignUpContainer } from "./SignUpStyles"

function SignUpPage() {
  const navigate = useNavigate();

  return (
    <SignUpContainer>
      <Stack direction='column' spacing={-4} align='center'></Stack>
      <img src={RedLogo} alt='logomarca - ifuture vermelha'/>
      <h3>Cadastrar</h3>
      <SignUpForm />
      <Button colorScheme='teal' variant='solid' onClick={() => goToHomePage(navigate)}>Voltar</Button>
    </SignUpContainer>
  );
}

export default SignUpPage;