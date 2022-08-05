Maycon
#9737
Maycon — 02/08/2022
.
.
export const GetPostComments = () => {

  const token = window.localStorage.getItem("token")

  const id = window.localStorage.getItem("IdPost")


  const [getTripsList, setGetTripsList] = useState([])

  useEffect(() => {

    axios
      .get(
        ${BASE_URL}/posts/${id}/comments, { headers: { Authorization: token } }
      )
      .then((response) => {
        setGetTripsList(response.data)
      })
      .catch((err) => {
        console.log(err);
      });

  }, [])

  return getTripsList

}
joaoVictorVictoy — 02/08/2022
Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it
Maycon — 02/08/2022
Imagem
Imagem
Maycon — 02/08/2022
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
https://chakra-ui.com/docs/components
Chakra UI: Simple, Modular and Accessible UI Components for your React Applications.
Components
Simple, Modular and Accessible UI Components for your React Applications.
Components
Gustavo Monteiro — 03/08/2022
npm install @material-ui/core --force
npm install @material-ui/icons --force
Maycon — 03/08/2022
Imagem
benevolente — 03/08/2022
Imagem
Gustavo Monteiro — 03/08/2022
lucas12@gmail.com
login123
token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkpMaXVoWkFycmtNSzZqSEZpbW04IiwibmFtZSI6Ikx1Y2FzIEFsdmVzIiwiZW1haWwiOiJsdWNhczEyQGdtYWlsLmNvbSIsImNwZiI6IjEyMzQ1Njk4MDAwIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlJ1YSAxLCAxNSwgQXB0IDA1IC0gRmFyb2wiLCJpYXQiOjE2NTk1NDgyMTB9.YnoAlLnHV3rXzmH5E4tlhUEX8P7GBXb-qnQUonvuRDU
Maycon — 03/08/2022
.
.
.
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IndKU1RKVEhWRmV4RGdERWREMzNQIiwibmFtZSI6Im1heWNvbiIsImVtYWlsIjoibWF5Y29uQGdtYWlsLmNvbSIsImNwZiI6IjEyMi4zMzEuNDQxLTIxIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY1OTQ1NTYxNn0.PMcVo95NXo1BlD3t1EFcO7BhQaBsX9D-sNNZqHCT-Hk
.
.
.
.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InkzN3F4amRHRmg2TFd0WTZJZFhlIiwibmFtZSI6Im1heWNvbiIsImVtYWlsIjoibWF5Y29uQGdtYWlsLmNvbSIsImNwZiI6IjEyMi4zMzEuNDQxLTIxIiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTY1OTU1OTMzM30.5fQweBDOqPqFRmZUPdzud7qxF6VdmHgAIMK8ka5PKtI
.
.
.
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InkzN3F4amRHRmg2TFd0WTZJZFhlIiwibmFtZSI6Im1heWNvbiIsImVtYWlsIjoibWF5Y29uQGdtYWlsLmNvbSIsImNwZiI6IjEyMi4zMzEuNDQxLTIxIiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTY1OTU1OTMzM30.5fQweBDOqPqFRmZUPdzud7qxF6VdmHgAIMK8ka5PKtI
benevolente — 03/08/2022
Imagem
joaoVictorVictoy — 03/08/2022
https://mui.com/pt/material-ui/customization/how-to-customize/
How to customize - Material UI
Você pode customizar facilmente a aparência de um componente do Material UI.
How to customize - Material UI
Maycon — 03/08/2022
_hover={{ bg: '#97030d' }}
npm i @chakra-ui/icons
Maycon — 03/08/2022
.
.
.
.              boxShadow='2px 2px 2px 1px rgba(0, 0, 0, 0.1)'
Maycon — 03/08/2022
marginTop='3vw'
              marginLeft='3vw'
              bg='#FBFBFB'
              border='1px solid #b8b8b8'
              borderRadius='3vw'
              minHeight='20vw'
              minWidth='40vw'
              maxWidth='94vw'
              maxHeight='40vw'
              boxShadow='2px 2px 2px 1px rgba(0, 0, 0, 0.1)'
