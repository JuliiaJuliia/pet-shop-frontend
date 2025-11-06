import React from "react";
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import DiscountBanner from "../components/DiscountBanner";

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <Categories />
      <DiscountBanner />   {/* 👈 він має бути тут */}
    </div>
  );
};

export default HomePage;