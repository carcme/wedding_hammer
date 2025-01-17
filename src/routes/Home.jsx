import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageCard from "../components/ImageCard";

import Hero from "../components/Hero";
import HeroSection from "../components/HeroSection";
import WhyUs from "../components/WhyUs";
import HeroSplit from "../components/HeroSplit";
import { getAssetImageURL } from "@/lib/image-util";

const Home = () => {
  const blendMode = true;
  const image = getAssetImageURL("forest_wedding.webp");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSplit />

      <ImageCard image={image} blendMode={blendMode} />
      <WhyUs />
    </>
  );
};

export default Home;
