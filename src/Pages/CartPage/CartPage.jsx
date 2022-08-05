import React, { useContext, useState } from "react";
import { CardChakara } from "../../Components/CardCartChakara/CardChakara";
import { PayChakara } from "../../Components/PayChakara/PayChakara";
import { UserAddressChakara } from "../../Components/UserAddressChakara/UserAddressChakara";
import { RestaurantChakara } from "../../Components/RestaurantChakara/RestaurantChakara";
import { CartContext } from "../../Contexts/CartContext";
import { AlertChakara } from "../../Components/AlertChakara/AlertChakara";

import { BASE_URL } from "../../constants/url";

import useRequestData from "../../hooks/useRequestData";
import { Flex } from "@chakra-ui/react";
// import useUnprotectedPage from "../../hooks/useUnprotectedPage";

import BarraNavegacao from "../../Components/SearchBar/SearchBar";

function CartPage() {



  // useUnprotectedPage();

  //  Todos esses dados seram substituidos pelo context 
  const teste = useContext(CartContext)

  // console.log('ta indooo', teste)



  const dadosRestautante = {

    'name': 'Bullguer Vila Madalena',
    'address': 'R.Fradique Coutinho 1136 - Vila Madalena',
    'deliveryTime': '30 - 45 min'
  }

  const cardRestaurante = [
    {
      "id": "0ydYFzfx2J9mbtGIGxvC",
      "price": 62.5,
      "category": "Refeição",
      "name": "Super wings",
      "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/60364d55-35ad-4231-957c-fd950cb6e7b5/201808311145_super.png",
      "description": "Para os amantes de frango"
    },
    {
      "id": "F6YBAtfn7mbDg1f5G6tc",
      "category": "Bebida",
      "name": "Refrigerante",
      "description": "Coca cola, Sprite ou Guaraná",
      "price": 6.9,
      "photoUrl": "https://static-images.ifood.com.br/image/upload/t_medium/pratos/f62f7746-4888-4e81-a9b0-93bf5453c51a/202103180149_woHq_s.jpg"
    },
    {
      "id": "FWdrnAS9WWxfibk4DNsm",
      "category": "Refeição",
      "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/aadcbd26-8afa-453b-ba51-fb95b2f67a81/201809071032_49758008.jpg",
      "price": 54.5,
      "name": "Chook'n dillas",
      "description": "Corazón mexicano"
    },
    {
      "id": "bkdQhhADMDNfZpOyply8",
      "name": "Jackaroo ribs & steak",
      "category": "Refeição",
      "price": 82.9,
      "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/5221af98-5ad4-42e2-a767-23d1545b82d5/201911191742_Cuuv_j.jpg",
      "description": "Exclusividade Outback"
    },
    {
      "id": "dByezKpFCqeROQ1yqssf",
      "description": "Litoral na sua casa!",
      "category": "Refeição",
      "price": 61.5,
      "name": "Grilled fish & shrimp scampi",
      "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/aadcbd26-8afa-453b-ba51-fb95b2f67a81/201809071113_49758158.jpg"
    },
    {
      "id": "mCfoLMRVesyzYwTyScJz",
      "description": "Especialidade da casa",
      "category": "Refeição",
      "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/5221af98-5ad4-42e2-a767-23d1545b82d5/201911191742_qCKt_r.jpg",
      "name": "Ribs on the barbie",
      "price": 65.4
    },
    {
      "id": "mkqtHeQPACWJ0hGU2wx1",
      "name": "Aussie grilled picanha",
      "price": 75.9,
      "description": "A Austrália mais perto de você",
      "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/aadcbd26-8afa-453b-ba51-fb95b2f67a81/201809071126_49758083.jpg",
      "category": "Refeição"
    },
    {
      "id": "toQmmkDkRpjvJHteQGB9",
      "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/aadcbd26-8afa-453b-ba51-fb95b2f67a81/201809071128_49758098.jpg",
      "name": "New york strip steak",
      "price": 70.9,
      "category": "Refeição",
      "description": "Sabor cosmopolita"
    },
    {
      "id": "tpQUUuH1gBEyhCVcY061",
      "category": "Refeição",
      "description": "Para estômagos menores",
      "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/aadcbd26-8afa-453b-ba51-fb95b2f67a81/201809071118_49758024.jpg",
      "name": "Junior ribs",
      "price": 54.9
    },
    {
      "id": "wGaTGAr74M9awBaonkLv",
      "category": "Refeição",
      "name": "Firecracker shrimp nachos",
      "price": 58.5,
      "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/aadcbd26-8afa-453b-ba51-fb95b2f67a81/201809071031_49758002.jpg",
      "description": "Frutos do mar? Temos também"
    }
  ]


  const getProfile = useRequestData([], `${BASE_URL}/profile`);
  const Useraddress = getProfile.user?.address && getProfile.user?.address;

  const priceSum = cardRestaurante.map(item => item.price).reduce((prev, curr) => prev + curr, 0);



  return (
    <div>
      {/* O alert será usado na pagina do Feed quando o pedido for confirmado */}
      {AlertChakara(priceSum, dadosRestautante.name)}

      {/* Dados do usuario */}
      {UserAddressChakara(Useraddress)}

      {RestaurantChakara(dadosRestautante.name, dadosRestautante.address, dadosRestautante.deliveryTime)}

      {/* Map com os valores do useContext */}

      <Flex
        p="1"
        align="start"
        flexDirection="column"
        justifyContent="space-between"
      >
        {cardRestaurante.map((item, index) => {
          return CardChakara(cardRestaurante[index].name, cardRestaurante[index].description, cardRestaurante[index].price, cardRestaurante[index].photoUrl, index + 1)
        })}
      </Flex>

      {/* Somar os os valores dos context e somar */}
      {PayChakara(priceSum, 46)}

      {BarraNavegacao()}
    </div>
  );
}

export default CartPage;