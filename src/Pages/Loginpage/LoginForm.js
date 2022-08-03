import React from "react";
import { LoginStyled } from "./LoginStyles"
import useForm from "../../hooks/useForm"
import { login } from "../../services/users"
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react'


const LoginForm = () => {

    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate)
    }


    return (
        <LoginStyled>
            <form onSubmit={onSubmitForm}>
                <p>E-mail*</p>
                <input
                    placeholder={"seuemail@email.com"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
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
                <Button colorScheme='red' type="submit" variant='solid' >Entrar</Button>

            </form>
        </LoginStyled>

    )
};

export default LoginForm; 