import React from "react";

export default function MenuBlog() {
  return (
    <div className="row">
      <div className="col-12">
        {/* Heading */}
        <h3 className="mb-7 text-center">Our Blog</h3>
        {/* Nav */}
        <nav className="nav justify-content-center mb-10">
          <a className="nav-link active" href="#">
            All
          </a>
          <a className="nav-link" href="#">
            Company
          </a>
          <a className="nav-link" href="#">
            Brand
          </a>
          <a className="nav-link" href="#">
            Fashion
          </a>
          <a className="nav-link" href="#">
            Shop
          </a>
        </nav>
      </div>
    </div>
  );
}
