import axios from "axios"
import { BASE_URL } from "../constants/url"
import { useState } from "react"



// Get Active Order -> Pedidos em andamentos, vou usar para notificar '/fourFoodA/active-order'
// Get Full Address -> Pega onde o usuario mora, vou precisar. '/fourFoodA/profile/address'
// GetOrders History -> Parte final serve para saber se todos os pedidos foram entregues. '/fourFoodA/orders/history'

// Get Restaurant Detail -> Pega todos as informações do restaurante,
// vou precisar desse para duas coisas, info do restaurante e info dos alimentos. '/fourFoodA/restaurants/${restaurantId}'


// Feito

export const GetHook = (url) => {
  
    const [data , setData] = useState({})  

      axios
        .get(
          `${BASE_URL}${url}`, { headers: { Authorization: window.localStorage.getItem("token") } }
        )
        .then((response) => {
            setData(response.data)
        })
        .catch((err) => {
          console.log(err);
        });
  
  
    return data
}