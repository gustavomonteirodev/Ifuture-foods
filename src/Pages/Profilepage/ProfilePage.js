import React from "react";
import { goToLastPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>PERFIL DO USUÁRIO</h1>
      <button onClick={() => goToLastPage(navigate)}>Voltar</button>
    </div>
  );
}

export default ProfilePage;