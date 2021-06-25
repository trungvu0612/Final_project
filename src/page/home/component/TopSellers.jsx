import React from "react";
import { Link } from "react-router-dom";
import TopSellProduct from "../../../component/TopSellProduct";

export default function TopSellers() {
  return (
    <>
      {/* TOP SELLERS */}
      <section className="py-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              {/* Heading */}
              <h2 className="mb-4 text-center">Top month Sellers</h2>
              {/* Nav */}
              <div className="nav justify-content-center mb-10">
                <Link
                  className="nav-link active"
                  to="#topSellersTab"
                  data-toggle="tab"
                >
                  Women
                </Link>
                <Link
                  className="nav-link"
                  to="#topSellersTab"
                  data-toggle="tab"
                >
                  Men
                </Link>
                <Link
                  className="nav-link"
                  to="#topSellersTab"
                  data-toggle="tab"
                >
                  Kids
                </Link>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="topSellersTab">
              <div className="row">
                <TopSellProduct
                  imgback="/img/products/product-120.jpg"
                  imgfront="/img/products/product-5.jpg"
                  category="Shoes"
                  title="Leather mid-heel Sandals"
                  price="$129.00"
                />
                <TopSellProduct
                  imgback="/img/products/product-121.jpg"
                  imgfront="/img/products/product-6.jpg"
                  category="Dresses"
                  title="Cotton floral print Dress"
                  price="$40.00"
                />
                <div className="col-6 col-md-4 col-lg-3">
                  {/* Card */}
                  <div className="card mb-7">
                    {/* Badge */}
                    <div className="badge badge-dark card-badge card-badge-left text-uppercase">
                      Sale
                    </div>
                    {/* Image */}
                    <div className="card-img">
                      {/* Image */}
                      <Link className="card-img-hover" to="/product">
                        <img
                          className="card-img-top card-img-back"
                          src="/img/products/product-122.jpg"
                          alt="..."
                        />
                        <img
                          className="card-img-top card-img-front"
                          src="/img/products/product-7.jpg"
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
                          Shoes
                        </Link>
                      </div>
                      {/* Title */}
                      <div className="font-weight-bold">
                        <Link className="text-body" to="/product">
                          Leather Sneakers
                        </Link>
                      </div>
                      {/* Price */}
                      <div className="font-weight-bold">
                        <span className="font-size-xs text-gray-350 text-decoration-line-through">
                          $85.00
                        </span>
                        <span className="text-primary">$85.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  {/* Card */}
                  <div className="card mb-7">
                    {/* Image */}
                    <div className="card-img">
                      {/* Image */}
                      <Link to="#!">
                        <img
                          className="card-img-top card-img-front"
                          src="/img/products/product-8.jpg"
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
                          Tops
                        </Link>
                      </div>
                      {/* Title */}
                      <div className="font-weight-bold">
                        <Link className="text-body" to="/product">
                          Cropped cotton Top
                        </Link>
                      </div>
                      {/* Price */}
                      <div className="font-weight-bold text-muted">$29.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  {/* Card */}
                  <div className="card mb-7">
                    {/* Image */}
                    <div className="card-img">
                      {/* Image */}
                      <Link to="#!">
                        <img
                          className="card-img-top card-img-front"
                          src="/img/products/product-9.jpg"
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
                          Dresses
                        </Link>
                      </div>
                      {/* Title */}
                      <div className="font-weight-bold">
                        <Link className="text-body" to="/product">
                          Floral print midi Dress
                        </Link>
                      </div>
                      {/* Price */}
                      <div className="font-weight-bold text-muted">$50.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  {/* Card */}
                  <div className="card mb-7">
                    {/* Badge */}
                    <div className="badge badge-dark card-badge card-badge-left text-uppercase">
                      Sale
                    </div>
                    {/* Image */}
                    <div className="card-img">
                      {/* Image */}
                      <Link className="card-img-hover" to="/product">
                        <img
                          className="card-img-top card-img-back"
                          src="/img/products/product-123.jpg"
                          alt="..."
                        />
                        <img
                          className="card-img-top card-img-front"
                          src="/img/products/product-10.jpg"
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
                          Bags
                        </Link>
                      </div>
                      {/* Title */}
                      <div className="font-weight-bold">
                        <Link className="text-body" to="/product">
                          Suede cross body Bag
                        </Link>
                      </div>
                      {/* Price */}
                      <div className="font-weight-bold">
                        <span className="font-size-xs text-gray-350 text-decoration-line-through">
                          $79.00
                        </span>
                        <span className="text-primary">$49.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  {/* Card */}
                  <div className="card mb-7">
                    {/* Image */}
                    <div className="card-img">
                      {/* Image */}
                      <Link className="card-img-hover" to="/product">
                        <img
                          className="card-img-top card-img-back"
                          src="/img/products/product-124.jpg"
                          alt="..."
                        />
                        <img
                          className="card-img-top card-img-front"
                          src="/img/products/product-11.jpg"
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
                          Skirts
                        </Link>
                      </div>
                      {/* Title */}
                      <div className="font-weight-bold">
                        <Link className="text-body" to="/product">
                          Printed Link-line Skirt
                        </Link>
                      </div>
                      {/* Price */}
                      <div className="font-weight-bold text-muted">$79.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  {/* Card */}
                  <div className="card mb-7">
                    {/* Badge */}
                    <div className="badge badge-white card-badge card-badge text-uppercase">
                      New
                    </div>
                    {/* Image */}
                    <div className="card-img">
                      {/* Image */}
                      <Link to="#!">
                        <img
                          className="card-img-top card-img-front"
                          src="/img/products/product-12.jpg"
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
                          Shoes
                        </Link>
                      </div>
                      {/* Title */}
                      <div className="font-weight-bold">
                        <Link className="text-body" to="/product">
                          Heel strappy Sandals
                        </Link>
                      </div>
                      {/* Price */}
                      <div className="font-weight-bold text-muted">$90.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* Link  */}
              <div className="mt-7 text-center">
                <Link className="link-underline" to="#!">
                  Discover more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
