import "./App.css";
import React from "react";
import RestaurantsPage from "./components/DanhSachQuanAn/RestaurantsPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Layout/Header";
import RestaurantPage from "./components/MenuQuanAn/RestaurantPage";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="restaurants" element={<RestaurantsPage />} />
            <Route path="/restaurant/:name" element={<RestaurantPage />} />
          </Routes>
        </Header>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
