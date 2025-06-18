import React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import AnimationPage from './components/AnimationPage';
import ProductPage from "./components/ProductPage";
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnimationPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
