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
                <p>EMAIL</p>
                <input
                    placeholder={"seuemail@email.com"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <p>PASSWORD</p>
                <input
                    placeholder={"********"}
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <Button colorScheme='teal' variant='solid' >Entrar</Button>
            </form>
        </LoginStyled>

    )
};

export default LoginForm; 