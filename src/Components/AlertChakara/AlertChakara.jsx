import React from "react";
import {
    HStack,
    Box,
    Alert,
    AlertDescription,
} from '@chakra-ui/react'
import { TimeIcon } from '@chakra-ui/icons'


export const AlertaChakara = () => {

    return (
        <div>
            <Alert status='success' background='#e8222e'>
                <TimeIcon color='#fff' w={6} h={6} />
                <Box marginLeft={5}>
                    <HStack display="flex" flexDir="column" align='start'>
                        <AlertDescription fontWeight={400} color='#fff'>Pedidos em andamento</AlertDescription>
                        <AlertDescription fontWeight={450} color='#000'>Bullguer Vila Madalena</AlertDescription>
                        <AlertDescription fontWeight={700} marginLeft={2} color='#000'>SUBTOTAL R$67,00</AlertDescription>
                    </HStack>
                </Box>
            </Alert>
        </div>
    )
}