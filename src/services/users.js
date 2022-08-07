import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToHomePage, goToSignAddress } from "../Routes/Coordinator"

export const login = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToHomePage(navigate)
        })
        .catch((err) => alert(err.response.data.message))
}
export const signUp = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/signUp`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            alert("usuário Cadastrado com sucesso!")
            goToSignAddress(navigate);
        })
        .catch((err) => alert(err.response.data.message))
}
export const signAddres = (body, clear, navigate) => {
    axios.put(`${BASE_URL}/address`, body, {
        headers: {
            auth: localStorage.getItem("token"),
        },
    })
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            clear()
            goToHomePage(navigate)
        })
        .catch((err) => alert(err.response.data.message,))
}
export const UpdateProfile = (body, clear) => {
    axios.put(`${BASE_URL}/profile`, body, {
        headers: {
            auth: localStorage.getItem("token"),
        },
    })
        .then(() => {
            alert("Alteração realizada")
            clear()
        })
        .catch((err) => alert(err.response.data.message,))
}
export const confirmingPurchase = async (body, id) => {
    return axios.post(`${BASE_URL}/restaurants/${id}/order`, body, {
        headers: {
            auth: localStorage.getItem("token"),
        },
    })
}