import React, {useState} from "react";
import { goToHomePage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Text,
    HStack,
    Box,
    Divider,
    Stack,
    Radio,
    RadioGroup,
} from '@chakra-ui/react'
import { PostHook } from "../../hooks/PostHook";
import { confirmingPurchase } from "../../services/users";


export const PayCart = (shipping, totalSun, IdAndQuantity) => {

    const navigate = useNavigate();

    const [value, setValue] = useState('')


    const checkout = (IdAndQuantity) => {


    const item =  {
            "products": [{
                "id": "CnKdjU6CyKakQDGHzNln",
                "quantity": 10
            }, {
                "quantity": 1,
                "id": "KJqMl2DxeShkSBevKVre"
            }],
            "paymentMethod": {value}
        }

        const url = `/fourFoodA/restaurants/${5}/order`

        confirmingPurchase(item,5)


    }

    return (
        <>
            <Text marginLeft='65%' fontWeight={600} fontSize='md' marginTop={8} > Frete {shipping.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || 'R$ 0,00'} </Text>

            <HStack marginLeft={2} display="flex" flexDir="row" gap='53vw' marginBottom={5}>
                <Text fontWeight={600} fontSize='md' > SUBTOTAL  </Text>
                <Text fontSize='md' fontWeight={700} color='#E8222E'  > {totalSun.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || 'R$ 0,00'} </Text>
            </HStack>

            <Text marginLeft={2} fontWeight={600} fontSize='md'> Forma de pagamento  </Text>

            <Divider marginTop={2} marginBottom={2} padding={.9} background='#000'></Divider>

            <Box marginLeft={2} display="flex" flexDir="column" gap="2" marginBottom={4}>

                <RadioGroup onChange={setValue} value={value}>
                    <Stack>
                        <Radio  fontSize='14' fontWeight={400} colorScheme='red' borderRadius={0} value='Dinheiro'> Dinheiro </Radio>
                        <Radio  fontSize='14' fontWeight={400} colorScheme='red' borderRadius={0} value='Cartão de crédito'> Cartão de crédito</Radio>
                    </Stack>
                </RadioGroup>
            </Box>

            <HStack justify="center" display="flex" flexDir="column" marginBottom={20} marginTop={10}>
                <Button
                    background='#E8222E'
                    color='#fff'
                    minWidth={350}
                    variant='solid'
                    _hover={{ bg: '#97030d' }}
                    onClick={() => checkout()} > Confirmar </Button>
            </HStack>
        </>
    )
}


// goToHomePage(navigate)