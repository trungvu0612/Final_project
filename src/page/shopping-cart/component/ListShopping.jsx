import React from "react";

export default function ListShopping() {
  return (
    <div className="col-12 col-md-7">
      {/* List group */}
      <ul className="list-group list-group-lg list-group-flush-x mb-6">
        <li className="list-group-item">
          <div className="row align-items-center">
            <div className="col-3">
              {/* Image */}
              <a href="product.html">
                <img
                  src="/img/products/product-6.jpg"
                  alt="..."
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col">
              {/* Title */}
              <div className="d-flex mb-2 font-weight-bold">
                <a className="text-body" href="product.html">
                  Cotton floral print
                </a>{" "}
                <span className="ml-auto">$40.00</span>
              </div>
              {/* Text */}
              <p className="mb-7 font-size-sm text-muted">
                Size: M <br />
                Color: Red
              </p>
              {/*Footer */}
              <div className="d-flex align-items-center">
                {/* Select */}
                <select className="custom-select custom-select-xxs w-auto">
                  <option value={1}>1</option>
                  <option value={1}>2</option>
                  <option value={1}>3</option>
                </select>
                {/* Remove */}
                <a className="font-size-xs text-gray-400 ml-auto" href="#!">
                  <i className="fe fe-x" /> Remove
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row align-items-center">
            <div className="col-3">
              {/* Image */}
              <a href="product.html">
                <img
                  src="/img/products/product-10.jpg"
                  alt="..."
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col">
              {/* Title */}
              <div className="d-flex mb-2 font-weight-bold">
                <a className="text-body" href="product.html">
                  Suede cross body Bag
                </a>{" "}
                <span className="ml-auto">$49.00</span>
              </div>
              {/* Text */}
              <p className="mb-7 font-size-sm text-muted">Color: Brown</p>
              {/*Footer */}
              <div className="d-flex align-items-center">
                {/* Select */}
                <select className="custom-select custom-select-xxs w-auto">
                  <option value={1}>1</option>
                  <option value={1}>2</option>
                  <option value={1}>3</option>
                </select>
                {/* Remove */}
                <a className="font-size-xs text-gray-400 ml-auto" href="#!">
                  <i className="fe fe-x" /> Remove
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
      {/* Footer */}
      <div className="row align-items-end justify-content-between mb-10 mb-md-0">
        <div className="col-12 col-md-7">
          {/* Coupon */}
          <form className="mb-7 mb-md-0">
            <label
              className="font-size-sm font-weight-bold"
              htmlFor="cartCouponCode"
            >
              Coupon code:
            </label>
            <div className="row form-row">
              <div className="col">
                {/* Input */}
                <input
                  className="form-control form-control-sm"
                  id="cartCouponCode"
                  type="text"
                  placeholder="Enter coupon code*"
                />
              </div>
              <div className="col-auto">
                {/* Button */}
                <button className="btn btn-sm btn-dark" type="submit">
                  Apply
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-auto">
          {/* Button */}
          <button className="btn btn-sm btn-outline-dark">Update Cart</button>
        </div>
      </div>
    </div>
  );
}
