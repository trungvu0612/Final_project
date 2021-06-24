import React from "react";
import { NavLink, Switch, useRouteMatch } from "react-router-dom";
import { Route } from "workbox-routing";
import AccountAddress from "./component/account-address";
import AccountOrder from "./component/account-order";
import AccountPayment from "./component/account-payment";
import AccountPersonalInfo from "./component/account-personal-info";
import AccountWishlist from "./component/account-wishlist";

export default function Account() {
  let { path } = useRouteMatch();
  return (
    <>
      {/* CONTENT */}
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Heading */}
              <h3 className="mb-10">My Account</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3">
              {/* Nav */}
              <nav className="mb-10 mb-md-0">
                <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                  <NavLink
                    exact
                    className="list-group-item list-group-item-action dropright-toggle "
                    to={`${path}`}
                  >
                    Orders
                  </NavLink>
                  <NavLink
                    className="list-group-item list-group-item-action dropright-toggle "
                    to={`${path}/account-wish-list`}
                  >
                    Widhlist
                  </NavLink>
                  <NavLink
                    className="list-group-item list-group-item-action dropright-toggle "
                    to={`${path}/account-personal-info`}
                  >
                    Personal Info
                  </NavLink>
                  <NavLink
                    className="list-group-item list-group-item-action dropright-toggle "
                    to={`${path}/account-address`}
                  >
                    Addresses
                  </NavLink>
                  <NavLink
                    className="list-group-item list-group-item-action dropright-toggle "
                    to={`${path}/account-payment`}
                  >
                    Payment Methods
                  </NavLink>
                  <NavLink
                    className="list-group-item list-group-item-action dropright-toggle"
                    to="#!"
                  >
                    Logout
                  </NavLink>
                </div>
              </nav>
            </div>
            <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
              <Switch>
                <Route path={`${path}`} component={AccountOrder} />
                <Route
                  path={`${path}/account-wish-list`}
                  component={AccountWishlist}
                />
                <Route
                  exact
                  path={`${path}/account-personal-info`}
                  component={AccountPersonalInfo}
                />
                <Route
                  path={`${path}/account-address`}
                  component={AccountAddress}
                />
                <Route
                  path={`${path}/account-payment`}
                  component={AccountPayment}
                />
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
