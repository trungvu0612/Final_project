import React from "react";
import ContactLeft from "./component/ContactLeft";
import ContactRight from "./component/ContactRight";

export default function ContactUs() {
  return (
    <>
      {/* CONTENT */}
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Heading */}
              <h3 className="mb-10 text-center">Contact Us</h3>
            </div>
          </div>
          <div className="row justify-content-between">
            <ContactLeft />
            <ContactRight />
          </div>
        </div>
      </section>
    </>
  );
}
