import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, VStack } from "@chakra-ui/react";

import GlobalContext from "../../Global/GlobalContext";


const CardRestaurante = (props) => {
  const navigate = useNavigate();
  const { states } = useContext(GlobalContext);

  return (
    <>
      <VStack
        direction='flex'
        align='flex-start'
        width='100%'
        maxW='350px'
        gap='2px'
      >
        {states.restaurantes
          .filter((restaurante) => {
            return (
              props.categoria === "" || restaurante.category === props.categoria
            );
          })
          .map((restaurante) => {
            return (
              <Box
                className="restaurant-card"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                width="100%"
                border="1px solid #262626"
                borderRadius="5px"
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
                <Box padding="16px">
                  <Box fontWeight="semibold" as="h3" color="red">
                    {restaurante.name}
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    color="#262626"
                  >
                    <p>Tempo de: {restaurante.deliveryTime} min</p>
                    <p>Frete: R$ {restaurante.shipping},00</p>
                  </Box>
                </Box>
              </Box>
            );
          })}
      </VStack>
    </>
  );
};

export default CardRestaurante;
