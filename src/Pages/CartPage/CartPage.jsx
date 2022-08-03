import React from "react";
import { goToHomePage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Text,
  HStack,
  Box,
  Image,
  Divider,
  Checkbox,
  Alert,
  AlertDescription,
} from '@chakra-ui/react'
import { TimeIcon } from '@chakra-ui/icons'

function CartPage() {

  const navigate = useNavigate();

  return (
    <div>

      <Alert status='success' background='#e8222e'>
        <TimeIcon color='#fff' w={6} h={6} />

        <Box marginLeft={5}>
          <HStack display="flex" flexDir="column" >
            <AlertDescription fontWeight={400} color='#fff'> Pedidos em andamento </AlertDescription>
            <AlertDescription fontWeight={450} color='#000'> Bullguer Vila Madalena </AlertDescription>
            <AlertDescription fontWeight={700} marginLeft={2} color='#000'> SUBTOTAL R$67,00</AlertDescription>
          </HStack>
        </Box>
      </Alert>

      <HStack justify="center" padding={2}>
        <Text fontSize='md' fontWeight={700} > Meu Carrinho </Text>
      </HStack>

      <Box background='#d1cfcf' padding={2}>
        <HStack marginLeft={3} >
          <Text fontSize='md' fontWeight={400} color='#8a8a8a'> Endereço de entrega </Text>
        </HStack>
        <HStack marginLeft={3} >
          <Text fontWeight={600} fontSize='md' > Rua Alessandra Viera, 42 </Text>
        </HStack>
      </Box>

      <Box marginTop={3} >
        <HStack marginLeft={3} >
          <Text fontSize='md' fontWeight={700} color='#E8222E' > Bullguer Vila Madalena </Text>
        </HStack>

        <HStack marginLeft={3}>
          <Text fontSize='md' fontWeight={400} color='#b8b8b8'> R.Fradique Coutinho 1136 - Vila Madalena </Text>
        </HStack>

        <HStack marginLeft={3}>
          <Text fontSize='md' fontWeight={400} color='#b8b8b8'> 30 - 45 min </Text>
        </HStack>
      </Box>

      <Box marginBottom={4}>
        <HStack

          marginTop='3vw'
          marginLeft='3vw'
          bg='#FBFBFB'
          border='1px solid #b8b8b8'
          borderRadius='3vw'
          minHeight='20vw'
          minWidth='40vw'
          maxWidth='94vw'
          maxHeight='40vw'
        >
          <Image
            boxSize='39vw'
            objectFit='cover'
            borderLeftRadius={10}
            maxW={300}
            minW={100}
            src='https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/60364d55-35ad-4231-957c-fd950cb6e7b5/201808311145_super.png' alt='Dan Abramov' />

          <HStack display="flex" flexDir="column" gap="1" >
            <Text fontSize='lg' fontWeight={700} color='#E8222E' > Stencil </Text>
            <Text fontSize='sm' fontWeight={400} color='#525252'> Pão, carne, queijo, cebola roxa, tomate, alface e molho </Text>
            <Text fontSize='lg' fontWeight={700} > R$46,00 </Text>
          </HStack >

          <Box display="flex" flexDir="column" gap="17vw" marginInlineStart={8}>
            <HStack marginLeft={20}>
              <Text
                padding='1.5vw 3.3vw 1.5vw 3.3vw'
                borderTopRightRadius={8}
                borderBottomLeftRadius={8}
                background='#E8222E'
                color='#fff'
              > 1 </Text>
            </HStack>
            <HStack marginLeft={2}>
              <Button
                fontSize={11}
                borderTopLeftRadius={10}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={10}
                borderTopRightRadius={0}
                w='28.1vw' 
                background='#E8222E'
                _hover={{ bg: '#97030d'}}
                color='#fff'> remover </Button>
            </HStack>

          </Box>


        </HStack>
      </Box>
      <Text marginLeft='70%' fontWeight={600} fontSize='md' > Frete R$46,00 </Text>

      <HStack marginLeft={2} display="flex" flexDir="row" gap='56vw' marginBottom={5}>
        <Text fontWeight={600} fontSize='md' > SUBTOTAL  </Text>
        <Text fontSize='md' fontWeight={700} color='#E8222E'  > R$46,00 </Text>
      </HStack>

      <Text marginLeft={2} fontWeight={600} fontSize='md'> Forma de pagamento  </Text>

      <Divider marginTop={2}  marginBottom={2} padding={.9} background='#000'></Divider>

      <Box marginLeft={2} display="flex" flexDir="column" gap="2" marginBottom={4}>
        <Checkbox colorScheme='red' defaultChecked> Dinheiro </Checkbox>
        <Checkbox colorScheme='red' defaultChecked> Cartão de crédito </Checkbox>
      </Box>


      <HStack justify="center" display="flex" flexDir="column" >
        <Button 
        background='#E8222E'
        color='#fff' 
        minWidth={350}
        variant='solid'
        _hover={{ bg: '#97030d'}}
        onClick={() => goToHomePage(navigate)} > Confirmar </Button>
      </HStack>
    </div>
  );
}

export default CartPage;