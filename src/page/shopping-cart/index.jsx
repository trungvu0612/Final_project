import React from "react";
import Features from "../../component/Features";
import ListShopping from "./component/ListShopping";
import Total from "./component/Total";

export default function ShoppingCart() {
  return (
    <>
      {/* CONTENT */}
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Heading */}
              <h3 className="mb-10 text-center">Shopping Cart</h3>
            </div>
          </div>
          <div className="row">
            <ListShopping />
            <Total />
          </div>
        </div>
      </section>
      {/* FEATURES */}
      <Features />
    </>
  );
}
