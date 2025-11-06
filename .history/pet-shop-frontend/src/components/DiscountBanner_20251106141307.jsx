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
          <img src="/dog-promo.png" alt="dog" className="animal dog" />
          <img src="/cat-promo.png" alt="cat" className="animal cat" />
          <img src="/fish-promo.png" alt="fish" className="animal fish" />
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;