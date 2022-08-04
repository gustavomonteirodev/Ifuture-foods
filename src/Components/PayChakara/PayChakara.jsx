import React from "react";
import { goToHomePage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Text,
    HStack,
    Box,
    Divider,
    Checkbox,
} from '@chakra-ui/react'

export const PayChakara = (shipping, totalSun ) => {

    const navigate = useNavigate();

    return (
        <>
            <Text marginLeft='70%' fontWeight={600} fontSize='md' marginTop={8} > Frete R${shipping || '0,00'} </Text>

            <HStack marginLeft={2} display="flex" flexDir="row" gap='56vw' marginBottom={5}>
                <Text fontWeight={600} fontSize='md' > SUBTOTAL  </Text>
                <Text fontSize='md' fontWeight={700} color='#E8222E'  > R${totalSun || '0,00'} </Text>
            </HStack>

            <Text marginLeft={2} fontWeight={600} fontSize='md'> Forma de pagamento  </Text>

            <Divider marginTop={2} marginBottom={2} padding={.9} background='#000'></Divider>

            <Box marginLeft={2} display="flex" flexDir="column" gap="2" marginBottom={4}>
                <Checkbox colorScheme='red' defaultChecked> Dinheiro </Checkbox>
                <Checkbox colorScheme='red' defaultChecked> Cartão de crédito </Checkbox>
            </Box>


            <HStack justify="center" display="flex" flexDir="column" marginBottom={10} marginTop={10}>
                <Button
                    background='#E8222E'
                    color='#fff'
                    minWidth={350}
                    variant='solid'
                    _hover={{ bg: '#97030d' }}
                    onClick={() => goToHomePage(navigate)} > Confirmar </Button>
            </HStack>
        </>
    )
}