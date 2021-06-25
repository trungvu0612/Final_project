import React from "react";
import { Link } from "react-router-dom";

export default function ItemBlog({ time, img, title, content }) {
  return (
    <div className="col-12 col-md-6">
      {/* Card */}
      <div className="card mb-7">
        {/* Badge */}
        <div className="badge badge-white card-badge">
          <time className="text-uppercase" dateTime="2019-06-20">
            {time}
          </time>
        </div>
        {/* Image */}
        <img className="card-img-top" src={img} alt="..." />
        {/* Body */}
        <div className="card-body px-0">
          {/* Heading */}
          <h5>{title}</h5>
          {/* Text */}
          <p className="mb-0 text-gray-500">{content}</p>
          {/* Button */}
          <Link
            className="btn btn-link stretched-link px-0 text-reset"
            to="/blog-post"
          >
            Read More <i className="fe fe-arrow-right ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