joaoVictorVictoy — Ontem às 10:53
{/* {CardHistory && CardHistory !== 0 ? CardHistory:<Text>Você não realizou nenhum pedido</Text>} */}
Maycon — Ontem às 10:53
CardHistory || <Text>Você não realizou nenhum pedido</Text>
Maycon — Ontem às 11:10
{
    "orders": [
        {
            "totalPrice": 657.9,
            "restaurantName": "Outback Steakhouse",
            "createdAt": 1659613101013,
            "expiresAt": 1659614301013
        },
        {
            "totalPrice": 302,
            "restaurantName": "Cantina Mamma Perrotta",
            "createdAt": 1659558533536,
            "expiresAt": 1659559733536
        },
        {
            "totalPrice": 657.9,
            "restaurantName": "Outback Steakhouse",
            "createdAt": 1659533110877,
            "expiresAt": 1659534310877
        }
    ]
}
Maycon — Ontem às 12:27
fontWeight={400}
Maycon — Ontem às 14:21
Imagem
joaoVictorVictoy — Ontem às 14:27
https://chakra-ui.com/docs/components/input
Chakra UI: Simple, Modular and Accessible UI Components for your React Applications.
Input
Input component is a component that is used to get user input in a text field.
Input
Maycon — Ontem às 14:33
Imagem
joaoVictorVictoy — Ontem às 14:49
https://www.positioniseverything.net/css-fade-out/
Position Is Everything
Position is Everything
CSS Fade Out: Quick Guide on Fade-out Animation in CSS
CSS fade out effects help make your site text or images more exciting and attractive. Click here to learn how you can accomplish this in CSS.
CSS Fade Out: Quick Guide on Fade-out Animation in CSS
joaoVictorVictoy — Ontem às 15:12
https://www.4devs.com.br/validador_numero_cartao_credito]
Aline G F Chagas — Ontem às 15:17
https://v0.chakra-ui.com/input
Chakra UI
Chakra UI
Simple, Modular and Accessible UI Components for your React Applications. Built with Styled System
Chakra UI
joaoVictorVictoy — Ontem às 15:17
function PasswordInput() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
Gustavo Monteiro — Ontem às 15:26
placeholder={"000.000.000-00"}
                    type={"name"}
                    name={"cpf"}
                    value={form.cpf}
                    onChange={onChange}
                    mask="000.000.000-00"
                    required
useProtectedPage();
joaoVictorVictoy — Ontem às 15:32
<Flex p="6" flexDirection={"column"} >
      <br />
      <Flex
        borderRadius={14}
        _active={{ bg: "#f1f1f1" }}
        justifyContent="space-between"
        onClick={() => goToEditPage(navigate)}
      >
        <Flex
          p="1"
          align="start"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Text>{UserData?.name}</Text>
          <Text>{UserData?.email}</Text>
          <Text>{UserData?.cpf}</Text>
        </Flex>
        <Image src={edit} w={6} h={6} alt="" />
      </Flex>
      <Flex
        alignItems="center"
        borderRadius={14}
        justifyContent="space-between"
        _active={{ bg: "#f1f1f1" }}
        onClick={() => goToSignAddress(navigate)}
      >
        <Flex
          mt="10px"
          p="1"
          align="start"
          flexDirection="column"

        >
          <Text mb={2} color="#B8B8B8">
            Endereço Cadastrado
          </Text>
          <Text>{UserData?.address}</Text>
        </Flex>
        <Image src={edit} w={6} h={6} alt="" />
      </Flex>
      <Text mt={6} mb={2} color="#B8B8B8">
        Historico de compras
      </Text>
      <Flex
        w="auto"
        borderRadius="5px"
        h="3px"
        bgGradient="linear(to-r, #080808,#E8222E )"
        flexDirection="column"
        display="flex"
      />

    <Flex flexWrap="wrap"  justifyContent={"center"} >
    {CardHistory}
    </Flex>

      {/* {(CardHistory && CardHistory !==0 ) || ((CardHistory && CardHistory === 0 && CardHistory === null )) ?CardHistory:<Text mt="3" ml="3">Você não realizou nenhum pedido</Text>} */}
    </Flex>
Gustavo Monteiro — Hoje às 11:40
https://jtemporal.com/desfazendo-um-ou-mais-commits/
Jessica Temporal
Desfazendo os últimos commits usando git reset
Veja como usar o comando git reset para desfazer os commits recentes
Desfazendo os últimos commits usando git reset
Maycon — Hoje às 11:43
! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://github.com/future4code/Freire-labe-food3.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
Gustavo Monteiro — Hoje às 11:44
git push origin master --force
Gustavo Monteiro — Hoje às 12:02
# 🍔🍹LabeFoods 
- Aplicação web com foco exclusivo na versão mobile;
- Grupo3: fourFoodA;

