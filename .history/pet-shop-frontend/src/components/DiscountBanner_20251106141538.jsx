import React from "react";
import "./DiscountBanner.css";

const DiscountBanner = () => {
  return (
    <section className="discount-banner">
      <div className="discount-banner__content">
        <div className="discount-banner__text">
          <h2>5% Off</h2>
          <p>on your first order</p>
          <button>Shop Now</button>
        </div>

        <div className="discount-banner__images">
            <img src="/Pets.jpg" alt="animals" className="animals-banner" /
            </div>
      </div>
    </section>
  );
};

export default DiscountBanner;