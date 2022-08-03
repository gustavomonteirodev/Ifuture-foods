import { Flex } from "@chakra-ui/react";

const CardHistoric = (props) => {
  return (
    <Flex w="328px" h="102px" m="7px 0 0" p="16px" borderRadius="8px">
      <p>{props.name}</p>
      <p>{props.price}</p>
    </Flex>
  );
};

export default CardHistoric;