## 📲 User demo
- Login: lucas12@gmail.com
- Senha: login123
- Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkpMaXVoWkFycmtNSzZqSEZpbW04IiwibmFtZSI6Ikx1Y2FzIEFsdmVzIiwiZW1haWwiOiJsdWNhczEyQGdtYWlsLmNvbSIsImNwZiI6IjEyMzQ1Njk4MDAwIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlJ1YSAxLCAxNSwgQXB0IDA1IC0gRmFyb2wiLCJpYXQiOjE2NTk1NDgyMTB9.YnoAlLnHV3rXzmH5E4tlhUEX8P7GBXb-qnQUonvuRDU

## ⚛️ Tecnologias utilizadas 
- React Js
- Styled Components 
- Design Systems (Chakra UI)
- Axios 

## 🖥️ Libs para instalar e visualizar o projeto 
- Chakra UI -> npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
- Chakra Icons -> npm i @chakra-ui/icons
- CPF Mask -> npm install react-imask
- Axios -> npm i axios
- Styled Components -> npm i styled-components 
- React Icons (Hide/show eyes) -> npm install react-icons --save
- Chakra Alert -> npm i @chakra-ui/alert


## 📷 Imagens 

## 🧑‍💻 Desenvolvedores  

## 👨‍💻 Funcionalidades do Projeto
### 🔒 Fluxo de Login/Cadastro
- [x] Tela vermelha com logo branca, antes de ir à página de Login;
- [x] O usuário deve ser capaz de criar uma conta, cadastrando seus dados pessoais e seu endereço;
- [x] Usar máscara de CPF, para usuário digitar e o input aplicar pontuação automático; 
- [x] Caso insira alguma informação incorreta ou deixe de inserir alguma informação obrigatória, o usuário deve receber uma mensagem de erro clara;
- [x] Após finalizar o cadastro, o usuário deve ser redirecionado para a tela de lista de restaurantes; 

### 🔎 Busca e Seleção de Restaurantes
- [x] O usuário deve ser capaz de visualizar uma lista com todos os restaurantes
- [x] O usuário deve ser capaz de buscar um restaurante por nome
- [x] O usuário deve ser capaz de filtrar os restaurantes por categoria
- [x] O usuário deve ser capaz de clicar no card de um restaurante para visualizar a tela com seu cardápio

### 🍽️ Cardápio do Restaurante
- [x] O usuário deve ser capaz de visualizar as informações do restaurante (foto, nome, tipo, tempo de entrega, frete, endereço)
- [x] O usuário deve ser capaz de visualizar os pratos do restaurante, divididos em categorias (exemplo: principais, sobremesas, entradas, etc)
- [x] O usuário deve ser capaz de visualizar as informações de cada prato (foto, nome, descrição, preço)
- [x] O usuário deve ser capaz de adicionar pratos no carrinho e selecionar a quantidade de cada prato
- [x] O usuário deve ser capaz de remover itens do carrinho

### 🛒 Carrinho e Finalizar Compra
- [x] O usuário deve ser capaz de visualizar a lista de itens que adicionou ao carrinho. Caso não tenha adicionado nenhum item, deverá ver uma mensagem de "Carrinho Vazio"
- [x] O usuário deve visualizar, no topo da tela, o endereço de entrega
- [x] O usuário deve visualizar o preço total da compra, que deve ser corretamente calculado de acordo com o preço e quantidade de cada item adicionado
- [x] O usuário deve ser capaz de selecionar uma forma de pagamento dentre as opções de cartão e dinheiro
- [x] O usuário deve ser capaz de concluir um pedido e, ao fazê-lo, deve ver um banner de "Pedido em Andamento" com os dados do pedido (esse banner fica ativo durante X minutos, sendo X o tempo de entrega do restaurante)

### 🧙‍♀️ Perfil, Editar Perfil e Histórico de Pedidos
- [x] O usuário deve ser capaz de visualizar seus dados pessoais e endereço
- [x] O usuário deve ser capaz de editar seus dados pessoais e endereço
- [x] Ao editar as informações, caso insira alguma informação incorreta ou deixe de inserir alguma informação obrigatória, o usuário deve receber uma mensagem de erro clara
- [x] O usuário deve ser capaz de visualizar o seu histórico de pedidos concluídos (após o tempo de entrega do estabelecimento, o seu pedido aparece nessa lista?)
Recolher
message.txt
4 KB
﻿
# 🍔🍹LabeFoods 
- Aplicação web com foco exclusivo na versão mobile;
- Grupo3: fourFoodA;

