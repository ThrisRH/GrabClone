import "./App.css";
import React from "react";
import RestaurantsPage from "./components/DanhSachQuanAn/RestaurantsPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Layout/Header";
import RestaurantPage from "./components/MenuQuanAn/RestaurantPage";
function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="restaurants" element={<RestaurantsPage />} />
          <Route path="/restaurant/:name" element={<RestaurantPage />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
