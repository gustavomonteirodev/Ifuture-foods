import { BASE_URL } from "../../constants/url";
import CardHistoric from "../../Components/CardHistoric";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Flex, Text } from "@chakra-ui/react";
import { goToEditPage } from "../../Routes/Coordinator";

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
        p="1"
        align="start"
        flexDirection="column"
        onClick={() => goToEditPage(navigate)}
      >
        <Text>{data.name}</Text>
        <Text>{data.email}</Text>
        <Text>{data.cpf}</Text>
      </Flex>

      <Flex
        mt="10px"
        p="1"
        align="start"
        flexDirection="column"
        onClick={() => goToEditPage(navigate)}
      >
        <Text color="#B8B8B8">Endereço Cadastrado</Text>
        <Text>{data.address}</Text>
      </Flex>
      <br />
      <Text color="#B8B8B8">Historico de compras</Text>
      <Flex
        w="auto"
        borderRadius="5px"
        h="3px"
        bgGradient="linear(to-r, #B8B8B8,#E8222E )"
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
