import React, { useEffect } from "react";
import ImageCard from "../components/ImageCard";
import WhyUs from "../components/WhyUs";
import HeroSplit from "../components/HeroSplit";
import HammerIcon from "../components/HammerIcon";
import Faq from "../components/Faq";
import faqData from "@/data/faqData";
import helmetData from "@/data/helmetData";
import AnimatedPageSliderData from "@/data/AnimatedPageSliderData";

import { getAssetImageURL } from "@/lib/image-util";
import { getLanguage, useLanguage } from "@/LanguageContext";
import { Helmet } from "react-helmet-async";
import AnimatedPageSlider from "../components/AnimatedPageSlider";

const Home = () => {
  const blendMode = true;
  const image = getAssetImageURL("forest_cememony.webp");
  const faq = getLanguage(faqData);
  const meta = getLanguage(helmetData);
  const sliderData = getLanguage(AnimatedPageSliderData);

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet htmlAttributes={{ lang: useLanguage() }}>
        <title>{meta.titleHome}</title>
        <meta name="description" content={meta.descHome} />
        <meta name="robots" content={meta.robots} />
        <meta name="charSet" content={meta.charset} />
      </Helmet>

      <HeroSplit />
      <AnimatedPageSlider data={sliderData} />
      <HammerIcon size={500} color="#B2924E" />

      <ImageCard image={image} blendMode={blendMode} />
      <WhyUs />
      <Faq headline={faq.title} subheading={faq.subTitle} />
    </>
  );
};

export default Home;
