import React, { useEffect } from "react";
import Faq from "../components/Faq";
import faqData from "@/data/faqData";
import { getAssetImageURL } from "@/lib/image-util";
import { getLanguage } from "@/LanguageContext";
import image from "@/assets/image/girlForest.jpg";
import InfoCardDecorated from "../components/InfoCardDecorated";

const About = () => {
  const faq = getLanguage(faqData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <InfoCardDecorated />
      <Faq headline={faq.title} subheading={faq.subTitle} />
    </>
  );
};

export default About;
