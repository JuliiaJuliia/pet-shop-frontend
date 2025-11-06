import React from "react";
import "./DiscountBanner.css";

const DiscountBanner = () => {
  return (
    <section className="discount-banner">
      <div className="discount-banner__content">
        <h2 className="discount-banner__title">5% Off on your first order</h2>

        <div className="discount-banner__form">
          <h3>Get Your Discount</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Submit</button>
          </form>

          <img src="/Pets.jpg" alt="pets" className="discount-banner__image" />
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;