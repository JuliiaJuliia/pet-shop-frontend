import React from "react";
import "./DiscountBanner.css";

export default function DiscountBanner() {
  return (
    <section className="discount-banner">
      <div className="discount-banner__overlay">
        <div className="discount-banner__content">
          <h2>Special Offer!</h2>
          <p>Get 10% off on your first order</p>
          <button className="discount-banner__button">Claim Discount</button>
        </div>
      </div>
    </section>
  );
}