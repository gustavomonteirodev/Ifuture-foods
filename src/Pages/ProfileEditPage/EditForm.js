import React from "react";
// import { goToLastPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { Button} from "@chakra-ui/react";
import { UpdateProfile } from "../../services/users";
import useForm from "../../hooks/useForm";
import { SignUpStyled } from "../SignupPage/SignUpStyles"

function EditForm() {
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    UpdateProfile(form, clear, navigate);
  };

  return (
    <SignUpStyled >
      <form onSubmit={onSubmitForm}>
      <p>email*</p>
        <input
          placeholder="seuemail@email.com"
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
        />
        <p>Nome*</p>
        <input
          placeholder="Nome"
          type={"text"}
          name={"name"}
          value={form.name}
          onChange={onChange}
          required
        />
        <p>CPF*</p>
        <input
          placeholder="CPF"
          type={"number"}
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          required
        />
        <Button colorScheme="red" type="submit" variant="solid">
         Alterar
        </Button>
      </form>
    </SignUpStyled >
  );
}

export default EditForm;
