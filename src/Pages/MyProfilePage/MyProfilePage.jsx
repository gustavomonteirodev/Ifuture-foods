import { BASE_URL } from "../../constants/url";
import CardHistoric from "../../Components/CardHistoric";

import { useNavigate } from "react-router-dom";

import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { goToEditPage,goToSignAddress } from "../../Routes/Coordinator";
import edit from "../../assets/edit.png";
import useRequestData from "../../hooks/useRequestData";

export default function MyProfilePage() {
  const navigate = useNavigate();
  const getProfile = useRequestData([], `${BASE_URL}/profile`);

  const getHistory = useRequestData([], `${BASE_URL}/orders/history`);

  const UserData = getProfile.user && getProfile.user;

  const History = getHistory.orders && getHistory.orders;

  const CardHistory =
    History &&
    History.map((compra, i) => {
      return (
        <CardHistoric
          key={i}
          name={compra.restaurantName}
          price={compra.totalPrice}
        />
      );
    });

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
          <Text>{UserData?.name}</Text>
          <Text>{UserData?.email}</Text>
          <Text>{UserData?.cpf}</Text>
        </Flex>
        <Image src={edit} w={6} h={6} alt="" />
      </Flex>
      <Flex
        alignItems="center"
        borderRadius={14}
        justifyContent="space-between"
        _active={{ bg: "#f1f1f1" }}
        onClick={() => goToSignAddress(navigate)}
      >
        <Flex
          mt="10px"
          p="1"
          align="start"
          flexDirection="column"
          
        >
          <Text mb={2} color="#B8B8B8">
            Endereço Cadastrado
          </Text>
          <Text>{UserData?.address}</Text>
        </Flex>
        <Image src={edit} w={6} h={6} alt="" />
      </Flex>
      <Text mt={6} mb={2} color="#B8B8B8">
        Historico de compras
      </Text>
      <Flex
        w="auto"
        borderRadius="5px"
        h="3px"
        bgGradient="linear(to-r, #080808,#E8222E )"
        flexDirection="column"
        display="flex"
      />
      {CardHistory}
    </Box>
  );
}
