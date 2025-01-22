import React, { useEffect } from "react";
import ImageCard from "../components/ImageCard";
import WhyUs from "../components/WhyUs";
import HeroSplit from "../components/HeroSplit";
import Faq from "../components/Faq";
import faqData from "@/data/faqData";
import helmetData from "@/data/helmetData";

import { getAssetImageURL } from "@/lib/image-util";
import { getLanguage, useLanguage } from "@/LanguageContext";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const blendMode = true;
  const image = getAssetImageURL("forest_cememony.webp");
  const faq = getLanguage(faqData);
  const meta = getLanguage(helmetData);

  useEffect(() => {
    window.scrollTo(0, 0);
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

      <ImageCard image={image} blendMode={blendMode} />
      <WhyUs />
      <Faq headline={faq.title} subheading={faq.subTitle} />
    </>
  );
};

export default Home;