## 📲 User demo
- Login: lucas12@gmail.com
- Senha: login123
- Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkpMaXVoWkFycmtNSzZqSEZpbW04IiwibmFtZSI6Ikx1Y2FzIEFsdmVzIiwiZW1haWwiOiJsdWNhczEyQGdtYWlsLmNvbSIsImNwZiI6IjEyMzQ1Njk4MDAwIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlJ1YSAxLCAxNSwgQXB0IDA1IC0gRmFyb2wiLCJpYXQiOjE2NTk1NDgyMTB9.YnoAlLnHV3rXzmH5E4tlhUEX8P7GBXb-qnQUonvuRDU

## ⚛️ Tecnologias utilizadas 
- React Js
- Styled Components 
- Design Systems (Chakra UI)
- Axios 

## 🖥️ Libs para instalar e visualizar o projeto 
- Chakra UI -> npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
- Chakra Icons -> npm i @chakra-ui/icons
- CPF Mask -> npm install react-imask
- Axios -> npm i axios
- Styled Components -> npm i styled-components 
- React Icons (Hide/show eyes) -> npm install react-icons --save
- Chakra Alert -> npm i @chakra-ui/alert


## 📷 Imagens 

## 🧑‍💻 Desenvolvedores  

## 👨‍💻 Funcionalidades do Projeto
### 🔒 Fluxo de Login/Cadastro
- [x] Tela vermelha com logo branca, antes de ir à página de Login;
- [x] O usuário deve ser capaz de criar uma conta, cadastrando seus dados pessoais e seu endereço;
- [x] Usar máscara de CPF, para usuário digitar e o input aplicar pontuação automático; 
- [x] Caso insira alguma informação incorreta ou deixe de inserir alguma informação obrigatória, o usuário deve receber uma mensagem de erro clara;
- [x] Após finalizar o cadastro, o usuário deve ser redirecionado para a tela de lista de restaurantes; 

### 🔎 Busca e Seleção de Restaurantes
- [x] O usuário deve ser capaz de visualizar uma lista com todos os restaurantes
- [x] O usuário deve ser capaz de buscar um restaurante por nome
- [x] O usuário deve ser capaz de filtrar os restaurantes por categoria
- [x] O usuário deve ser capaz de clicar no card de um restaurante para visualizar a tela com seu cardápio

### 🍽️ Cardápio do Restaurante
- [x] O usuário deve ser capaz de visualizar as informações do restaurante (foto, nome, tipo, tempo de entrega, frete, endereço)
- [x] O usuário deve ser capaz de visualizar os pratos do restaurante, divididos em categorias (exemplo: principais, sobremesas, entradas, etc)
- [x] O usuário deve ser capaz de visualizar as informações de cada prato (foto, nome, descrição, preço)
- [x] O usuário deve ser capaz de adicionar pratos no carrinho e selecionar a quantidade de cada prato
- [x] O usuário deve ser capaz de remover itens do carrinho

### 🛒 Carrinho e Finalizar Compra
- [x] O usuário deve ser capaz de visualizar a lista de itens que adicionou ao carrinho. Caso não tenha adicionado nenhum item, deverá ver uma mensagem de "Carrinho Vazio"
- [x] O usuário deve visualizar, no topo da tela, o endereço de entrega
- [x] O usuário deve visualizar o preço total da compra, que deve ser corretamente calculado de acordo com o preço e quantidade de cada item adicionado
- [x] O usuário deve ser capaz de selecionar uma forma de pagamento dentre as opções de cartão e dinheiro
- [x] O usuário deve ser capaz de concluir um pedido e, ao fazê-lo, deve ver um banner de "Pedido em Andamento" com os dados do pedido (esse banner fica ativo durante X minutos, sendo X o tempo de entrega do restaurante)

### 🧙‍♀️ Perfil, Editar Perfil e Histórico de Pedidos
- [x] O usuário deve ser capaz de visualizar seus dados pessoais e endereço
- [x] O usuário deve ser capaz de editar seus dados pessoais e endereço
- [x] Ao editar as informações, caso insira alguma informação incorreta ou deixe de inserir alguma informação obrigatória, o usuário deve receber uma mensagem de erro clara
- [x] O usuário deve ser capaz de visualizar o seu histórico de pedidos concluídos (após o tempo de entrega do estabelecimento, o seu pedido aparece nessa lista?)
message.txt
4 KB
