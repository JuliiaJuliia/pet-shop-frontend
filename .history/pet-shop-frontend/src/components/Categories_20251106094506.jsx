// src/components/Categories.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const categories = [
  { id: 1, name: "Dry & Wet Food", image: "/Dog.jpg" },
  { id: 2, name: "Litter Boxes & Litter Trays", image: "/Cat.jpg" },
  { id: 3, name: "Baskets & Beds", image: "/Dogs.jpg" },
  { id: 4, name: "Toys", image: "/Dog and Fish.jpg" },
];

const Categories = () => {
  return (
    <section className="categories">
      <div className="categories__header">
        <h2>Categories</h2>
        <div className="categories__line"></div>

        <Link to="/products" className="all-categories-btn">
          All categories
        </Link>
      </div>

      <div className="categories__grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.name} />
            <div className="category-card__overlay">
              <p>{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;