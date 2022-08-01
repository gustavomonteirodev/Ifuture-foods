import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/Loginpage/LoginPage";
import SignUpPage from "../Pages/SignupPage/SignUpPage";
import CartPage from "../Pages/Cartpage/CartPage";
import HomePage from "../Pages/Homepage/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/carrinho" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
