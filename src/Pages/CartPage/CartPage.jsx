import React, { useContext} from "react";
import { CardCart } from "../../Components/CardCart/CardCart";
import { PayCart } from "../../Components/PayCart/PayCart";
import { UserAddressCart } from "../../Components/UserAddressCart/UserAddressCart";
import { RestaurantCart } from "../../Components/RestaurantCart/RestaurantCart";
import { AlertCart } from "../../Components/AlertCart/AlertCart";
import useProtectedPage from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { Flex } from "@chakra-ui/react";
import GlobalContext from "../../Global/GlobalContext";

import BarraNavegacao from "../../Components/SearchBar/SearchBar";

function CartPage() {

  useProtectedPage()

  const { states, requests, setters } = useContext(GlobalContext);
  const { carrinho } = states;
  const { setCarrinho } = setters;

  console.log(states && states.detalhes?.restaurant)

  const restaurantData = states && states.detalhes?.restaurant
  const getProfile = useRequestData([], `${BASE_URL}/profile`);
  const Useraddress = getProfile.user?.address && getProfile.user?.address;
  const priceSum = carrinho && carrinho.map(item => item.price).reduce((prev, curr) => prev + curr, 0);

  return (
    <div> 
      {/* O alert será usado na pagina do Feed quando o pedido for confirmado */}
      {/* {AlertCart(priceSum, dadosRestautante.name)} */}

      {UserAddressCart(Useraddress)}
      {RestaurantCart(restaurantData.name, restaurantData.address, restaurantData.deliveryTime)}
      <Flex
        p="1"
        align="start"
        flexDirection="column"
        justifyContent="space-between"
      >
        {carrinho && carrinho.map((item, index) => {
          return CardCart(carrinho[index].name, carrinho[index].description, carrinho[index].price, carrinho[index].photoUrl,  carrinho[index].quantity,carrinho[index].id )
        })}
      </Flex>
      {PayCart(restaurantData.shipping, priceSum + restaurantData.shipping)}
      {BarraNavegacao(false,true,false)}
      </div>

  )
      }

export default CartPage;


