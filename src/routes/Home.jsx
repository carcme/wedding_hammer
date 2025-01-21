import React, { useEffect } from "react";
import ImageCard from "../components/ImageCard";
import WhyUs from "../components/WhyUs";
import HeroSplit from "../components/HeroSplit";
import Faq from "../components/Faq";
import faqData from "@/data/faqData";
import { getAssetImageURL } from "@/lib/image-util";
import { getLanguage } from "@/LanguageContext";

const Home = () => {
  const blendMode = true;
  const image = getAssetImageURL("forest_cememony.webp");
  const faq = getLanguage(faqData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSplit />

      <ImageCard image={image} blendMode={blendMode} />
      <WhyUs />
      <Faq headline={faq.title} subheading={faq.subTitle} />
    </>
  );
};

export default Home;
