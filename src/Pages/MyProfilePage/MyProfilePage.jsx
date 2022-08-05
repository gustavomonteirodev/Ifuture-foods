
import { useState } from "react"
import { BASE_URL } from "../../constants/url";
import CardHistoric from "../../Components/CardHistoric";
import edit from "../../assets/edit.png";
import useRequestData from "../../hooks/useRequestData";
import useProtectedPage from "../../hooks/useRequestData";
import BarraNavegacao from "../../Components/SearchBar/SearchBar";
import { Flex, Text, Image } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import {
  goToEditPage,
  goToSignAddress,
  goToLastPage,
  goToLoginPage,
} from "../../Routes/Coordinator";







export default function MyProfilePage() {
  useProtectedPage();
  const navigate = useNavigate();
  const getProfile = useRequestData([], `${BASE_URL}/profile`);
  const UserData = getProfile.user && getProfile.user;
  const getHistory = useRequestData([], `${BASE_URL}/orders/history`);
  const History = getHistory.orders && getHistory.orders;

const token = localStorage.getItem('token')
const [loginLogout, setLoginLogout] = useState(token? 'Logout':"Login")

const logout = () =>{
  localStorage.removeItem('token')
}

const buttonLoginLogout = () =>{
  if(token){
    logout()
    setLoginLogout("Login")
    goToLoginPage(navigate)
  }else{
    goToLoginPage(navigate)
  }

}

  const CardHistory =
    History &&
    History.map((compra, i) => {
      return (
        <CardHistoric
          key={i}
          name={compra.restaurantName}
          price={compra.totalPrice.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        />
      );
    });
  
  
  return (
    // HEADER
    // HEADER
    // HEADER
    <Flex flexDirection={"column"} pb={'50px'}>
      <Flex align={"center"} m={2} justifyContent={"space-between"}>
        <ChevronLeftIcon
          ml={2}
          w={8}
          h={8}
          onClick={() => goToLastPage(navigate)}
        />

        <Text fontWeight={750}>Meu Perfil</Text>
        <Text fontWeight={750} mr={2}  onClick={buttonLoginLogout}>{loginLogout}</Text>
      </Flex>
      <Flex
        w="auto"
        mb={5}
        borderRadius="5px"
        h="1px"
        bgColor="lightgray"
        display="flex"
      />
      {/* Informações usuario  */}
      {/* Informações usuario  */}
      {/* Informações usuario  */}
      <Flex
        m={2}
        p={3}
        borderRadius={14}
        _active={{ bg: "#f1f1f1" }}
        justifyContent="space-between"
        onClick={() => goToEditPage(navigate)}
      >
        <Flex
          
          align="start"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Text mb={2} color="#B8B8B8">
            Dados Cadastrados
          </Text>
          <Text>{UserData?.name}</Text>
          <Text>{UserData?.email}</Text>
          <Text>{UserData?.cpf}</Text>
        </Flex>
        <Image src={edit} w={6} h={6} alt="Botão-Editar" />
      </Flex>
      <Flex
         m={2}
         p={3}
        alignItems="center"
        borderRadius={14}
        justifyContent="space-between"
        _active={{ bg: "#f1f1f1" }}
        onClick={() => goToSignAddress(navigate)}
      >
        <Flex mt="10px"  align="start" flexDirection="column">
          <Text mb={2} color="#B8B8B8">
            Endereço Cadastrado
          </Text>
          <Text>{UserData?.address}</Text>
        </Flex>
        <Image src={edit} w={6} h={6} alt="Botão-Editar" />
      </Flex>
      <Text pl={2} p={4} color="#B8B8B8">
        Historico de compras
      </Text>
      <Flex
        w="auto"
        ml={3}
        mr={3}
        mb={3}
        borderRadius="5px"
        h="3px"
        bgGradient="linear(to-r, #080808,#E8222E )"
        flexDirection="column"
        display="flex"
      />


      <Flex flexWrap="wrap" justifyContent={"center"}>
        {CardHistory}
      </Flex>

      {/* {(CardHistory && CardHistory !==0 ) || ((CardHistory && CardHistory === 0 && CardHistory === null )) ?CardHistory:<Text mt="3" ml="3">Você não realizou nenhum pedido</Text>} */}
      {BarraNavegacao()}

      
    

    </Flex>
   
  );
}
