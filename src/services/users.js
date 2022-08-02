import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToHomePage } from "../Routes/Coordinator"

export const login = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token) 
            clear()
            goToHomePage(navigate)
        })
        .catch((err) => console.log(err.response.data.message))
}

export const signUp = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/signUp`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToHomePage(navigate)
        })
        .catch((err)=> alert(err.response.data.message))
}


