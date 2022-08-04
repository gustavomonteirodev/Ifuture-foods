import React from "react";
import {
    Button,
    Text,
    HStack,
    Box,
    Image,
} from '@chakra-ui/react'


export const RestaurantChakara = (name, address, time) => {

    return (
  
            <Box marginTop={3} >
                <HStack marginLeft={3} >
                    <Text fontSize='md' fontWeight={700} color='#E8222E' > {name} </Text>
                </HStack>

                <HStack marginLeft={3}>
                    <Text fontSize='md' fontWeight={400} color='#b8b8b8'> {address}</Text>
                </HStack>

                <HStack marginLeft={3}>
                    <Text fontSize='md' fontWeight={400} color='#b8b8b8'> {time}</Text>
                </HStack>
            </Box>

    )}