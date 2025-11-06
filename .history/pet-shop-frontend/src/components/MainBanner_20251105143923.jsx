import React from "react";
import "./MainBanner.css";

export default function MainBanner() {
  return (
    <section className="banner">
      <header className="banner-header">
        <div className="logo">logo.svg PetShop</div>
        <nav className="banner-nav">
          <a href="#">Main Page</a>
          <a href="#">Categories</a>
          <a href="#">All products</a>
          <a href="#">All sales</a>
        </nav>
        <div className="cart-icon">🛍</div>
      </header>

      <div className="banner-content">
        <h1>
          Amazing Discounts <br /> on Pets Products!
        </h1>
        <button>Check out</button>
      </div>
    </section>
  );
}