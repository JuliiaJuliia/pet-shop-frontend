import React from "react";
import "./MainBanner.css";

const MainBanner = () => {
  return (
    <section className="main-banner">
      <div className="main-banner__content">
        <h1>Amazing Discounts on Pet Products!</h1>
        <p>Up to 50% off on food, toys, and accessories for your beloved pets.</p>
        <button className="main-banner__button">Check out</button>
      </div>
      <div className="main-banner__image">
      <img src="/banner-dog.png" alt="Pet Banner" />
      </div>
    </section>
  );
};


export default MainBanner;