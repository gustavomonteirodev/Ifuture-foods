import React from "react";
import { goToHomePage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>PÁGINA DE CADASTRO</h1>
      <button onClick={() => goToHomePage(navigate)}>Voltar</button>
    </div>
  );
}

export default SignUpPage;