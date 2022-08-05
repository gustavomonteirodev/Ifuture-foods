import {React, useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Contants/Contants";
import { Box, Flex } from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'
import Header from "../../Components/Headers/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";

const PaginaBuscarRestaurante = () => {

  const navigate = useNavigate()
  const [restaurantes, setRestaurantes] = useState([])
  const [buscaRestaurante, setBuscaRestaurante] = useState("")

  const getRestaurante = () => {

    const headers = {
      headers: {
        auth: localStorage.getItem('token'),
      }
    }
    axios.get(`${BASE_URL}/restaurants`, headers)
      .then((res) => {
        setRestaurantes(res.data.restaurants);
        console.log(res.data);
      })
      .catch((res) => {
        console.log(res);
      })
  }
  useEffect(() => {
    getRestaurante()
  }, [])

  const filtrandoRestaurantes = restaurantes.filter((restaurante) => {
    if (buscaRestaurante == "") {
      return restaurante
    } else if (restaurante.name.toLowerCase().includes(buscaRestaurante.toLowerCase())) {
      return restaurante
    }
  })

    .map((restaurante) => {
      return (
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          width='100%'
          border="1px solid #262626"
          borderRadius='5px'
          key={restaurante.id}
        >
          <Box
            width='100%'
            maxW='328px'
            height='120px'
            borderRadius='5px 5px'
            backgroundSize={'cover'}
            backgroundPosition='center'
            backgroundImage={restaurante.logoUrl}
          />
          <Box padding='16px'
          >
            <Box fontWeight='semibold' as='h3' color='red'>{restaurante.name}</Box>
            <Box display='flex' justifyContent='space-between' color='#262626'>
              <p>Tempo de: {restaurante.deliveryTime} min</p>
              <p>Frete: R$ {restaurante.shipping},00</p>
            </Box>
          </Box>
        </Box>


      )
    })

  return (
    <div >
      <Header titulo="Ifuture" />
      <Flex
        direction='column'
        align='center'
        width='100vw'
        padding='16px'
      >
        <Input
          size='md' type="text"
          placeholder="Pesquisar por Restaurante"
          onChange={(event) => {
            setBuscaRestaurante(event.target.value)
          }} />
        <br /><br />
        <Flex
          direction='column'
          align='center'
          width='100%'
          maxW='328px'
          gap='8px'
        >
        {filtrandoRestaurantes}
        </Flex>
      </Flex>
      <SearchBar />
    </div>
    
  )
}

export default PaginaBuscarRestaurante