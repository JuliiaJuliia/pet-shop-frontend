import React from "react";
import "./Categories.css";

const categories = [
  { id: 1, name: "Dry & Wet Food", image: "/Dog.jpg" },
  { id: 2, name: "Litter Boxes & Litter Trays", image: "/Cat.jpg" },
  { id: 3, name: "Baskets & Beds", image: "/beds.jpg" },
  { id: 4, name: "Accessories", image: "/accessories.jpg" },
];

const Categories = () => {
  return (
    <section className="categories">
      <h2 className="categories__title">Categories</h2>
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