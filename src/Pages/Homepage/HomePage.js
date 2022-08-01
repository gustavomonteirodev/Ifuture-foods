import React from "react";
import { goToLoginPage } from "../../Routes/Coordinator";
import { goToCartPage } from "../../Routes/Coordinator";
import {useNavigate} from "react-router-dom"

const HomePage =()=> {
    const navigate = useNavigate()

    return (
        <div>
            <h1>HOME PAGE</h1>
        <button onClick={()=> goToLoginPage(navigate)}>Login</button>
        <button onClick={()=> goToCartPage(navigate)}>Carrinho</button>
        </div>
    )
}

export default HomePage