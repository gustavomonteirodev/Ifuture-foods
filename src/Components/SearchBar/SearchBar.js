import { Flex, Image, SimpleGrid,} from "@chakra-ui/react";
import home from "../../imagens/home.png";
import carrinho from "../../imagens/carrinho.png";
import avatar from "../../imagens/avatar.png";
import { useNavigate } from "react-router-dom";


const BarraNavegacao = () => {
  const navigate = useNavigate();

  return (
    <SimpleGrid
      columns={3}
      h="50px"
      bg="white"
      py="1em"
      borderTop={"1px"}
      borderColor="lightgray"
      w="full"
      pos={"fixed"}
      bottom={0}
    >
      <Flex justify={"center"}>
        <Image
          src={home}
          onClick={() => (navigate)}
          width="27px"
          height="27px"
        />
      </Flex>
      <Flex justify={"center"}>
        <Image
          src={carrinho}
          onClick={() => (navigate)}
          width="27px"
          height="27px"
        />
      </Flex>
      <Flex justify={"center"}>
        <Image
          src={avatar}
          onClick={() => (navigate)}
          width="27px"
          height="27px"
        />
      </Flex>
    </SimpleGrid>
  );
};
export default BarraNavegacao;
