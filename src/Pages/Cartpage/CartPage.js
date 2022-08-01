import React from "react";
import { goToHomePage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>CARRINHO</h1>
      <button onClick={() => goToHomePage(navigate)}>Voltar</button>
    </div>
  );
}

export default CartPage;