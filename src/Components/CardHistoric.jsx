import { Flex, Text } from "@chakra-ui/react";

const CardHistoric = (props) => {
  return (
    <Flex
      align="start"
      maxW={300}
      h="6.375rem"
      mt={7}
      p={0}
      boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.1)"
      border="1px solid #b8b8b8"
      borderRadius={8}
      flexDirection="column"
      
    >
      <Text color="#e8222e" m={3}>
        {props.name}
      </Text>
      <Text m={3} fontWeight={750} fontSize="md">
        {" "}
        SUBTOTAL R$ {props.price}
      </Text>
    </Flex>
  );
};

export default CardHistoric;
