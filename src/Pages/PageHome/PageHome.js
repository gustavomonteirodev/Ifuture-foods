import SearchBar from "../../Components/SearchBar/SearchBar";
import Header from "../../Components/Headers/Header";
import React, { useEffect, useContext, useState } from "react";
import GlobalContext from "../../Global/GlobalContext";
import CardRestaurante from "../../Components/CardRestaurante/CardRestaurante";
import FiltroCategoria from "./FiltroCategoria";
import { Flex, HStack, Input } from "@chakra-ui/react";
import { goToSearch } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  
  const { states, setters, requests } = useContext(GlobalContext);

  const [categoria, setCategoria] = useState("")

  useEffect(() => {
    requests.pegarRestaurantes()
  }, [])

  return (
    <>
      <Header titulo="Ifuture odio do dia" />
      <Flex
        direction='column'
        align='center'
        width='100%'
        padding='20px'
        marginBottom='50px'
        fontFamily={"'Roboto', sans-serif"}
      >
        
        <Input 
         backgroundColor={"white"}
         size='md'
          mb={"5px"} 
          w="full"
          placeholder="Pesquisar por Restaurante" 
          alt="Restarante-foto" 
          onClick={() => goToSearch(navigate)} />          

        <HStack w="full">
          <FiltroCategoria setCategoria={setCategoria} />
        </HStack>

        <Flex
          direction='flex'
          align='center'
          width='100%'
          maxW='328px'
          gap='8px'
        >
          <CardRestaurante categoria={categoria} />
        </Flex>      
      </Flex>
      <SearchBar />
    </>
  )
}

export default Home