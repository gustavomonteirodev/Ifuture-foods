import { Flex, Image, SimpleGrid,} from "@chakra-ui/react";
import home from "../../assets/home.png";
import homeRed from "../../assets/homeRed.png";
import carrinho from "../../assets/carrinho.png";
import carrinhoRed from "../../assets/carrinho.png";
import avatar from "../../assets/avatar.png";
import avatarRed from "../../assets/avatar.png";
import { useNavigate } from "react-router-dom";
import { goToHome , goToCartPage, goToProfilePage} from "../../Routes/Coordinator";
import { useState } from "react";

const BarraNavegacao = ( iconHome, iconCart, iconAvatar ) => {
  const navigate = useNavigate();

  
  const [icon1, setIcon1] = useState(home)
  const [icon2, setIcon2] = useState(carrinho)
  const [icon3, setIcon3] = useState(avatar)


  if(iconHome === 'red'){
    setIcon1(homeRed)
  }
  
  if(iconCart === 'red'){
    setIcon2(carrinhoRed)
    
  }

  if(iconAvatar === 'red'){
    setIcon3(avatarRed)
  }


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
          src={icon1}
          onClick={() => goToHome(navigate)}
          width="27px"
          height="27px"
        />
      </Flex>
      <Flex justify={"center"}>
        <Image
          src={icon2}
          onClick={() => goToCartPage(navigate)}
          width="27px"
          height="27px"
        />
      </Flex>
      <Flex justify={"center"}>
        <Image
          src={icon3}
          onClick={() => goToProfilePage(navigate)}
          width="27px"
          height="27px"
        />
      </Flex>
    </SimpleGrid>
  );
};
export default BarraNavegacao;
