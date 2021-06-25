import React from "react";

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
          <a
            className="btn btn-link stretched-link px-0 text-reset"
            href="blog-post.html"
          >
            Read More <i className="fe fe-arrow-right ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
