import React from "react";
import "./SaleSection.css";

const saleSection = [
  {
    id: 1,
    name: "Dry Dog Food for Adult Dogs",
    image: "/Dog Food.jpg",
    oldPrice: 49.99,
    newPrice: 24.99,
    discount: "-50%",
  },
  {
    id: 2,
    name: "Ultra Cat Litter Tray Self-Cleaning",
    image: "/Cat Litter.jpg",
    oldPrice: 39.99,
    newPrice: 26.39,
    discount: "-34%",
  },
  {
    id: 3,
    name: "Black Dog Bed, Large Dogs",
    image: "/Dog Bed.jpg",
    oldPrice: 79.99,
    newPrice: 55.99,
    discount: "-30%",
  },
  {
    id: 4,
    name: "Cat Toy with Real Random Trajectory",
    image: "/Cat Toy.jpg",
    oldPrice: 19.99,
    newPrice: 13.99,
    discount: "-30%",
  },
];

const SaleSection = () => {
  return (
    <section className="sale-section">
      <h2 className="sale-section__title">Sale</h2>
      <h3 className="sale-section__subtitle">Up to 40% Off</h3>

      <div className="sale-section__grid">
        {saleSection.map((item) => (
          <div key={item.id} className="sale-card">
            <div className="sale-card__image-container">
              <img src={item.image} alt={item.name} className="sale-card__image" />
              <span className="sale-card__discount">{item.discount}</span>
            </div>
            <h4 className="sale-card__name">{item.name}</h4>
            <div className="sale-card__prices">
              <span className="sale-card__old">${item.oldPrice.toFixed(2)}</span>
              <span className="sale-card__new">${item.newPrice.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="sale-section__button">Go to Sale</button>
    </section>
  );
};

export default SaleSection;