import React, { useEffect } from "react";
import Faq from "../components/Faq";
import faqData from "@/data/faqData";
import { getAssetImageURL } from "@/lib/image-util";
import { getLanguage, useLanguage } from "@/LanguageContext";
import { Helmet } from "react-helmet-async";
import helmetData from "@/data/helmetData";
import image from "@/assets/image/girlForest.jpg";
import InfoCardDecorated from "../components/InfoCardDecorated";

const About = () => {
  const faq = getLanguage(faqData);
  const meta = getLanguage(helmetData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet htmlAttributes={{ lang: useLanguage() }}>
        <title>{meta.titleAbout}</title>
        <meta name="description" content={meta.descAbout} />
        <meta name="robots" content={meta.robots} />
        <meta name="charSet" content={meta.charset} />
      </Helmet>
      <InfoCardDecorated />
      <Faq headline={faq.title} subheading={faq.subTitle} />
    </>
  );
};

export default About;
