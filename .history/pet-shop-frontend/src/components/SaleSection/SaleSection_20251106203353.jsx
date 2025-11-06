import React from "react";
import "./SaleSection.css";
import { Link } from "react-router-dom";

const saleSection = [
  {
    id: 1,
    name: "Dry Dog Food for Adult Dogs",
    image: "/Dry Dog.jpg",
    oldPrice: 100,
    newPrice: 80,
    discount: "-50%",
  },
  {
    id: 2,
    name: "Ultra Cat Litter Tray Self-Cleaning",
    image: "/Cat Litter.jpg",
    oldPrice: 39.99,
    newPrice: 450,
    discount: "-34%",
  },
  {
    id: 3,
    name: "Black Dog Bed, Large Dogs",
    image: "/Dog Bed.jpg",
    oldPrice: 79.99,
    newPrice: 55.99,
    discount: "-25%",
  },
  {
    id: 4,
    name: "Cat Toy with Real Random Trajectory",
    image: "/Cat Toy.jpg",
    oldPrice: 19.99,
    newPrice: 13.99,
    discount: "-17%",
  },
];

const SaleSection = () => {
  return (
    <section className="sale-section">
      {/* 🔹 Верхній заголовок + кнопка справа */}
      <div className="sale-section__header">
        <h2>Sale</h2>
        <div className="sale-section__line"></div>
        <Link to="/categories" className="sale-section__all-btn">
          All categories
        </Link>
      </div>

      {/* 🔹 Сітка товарів */}
      <div className="sale-section__grid">
        {saleSection.map((item) => (
          <div key={item.id} className="sale-card">
            <div className="sale-card__image-container">
              <img src={item.image} alt={item.name} className="sale-card__image" />
              <span className="sale-card__discount">{item.discount}</span>
            </div>
            <div className="sale-card__details">
              <h4 className="sale-card__name">{item.name}</h4>
              <div className="sale-card__prices">
                <span className="sale-card__old">${item.oldPrice.toFixed(2)}</span>
                <span className="sale-card__new">${item.newPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SaleSection;