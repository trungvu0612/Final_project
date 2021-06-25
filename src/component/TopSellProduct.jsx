import React from "react";
import { Link } from "react-router-dom";

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
          <Link className="card-img-hover" to="/product">
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
          </Link>
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
            <Link className="text-muted" to="/shop">
              {category}
            </Link>
          </div>
          {/* Title */}
          <div className="font-weight-bold">
            <Link className="text-body" to="/product">
              {title}
            </Link>
          </div>
          {/* Price */}
          <div className="font-weight-bold text-muted">{price}</div>
        </div>
      </div>
    </div>
  );
}
