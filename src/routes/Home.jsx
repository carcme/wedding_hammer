import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageCard from "../components/ImageCard";

import Hero from "../components/Hero";
import HeroSection from "../components/HeroSection";
import WhyUs from "../components/WhyUs";
import HeroSplit from "../components/HeroSplit";

const Home = () => {
  const blendMode = true;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSplit />

      <ImageCard
        image="/assets/image/forest_wedding.webp"
        blendMode={blendMode}
      />
      <WhyUs />
    </>
  );
};

export default Home;
