import React from "react";
import Features from "../../component/Features";
import Reviews from "../../component/Reviews";
import BestPick from "./component/BestPick";
import Brands from "./component/Brands";
import Categories from "./component/Categories";
import CountDown from "./component/CountDown";
import TopSellers from "./component/TopSellers";

export default function Home() {
  return (
    <div>
      <Categories />
      <Features />
      <BestPick />
      <TopSellers />
      <CountDown />
      <Reviews />
      <Brands />
    </div>
  );
}
