import { BASE_URL } from "../../constants/url";
import CardHistoric from "../../Components/CardHistoric";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { goToEditPage } from "../../Routes/Coordinator";
import edit from "../../assets/edit.png";
export default function MyProfilePage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const token = window.localStorage.getItem("token");

  const GetProfile = () => {
    axios
      .get(`${BASE_URL}/profile`, { headers: { auth: token } })
      .then((res) => {
        setData(res.data.user);
      })
      .catch((error) => {
        console.log("GetProfile", error);
        alert("Deu erro");
      });
  };

  const GetOrdersHistory = () => {
    axios
      .get(`${BASE_URL}/orders/history`, { headers: { auth: token } })
      .then((res) => {
        setData2(res.data.orders[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const asd = GetOrdersHistory()
  // asd && asd.map((item,i)=> console.log(
  //     item[i].restaurantName,
  //     item[i].totalPrice

  //    )
  //   )

  //  console.log(asd)
  useEffect(() => {
    GetProfile();
    GetOrdersHistory();
  }, []);

  return (
    <Box p="6" alignItems="center">
      
      <br />
      <Flex
      borderRadius={14}
      _active={{ bg: "#f1f1f1" }}
        justifyContent="space-between"
        onClick={() => goToEditPage(navigate)}
      >
        <Flex
          p="1"
          align="start"
          flexDirection="column"
          
          justifyContent="space-between"
        >
          <Text>{data.name}</Text>
          <Text>{data.email}</Text>
          <Text>{data.cpf}</Text>
        </Flex>
        <Image src={edit} w={6} h={6} alt="" />
      </Flex>
      <Flex
        alignItems="center"
        borderRadius={14}
        justifyContent="space-between"
        _active={{ bg: "#f1f1f1" }}
        onClick={() => goToEditPage(navigate)}
      >
        <Flex
          mt="10px"
          p="1"
          align="start"
          flexDirection="column"
          
          onClick={() => goToEditPage(navigate)}
        >
          <Text  mb={2} color="#B8B8B8">Endereço Cadastrado</Text>
          <Text>{data.address}</Text>
        </Flex>
        <Image src={edit} w={6} h={6} alt="" />
      </Flex>
      <Text mt={6} mb={2} color="#B8B8B8">Historico de compras</Text>
      <Flex
        w="auto"
        borderRadius="5px"
        h="3px"
        bgGradient="linear(to-r, #080808,#E8222E )"
        flexDirection="column"
        display="flex"
      />

      <CardHistoric
        name={data2 && data2.restaurantName}
        price={data2 && data2.totalPrice}
      />
    </Box>
  );
}
