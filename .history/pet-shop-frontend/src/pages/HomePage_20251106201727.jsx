import React from "react";
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import DiscountBanner from "../components/DiscountBanner";
import DiscountBanner from "../components/DiscountBanner";

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <Categories />
      <DiscountBanner />
      <SaleSection />
    </div>
  );
};

export default HomePage;