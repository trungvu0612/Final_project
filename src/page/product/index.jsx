import React from "react";
import Features from "../../component/Features";
import ReviewsProduct from "./component/ReviewsProduct";
import TabProduct from "./component/TabProduct";
import Description from "./component/Description";
import InfoProduct from "./component/InfoProduct";

export default function Product() {
  return (
    <>
      {/* PRODUCT */}
      <InfoProduct />
      {/* DESCRIPTION */}
      <Description />
      {/* PRODUCTS */}
      <TabProduct />
      {/* REVIEWS */}
      <ReviewsProduct />
      {/* FEATURES */}
      <Features />
    </>
  );
}
