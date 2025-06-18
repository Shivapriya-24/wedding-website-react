import React from "react";
import AnimationPage from "./components/AnimationPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage";

function App(){
  return(
    <div>
      {/* <AnimationPage/> */}
            <Routes>
              <Route path="/" element={<AnimationPage />} />
              <Route path="/products" element={<ProductPage />} />
            </Routes>
    </div>
  );
}
export default App;
