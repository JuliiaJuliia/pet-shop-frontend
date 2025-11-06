import React from "react";
import MainBanner from "../components/MainBanner";

const HomePage = () => {
  return (
    <div>
      <MainBanner />
    </div>
  );
};

export default HomePage;

import Categories from "../components/Categories";

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <Categories />
    </div>
  );
};