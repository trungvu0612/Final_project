import React from "react";

export default function Img2() {
  return (
    <>
      {/* Images */}
      <section className="pt-10">
        <div className="container">
          <div className="row">
            <div className="col-6">
              {/* Image */}
              <img className="img-fluid" src="/img/blog/blog-4.jpg" alt="..." />
            </div>
            <div className="col-6">
              {/* Image */}
              <img className="img-fluid" src="/img/blog/blog-5.jpg" alt="..." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
