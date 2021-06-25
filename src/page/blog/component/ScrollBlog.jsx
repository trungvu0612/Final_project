import React from "react";

export default function ScrollBlog() {
  return (
    <div className="row">
      <div className="col-12">
        {/* Progress */}
        <div className="row justify-content-center mt-7">
          <div className="col-12 text-center">
            {/* Caption */}
            <p className="font-size-sm text-muted">Showing 16 of 24 products</p>
            {/* Progress */}
            <div
              className="progress mx-auto mb-7"
              style={{ maxWidth: "250px" }}
            >
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={{ width: "66%" }}
                aria-valuenow={66}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            {/* Button */}
            <button className="btn btn-sm btn-outline-dark">Load more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
