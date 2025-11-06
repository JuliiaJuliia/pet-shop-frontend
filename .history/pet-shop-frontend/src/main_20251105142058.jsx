import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header/Header.jsx";
import ProductList from "./components/ProductList";

function Categories() {
  return <h2 style={{ textAlign: "center" }}>Categories Page</h2>;
}

function Sales() {
  return <h2 style={{ textAlign: "center" }}>Sales Page</h2>;
}

function Cart() {
  return <h2 style={{ textAlign: "center" }}>Your Cart is empty</h2>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/categories" element={<Categories />} />
  <Route path="/products" element={<ProductList />} />
  <Route path="/sales" element={<Sales />} />
  <Route path="/cart" element={<Cart />} />
</Routes>
  </BrowserRouter>
);