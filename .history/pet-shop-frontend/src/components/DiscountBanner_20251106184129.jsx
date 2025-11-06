import React from "react";
import "./DiscountBanner.css";

export default function DiscountBanner() {
  return (
    <section className="discount-banner">
      <div className="discount-banner__overlay">
        <div className="discount-banner__content">
          <h2>5% off on the first order</h2>
          <button className="discount-banner__button">Get a discount</button>
        </div>
      </div>
    </section>
  );
}