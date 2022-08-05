import { Flex, Image, SimpleGrid,} from "@chakra-ui/react";
import home from "../../assets/home.png";
import carrinho from "../../assets/carrinho.png";
import avatar from "../../assets/avatar.png";
import { useNavigate } from "react-router-dom";
import { goToHome , goToCartPage, goToProfilePage} from "../../Routes/Coordinator";


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
          onClick={() => goToHome(navigate)}
          width="27px"
          height="27px"
        />
      </Flex>
      <Flex justify={"center"}>
        <Image
          src={carrinho}
          onClick={() => goToCartPage(navigate)}
          width="27px"
          height="27px"
        />
      </Flex>
      <Flex justify={"center"}>
        <Image
          src={avatar}
          onClick={() => goToProfilePage(navigate)}
          width="27px"
          height="27px"
        />
      </Flex>
    </SimpleGrid>
  );
};
export default BarraNavegacao;
