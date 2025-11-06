import React from "react";
import { Link } from "react-router-dom";
import "./MainBanner.css";

const MainBanner = () => {
  return (
    <section className="main-banner">
      <div className="main-banner__overlay">
        <div className="main-banner__content">
        <h1>Amazing Discounts <br /> on Pets Products!</h1>
          <button className="main-banner__button">Check out</button>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;