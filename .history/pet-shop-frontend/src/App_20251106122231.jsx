import React from "react";
import DiscountForm from "./components/DiscountForm";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Pet Shop 🐾</h1>
      <p>⬇️ Зараз має бути DiscountForm ⬇️</p>
      <DiscountForm />
      <p>⬆️ DiscountForm закінчився ⬆️</p>
      <ProductList />
    </div>
  );
}

export default App;