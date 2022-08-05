import { Flex, Text } from "@chakra-ui/react";

const CardHistoric = (props) => {
  return (
    <Flex
      align="start"
      w={250}
      h="6.375rem"
      m={3}
      mt={5}
      p={0}
      boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.1)"
      border="1px solid #b8b8b8"
      borderRadius={8}
      flexDirection="column"
      
    >
      <Text color="#e8222e " fontWeight={500}  m={3}>
        {props.name}
      </Text>
      <Text m={4} fontWeight={750} fontSize="md">
        {" "}
        SUBTOTAL {props.price}
      </Text>
    </Flex>
  );
};

export default CardHistoric;
