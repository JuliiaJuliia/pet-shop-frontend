<section className="discount-banner">

  <h2 className="discount-banner__title">5% off on the first order</h2>

  <div className="discount-banner__content">
  <div className="discount-banner__left">
      <img src="/Pets.jpg" alt="pets" className="discount-banner__image" />
    </div>

    <div className="discount-banner__form">
      
    </div>
  </div>

</section>


import React from "react";
import { Link } from "react-router-dom";
import "./MainBanner.css";

const MainBanner = () => {
  return (
    <section className="main-banner">
      <div className="main-banner__overlay">
        <div className="main-banner__content">
        <h1>Amazing Discounts <br /> on Pets Products!</h1>
        
        </div>
      </div>
    </section>
  );
};


function DiscountBanner() {
    return <div>Discount Banner</div>;
  }
  
  export default DiscountBanner;