import React from "react";

export default function TopSellProduct({
  badge,
  imgback,
  imgfront,
  category,
  title,
  price,
}) {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      {/* Card */}
      <div className="card mb-7">
        {/* Badge */}
        <div className="badge badge-white card-badge card-badge-left text-uppercase">
          New
        </div>
        {/* Image */}
        <div className="card-img">
          {/* Image */}
          <a className="card-img-hover" href="product.html">
            <img
              className="card-img-top card-img-back"
              src={imgback}
              alt="..."
            />
            <img
              className="card-img-top card-img-front"
              src={imgfront}
              alt="..."
            />
          </a>
          {/* Actions */}
          <div className="card-actions">
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="modal"
                data-target="#modalProduct"
              >
                <i className="fe fe-eye" />
              </button>
            </span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
              >
                <i className="fe fe-shopping-cart" />
              </button>
            </span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
              >
                <i className="fe fe-heart" />
              </button>
            </span>
          </div>
        </div>
        {/* Body */}
        <div className="card-body px-0">
          {/* Category */}
          <div className="font-size-xs">
            <a className="text-muted" href="shop.html">
              {category}
            </a>
          </div>
          {/* Title */}
          <div className="font-weight-bold">
            <a className="text-body" href="product.html">
              {title}
            </a>
          </div>
          {/* Price */}
          <div className="font-weight-bold text-muted">{price}</div>
        </div>
      </div>
    </div>
  );
}
