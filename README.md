<h1 align="center">
<img width=800 src="https://user-images.githubusercontent.com/104602579/183106447-2e64e9b5-cf76-4b1b-a1e0-0638e7459bc6.png">
</h1>
<h3 align="center">
📲 Aplicação web com foco exclusivo na versão mobile; <br/>
👨‍💼📊📈📁 Grupo3: fourFoodA;
</h3>

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
