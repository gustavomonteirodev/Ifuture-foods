import React from "react";
import {
    Text,
    HStack,
    Box,
} from '@chakra-ui/react'

export const UserAddressChakara = (address) => {

    return (
        <>
            <HStack justify="center" padding={2}>
                <Text fontSize='md' fontWeight={700} > Meu Carrinho </Text>
            </HStack>

            <Box background='#d1cfcf' padding={2}>
                <HStack marginLeft={3} >
                    <Text fontSize='md' fontWeight={400} color='#8a8a8a'> Endereço de entrega </Text>
                </HStack>
                <HStack marginLeft={3} >
                    <Text fontWeight={600} fontSize='md' > {address} </Text>
                </HStack>
            </Box>
        </>
    )

}