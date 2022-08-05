import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantSearchPage from "../Pages/RestaurantSearchPage/RestaurantSearchPage";
import PageHome from "../Pages/PageHome/PageHome";


export const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          
          <Route path="/feed" element={<PageHome />} />
          
          <Route path="/busca" element={<RestaurantSearchPage />} />
          
        </Routes>
      </BrowserRouter>
  )


}
