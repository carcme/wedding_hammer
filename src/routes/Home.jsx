import React from "react";
import { Link } from "react-router-dom";
import ImageCard from "../components/ImageCard";

import Hero from "../components/Hero";
import HeroSection from "../components/HeroSection";
import WhyUs from "../components/WhyUs";
import HeroSplit from "../components/HeroSplit";

const Home = () => {
  const title = "A Gathering Together";
  const subTitle = "Your events venue just 30mins from Schonefeld airport";
  const blendMode = true;

  return (
    <>
      <HeroSplit />
      {/* <Hero
        image="/assets/image/fridge.webp"
        title={title}
        subTitle={subTitle}
        blendMode={blendMode}
      /> */}
      {/* <HeroSection /> */}
      <ImageCard
        image="/assets/image/forest_wedding.webp"
        blendMode={blendMode}
      />
      <WhyUs />
    </>
  );
};

export default Home;
