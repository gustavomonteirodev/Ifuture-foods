import React from "react";
import { goToLastPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";
import {UpdateProfile} from '../../services/users'
import useForm from '../../hooks/useForm'

function ProfilePage() {
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "" })
    

    const onSubmitForm = (event) => {
        event.preventDefault()
        UpdateProfile(form, clear, navigate)
    }





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

      <Flex>
      <form onSubmit={onSubmitForm}>
      <input placeholder="seuemail@email.com" type={'email'}name={"email"} value={form.email}  onChange={onChange} />
      <input placeholder="Nome" type={'text'} name={"name"} value={form.name}  onChange={onChange} />
      <input placeholder="CPF" type={'number'} name={"cpf"} value={form.cpf}  onChange={onChange} />
      <Button colorScheme='red' type="submit" variant='solid' >Entrar</Button>
      </form>

        
      </Flex>
    </div>
  );
}

export default ProfilePage;
