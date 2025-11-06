import React from "react";
import "./DiscountBanner.css";

const DiscountBanner = () => {
  return (
    <section className="discount-banner">
      <div className="discount-banner__content">
        <div className="discount-banner__left">
          <h2>5% off on the first order</h2>
          <img src="/Pets.jpg" alt="pets" className="discount-banner__image" />
        </div>

        <div className="discount-banner__form">
          <form>Phone number
            <input type="text" placeholder="Name" required />

            <input type="email" placeholder="Email" required />
            <button type="submit">Get Your Discount</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;