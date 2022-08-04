import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from '../Pages/Loginpage/LoginPage'
import SignUpPage from "../Pages/SignupPage/SignUpPage";
import CartPage from "../Pages/CartPage/CartPage"
import HomePage from "../Pages/HomePage/HomePage";
import MyProfilePage from "../Pages/MyProfilePage/MyProfilePage";
import SignAddressPage  from "../Pages/SignAddressPage/SignAddresPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/carrinho" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastrarendereco" element={<SignAddressPage />} />
        <Route path="/myProfile" element={<MyProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
