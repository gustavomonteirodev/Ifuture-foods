import React from "react";
// import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
// import { goToSignUpPage } from "../../Routes/Coordinator"
function LoginPage() {
  // const navigate = useNavigate();

  return (
    <div>
      <LoginForm />
      {/* <button
        onClick={() => goToSignUpPage(navigate)}
      >Não possui conta? Cadastre-se
      </button> */}
    </div>
  );
}

export default LoginPage;
