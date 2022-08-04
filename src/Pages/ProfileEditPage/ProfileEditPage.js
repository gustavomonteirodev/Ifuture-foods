import React from "react";
import { goToLastPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { Button} from "@chakra-ui/react";

import EditForm from "./EditForm";

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>PERFIL DO USUÁRIO</h1>
      <Button
        colorScheme="teal"
        variant="solid"
        onClick={() => goToLastPage(navigate)}
      >
        Voltar
      </Button>
      <EditForm />
    </div>
  );
}

export default ProfilePage;
