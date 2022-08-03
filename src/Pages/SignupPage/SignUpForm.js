import React from "react";
import { SignUpStyled } from "./SignUpStyles"
import useForm from "../../hooks/useForm"
import { signUp } from "../../services/users"
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react'

const SignUpForm = () => {

    const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "", password: "", password2:"" })
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        if(form.password === form.password2){
            signUp(form, clear, navigate)
        } else {
            alert("As senhas informadas não são iguais")
        }
    }

    return (
        <SignUpStyled>
            <form onSubmit={onSubmitForm}>
                <p>Name*</p>
                <input
                    placeholder={"Nome e Sobrenome"}
                    type={"name"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    autoFocus
                    required
                />
                <p>Email*</p>
                <input
                    placeholder={"email@email.com"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <p>CPF*</p>
                <input
                    placeholder={"000.000.000-00"}
                    type={"name"}
                    name={"cpf"}
                    value={form.cpf}
                    onChange={onChange}
                    required
                />
                <p>Senha*</p>
                <input
                    placeholder={"Mínimo 6 caracters"}
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <p>Confirmar*</p>
                <input
                    placeholder={"Confirme a senha anterior"}
                    type={"password"}
                    name={"password2"}
                    value={form.password2}
                    onChange={onChange}
                    required
                />
                <Button colorScheme='red' type="submit" variant='solid'>Cadastrar</Button>
            </form>
        </SignUpStyled>

    )
};

export default SignUpForm; 