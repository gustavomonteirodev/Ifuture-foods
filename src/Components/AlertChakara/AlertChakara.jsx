import React from "react";
import {
    Box,
    Alert,
    AlertDescription,
    Flex,
} from '@chakra-ui/react'
import { TimeIcon } from '@chakra-ui/icons'


export const AlertChakara = (priceSum, name) => {

    return (
        <div>
            <Alert status='success' background='#e8222e'>
                <TimeIcon color='#fff' w={6} h={6} />
                <Box marginLeft={5}>
                    <Flex
                        display="flex" 
                        align='start'
                        flexDirection="column"
                        justifyContent="space-between">
                        <AlertDescription fontWeight={400} color='#fff'>Pedidos em andamento</AlertDescription>
                        <AlertDescription fontWeight={450} color='#000'> {name}</AlertDescription>
                        <AlertDescription fontWeight={700} color='#000'>SUBTOTAL {priceSum.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</AlertDescription>
                    </Flex>
                </Box>
            </Alert>
        </div>
    )
}