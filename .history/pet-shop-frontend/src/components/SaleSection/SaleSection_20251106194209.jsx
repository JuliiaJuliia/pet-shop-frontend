import React from "react";
import "./SaleSection.css";

const SaleSection = () => {
  return (
    <section className="sale-section">

      {/* 🔹 Ліва частина: фото тварин */}
      <div className="sale-section__image">
        <img src="/Pets.jpg" alt="pets sale" />
      </div>

      {/* 🔹 Права частина: текст та кнопка */}
      <div className="sale-section__content">
        <h2 className="sale-section__title">Sale</h2>
        <h3 className="sale-section__subtitle">Up to 40% Off</h3>
        <p className="sale-section__text">
          Treat your pets with love — find food, toys, and accessories at the best prices!
        </p>
        <button className="sale-section__button">Go to Sale</button>
      </div>

    </section>
  );
};

export default SaleSection;