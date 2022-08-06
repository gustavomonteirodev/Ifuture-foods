import React, { useEffect, useContext, useState } from "react";
import GlobalContext from "../../Global/GlobalContext";
import { useParams } from "react-router-dom";
import CardProduto from "../../Components/CardProduto/CardProduto";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import BarraNavegacao from "../../Components/SearchBar/SearchBar";

const PaginaDetalhesRestaurante = (props) => {
  const pathParams = useParams();

  const { states, requests, setters } = useContext(GlobalContext);

  const { carrinho } = states;
  const { setCarrinho } = setters;
  const [selectedProduct, setSelectedProduct] = useState({});
  const [valor, setValor] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const index = localStorage.getItem("IdCardDetail")

  console.log(states)

  const indexRestautant =  index == 10 ? 1 : (index == 1 ? 0 : index) 

  const categorias = [];
  
  const pegaCategorias = () => {
    states.detalhes.products &&
      states.detalhes.products.map((categoria) => {
        categorias.push(categoria.category);
      });
  };
  pegaCategorias();
 
  const categoriasSemRepetir = [...new Set(categorias)];

  const onClickAdicionarParaCarrinho = (produto) => {
    const novoCarrinho = [...carrinho];
    let temNoCarrinho = false;
    for (let item of novoCarrinho) {
      if (item.id === produto.id) {
        item.quantity += valor;
        temNoCarrinho = true;
      }
      
    }
    if (temNoCarrinho === false) {
      novoCarrinho.push({ ...produto, quantity: valor });
    }
    setCarrinho(novoCarrinho);
    onClose();
  };

  const onClickRemoverProduto = (item) => {
    if (item.quantity > 1) {
      const novoCarrinho = [...carrinho];
      for (let produto of novoCarrinho) {
        if (produto.id === item.id) {
          produto.quantity -= 1;
        }
      }
      setCarrinho(novoCarrinho);
    } else {
      const novoCarrinho = carrinho.filter((produto) => {
        return produto.id !== item.id;
      });
      setCarrinho(novoCarrinho);
    }
  };

  const idProdutos = [];
  const pegaId = () => {
    states.carrinho &&
      states.carrinho.map((item) => {
        idProdutos.push(item.id);
      });
  }; 
  pegaId();

  const onChangevalor = (event) => {
    setValor(event.target.value);
  };

  const onAddProduct = (produto) => {
    setSelectedProduct(produto);
    onOpen();
  };

  useEffect(() => {
    requests.pegarDetalhes(pathParams.id);
  }, []);

  return (
    <>
      

      <Flex
        direction="column"
        align="center"
        width="100vw"
        padding="16px"
        marginBottom="50px"
        fontFamily={"'Roboto', sans-serif"}
      >
        <Box
          width="100%"
          maxW="350px"
          height="120px"
          borderRadius="5px 5px 0 0"
          marginBottom="20px"
          backgroundSize={"cover"}
          backgroundPosition="center"
          backgroundImage={states.restaurantes[indexRestautant].logoUrl}
        />
        <Box width="100%" maxW="350px" color="#262626">
          <Box fontWeight="semibold" as="h3" color="#262626">
            {states.restaurantes[indexRestautant].name}
          </Box>
          <Box marginBottom="16px">
            <p>{states.restaurantes[indexRestautant].category}</p>
            <Box display="flex" gap="16px">
              <p>{states.restaurantes[indexRestautant].deliveryTime} min</p>
              <p>Frete: R$ {states.restaurantes[indexRestautant].shipping},00</p>
            </Box>
            <p>{states.restaurantes[indexRestautant].address}</p>
          </Box>
        </Box>
        
        <Flex
          direction="column"
          align="center"
          width="100%"
          maxW="328px"
          gap="8px"
        >
          {categoriasSemRepetir.map((categoria) => {
            return (
              <Flex
                direction="column"
                align="flex-start"
                width="100%"
                maxW="328px"
                gap="8px"
                key={categoria}
              >
                <span>{categoria}</span>
                <Box height="1px" width="100%" bg="black" />

                {states.restaurantes[indexRestautant].products &&
                  states.restaurantes[indexRestautant].products
                    .filter((produto) => {
                      return produto.category === categoria;
                    })
                    .map((produto) => {

                      return (
                        <CardProduto
                          key={produto.id}
                          id={produto.id}
                          photoUrl={produto.photoUrl}
                          name={produto.name}
                          description={produto.description}
                          price={produto.price}
                          produtos={states.detalhes.products}
                          valor={
                            idProdutos.includes(produto.id)
                              ? states.carrinho.quantity
                              : ""
                          }
                          idProdutos={idProdutos}
                          onClickRemoverProduto={() =>
                            onClickRemoverProduto(produto)
                          }
                          onAddProduct={() => onAddProduct(produto)}
                        />
                      );
                    })}
              </Flex>
            );
          })}
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Selecione a quantidade desejada</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Select value={valor} onChange={onChangevalor}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button
                color="#262626"
                variant="black"
                mr={3}
                onClick={() => onClickAdicionarParaCarrinho(selectedProduct)}
              >
                ADICIONAR AO CARRINHO
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
      {BarraNavegacao()}
    </>
  );
};

export default PaginaDetalhesRestaurante;
