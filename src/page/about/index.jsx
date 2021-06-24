import React from "react";
import OurStory from "./component/OurStory";
import Wellcome from "./component/Wellcome";
import AboutSon from "./component/AboutSon";
import OurStory2 from "./component/OurStory2";
import Slogan from "./component/Slogan";
import Images from "./component/Images";
import Social from "./component/Social";
import Features from "../../component/Features";
import Reviews from "../../component/Reviews";

export default function About() {
  return (
    <div>
      <Wellcome />
      <OurStory />
      <AboutSon />
      <OurStory2 />
      <Slogan />
      <Images />
      <Reviews />
      <Social />
      <Features />
    </div>
  );
}
