import axios from "axios"
import { BASE_URL } from "../constants/url"

// Get Full Address -> Pega onde o usuario mora, vou precisar.

// Get Restaurant Detail -> Pega todos as informações do restaurante,
// vou precisar desse para duas coisas, info do restaurante e info dos alimentos.

// POST -> Place Order -> Pega o id da comida, quantidade e forma de pagamento, tenho
// que usalo no final de todas as compras e soma todo os valores.

// Get Active Order -> Pedidos em andamentos, vou usar para notificar 

// GETOrders History -> Parte final serve para saber se todos os pedidos foram entregues.



// Estou fazendo ainda  
export const FullAddress = (paginaAtual) => {
  
    const [getTripsList, setGetTripsList] = useState([])
  
    useEffect(() => {
  
      axios
        .get(
          `${BASE_URL}/posts?page=${paginaAtual}&size=${8}`, { headers: { Authorization: window.localStorage.getItem("token") } }
        )
        .then((response) => {
          setGetTripsList(response.data)
        })
        .catch((err) => {
          console.log(err);
        });
  
    }, [paginaAtual])
  
    return getTripsList
}