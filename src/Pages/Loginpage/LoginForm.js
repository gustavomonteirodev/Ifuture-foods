import React from "react";
import { LoginStyled } from "./LoginStyles"
import useForm from "../../hooks/useForm"
import { login } from "../../services/users"
import { useNavigate } from "react-router-dom";

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
                <button>Entrar</button>
            </form>
        </LoginStyled>

    )
};

export default LoginForm; 