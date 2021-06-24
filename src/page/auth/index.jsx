import React from "react";
import NewCustomer from "./component/NewCustomer";
import ReturningCustomer from "./component/ReturningCustomer";

export default function Auth() {
  return (
    <>
      {/* CONTENT */}
      <section className="py-12">
        <div className="container">
          <div className="row">
            <ReturningCustomer />
            <NewCustomer />
          </div>
        </div>
      </section>
    </>
  );
}
