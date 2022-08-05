import { GridItem, Heading, SimpleGrid,} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";


const Header = (props) => {
  const navigate = useNavigate();

  return (
    <SimpleGrid
      fontFamily={"Roboto-Regular"}
      borderBottom={"1px"}
      borderBottomColor={"#262626"}
      justifyContent={"center"}

    >
      
      <GridItem colSpan={2}>
        <Heading mt={"10px"} fontSize={"1.3em"}>
          {props.titulo}
        </Heading>
      </GridItem>

    </SimpleGrid>
  );
};
export default Header;
