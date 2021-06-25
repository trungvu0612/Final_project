import React from "react";
import AllBlog from "./component/AllBlog";
import MenuBlog from "./component/MenuBlog";
import ScrollBlog from "./component/ScrollBlog";

export default function Blog() {
  return (
    <>
      {/* CONTENT */}
      <section className="pt-7 pb-12">
        <div className="container">
          <MenuBlog />
          <AllBlog />
          <ScrollBlog />
        </div>
      </section>
    </>
  );
}
