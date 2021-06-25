import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <>
      {/* CATEGORIES */}
      <section>
        <div
          className="row no-gutters d-block d-lg-flex flickity flickity-lg-none"
          data-flickity='{"watchCSS": true}'
        >
          {/* Item */}
          <div
            className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover"
            style={{ backgroundImage: "url(/img/covers/cover-1.jpg)" }}
          >
            <div
              className="card bg-dark-5 bg-hover text-white text-center"
              style={{ minHeight: "470px" }}
            >
              <div className="card-body mt-auto mb-n11 py-8">
                {/* Heading */}
                <h1 className="mb-0 font-weight-bolder">Women</h1>
              </div>
              <div className="card-body mt-auto py-8">
                {/* Button */}
                <Link className="btn btn-white stretched-link" to="/shop">
                  Shop Women <i className="fe fe-arrow-right ml-2" />
                </Link>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover"
            style={{ backgroundImage: "url(/img/covers/cover-2.jpg)" }}
          >
            <div
              className="card bg-dark-5 bg-hover text-white text-center"
              style={{ minHeight: "470px" }}
            >
              <div className="card-body mt-auto mb-n11 py-8">
                {/* Heading */}
                <h1 className="mb-0 font-weight-bolder">Men</h1>
              </div>
              <div className="card-body mt-auto py-8">
                {/* Button */}
                <Link className="btn btn-white stretched-link" to="/shop">
                  Shop Men <i className="fe fe-arrow-right ml-2" />
                </Link>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover"
            style={{ backgroundImage: "url(/img/covers/cover-3.jpg)" }}
          >
            <div
              className="card bg-dark-5 bg-hover text-white text-center"
              style={{ minHeight: "470px" }}
            >
              <div className="card-body mt-auto mb-n11 py-8">
                {/* Heading */}
                <h1 className="mb-0 font-weight-bolder">Kids</h1>
              </div>
              <div className="card-body mt-auto py-8">
                {/* Button */}
                <Link className="btn btn-white stretched-link" to="/shop">
                  Shop Kids <i className="fe fe-arrow-right ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
