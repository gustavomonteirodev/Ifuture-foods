import React from "react";
import {
    Button,
    Text,
    HStack,
    Box,
    Image,
} from '@chakra-ui/react'


export const CardChakara = (name, description, price, photoUrl, number) => {

    return (
        <div>
            <Box marginBottom={4}>
                <HStack
                    marginTop='6vw'
                    marginLeft='3vw'
                    bg='#FBFBFB'
                    border='1px solid #b8b8b8'
                    borderRadius='3vw'
                    minHeight='20vw'
                    minWidth='40vw'
                    maxWidth='94vw'
                    maxHeight='40vw'
                    boxShadow='2px 2px 2px 1px rgba(0, 0, 0, 0.1)'
                >
                    <Image
                        boxSize='39vw'
                        objectFit='cover'
                        borderLeftRadius={10}
                        maxW={122}
                        minW={122}
                        src={photoUrl}/>

                    <HStack display="flex" flexDir="column" gap="1" >
                    {/* noOfLines='2' */}
                    {/* white-space= 'nowrap' */}
                        <Text fontSize='md' noOfLines='2' fontWeight={700} color='#E8222E' > {name} </Text>
                        <Text fontSize='sm' fontWeight={400} color='#525252'> {description} </Text>
                        <Text fontSize='md' fontWeight={700} > {price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </Text>
                    </HStack >
                    
                    <Box display="flex" flexDir="column" gap="17vw" marginInlineStart={8}>
                        <HStack marginLeft={20}>
                            <Text
                                padding='1.5vw 3.3vw 1.5vw 3.3vw'
                                borderTopRightRadius={8}
                                borderBottomLeftRadius={8}
                                background='#E8222E'
                                color='#fff'
                            > {number || 0}  </Text>
                        </HStack>
                        <HStack >
                            <Button
                                fontSize={11}
                                borderTopLeftRadius={10}
                                borderBottomLeftRadius={0}
                                borderBottomRightRadius={10}
                                borderTopRightRadius={0}
                                w='30vw'
                                marginTop={3}
                                background='#E8222E'
                                _hover={{ bg: '#97030d' }}
                                color='#fff'> remover </Button>
                        </HStack>
                    </Box>
                </HStack>
            </Box>
        </div>
    )

}