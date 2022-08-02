import React from "react";
import { goToLoginPage } from "../../Routes/Coordinator";
import { goToCartPage } from "../../Routes/Coordinator";
import {useNavigate} from "react-router-dom"
import { Button } from '@chakra-ui/react'


const HomePage =()=> {
    const navigate = useNavigate()

    return (
        <div>
            <h1>HOME PAGE</h1>


        <Button colorScheme='teal' variant='solid' onClick={()=> goToLoginPage(navigate)}>Login</Button>
        <Button  colorScheme='teal' variant='outline' onClick={()=> goToCartPage(navigate)}>Carrinho</Button>

        </div>
    )
}

export default HomePage