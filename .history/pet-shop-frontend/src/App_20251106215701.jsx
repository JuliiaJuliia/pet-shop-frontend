import React from "react";
import MainBanner from "./components/MainBanner";
import DiscountForm from "./components/DiscountForm";
import ProductList from "./components/ProductList";




function App() {
  return (
    <div>
      {/* Заголовок магазину */}
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Pet Shop 🐾
      </h1>

      {/* Банер з CTA */}
      <MainBanner />

      {/* Форма зі знижкою */}
      <section style={{ marginTop: "50px" }}>
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
          📢 Get a 5% discount now 📢
        </p>
      </section>
      <DiscountForm />
      
      <p style={{ textAlign: "center", fontSize: "1.2rem", marginTop: "10px" }}>
        📢 DiscountForm finished 📢
      </p>

      {/* Секція продуктів */}
      <section style={{ marginTop: "50px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Our Products
        </h2>
        <ProductList />
      </section>
    </div>
  );
}

export default App;