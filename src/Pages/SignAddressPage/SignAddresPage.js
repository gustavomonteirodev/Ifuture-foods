import React from "react";
import { ChevronLeftIcon } from '@chakra-ui/icons'
import SignAddressForm from "./SignAddressForm";
import { Line, IconPosition, Title } from "./SignAddressStyles"
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../Routes/Coordinator";

const SignAddressPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <IconPosition>
      <ChevronLeftIcon w={8} h={8} onClick={() => goToHomePage(navigate)}  />
      </IconPosition>
      <Line></Line>
      <Title><h3>Meu endereço</h3></Title>
      <SignAddressForm />
    </div>
  );
};

export default SignAddressPage;