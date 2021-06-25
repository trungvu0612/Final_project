import React from "react";
import HeaderBlogPost from "./component/HeaderBlogPost";
import Img1 from "./component/Img1";
import Content1 from "./component/Content1";
import Img2 from "./component/Img2";
import Content2 from "./component/Content2";

export default function BlogPost() {
  return (
    <>
      {/* ARTICLE */}
      <article className="pt-7">
        <HeaderBlogPost />
        <Img1 />
        <Content1 />
        <Img2 />
        <Content2 />
      </article>
    </>
  );
}
