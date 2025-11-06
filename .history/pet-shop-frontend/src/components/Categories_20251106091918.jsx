import React from "react";
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
          <button className="all-categories-btn">All categories</button>
        </div>
  
        <div className="categories__list">
          <div className="category-card">
            <img src="/food.jpg" alt="Dry & Wet Food" />
            <p>Dry & Wet Food</p>
          </div>
          <div className="category-card">
            <img src="/litter.jpg" alt="Litter Boxes & Litter Trays" />
            <p>Litter Boxes & Litter Trays</p>
          </div>
          <div className="category-card">
            <img src="/beds.jpg" alt="Baskets & Beds" />
            <p>Baskets & Beds</p>
          </div>
          <div className="category-card">
            <img src="/toys.jpg" alt="Toys" />
            <p>Toys</p>
          </div>
        </div>
      </section>
    );
  };
  
  expor

export default Categories;