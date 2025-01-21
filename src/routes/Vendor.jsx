import React, { useEffect } from "react";
import HeroImgArch from "../components/Hero/HeroImgArch";
import Vendors from "../components/Vendors";
import vendorsData from "../data/vendorsData";
import Faq from "../components/Faq";
import faqData from "@/data/faqData";
import { getLanguage } from "../LanguageContext";

const Vendor = () => {
  const data = getLanguage(vendorsData);

  const faq = getLanguage(faqData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroImgArch
        headline={data.title}
        subheading={data.subTitle}
        image={"forest_wedding.webp"}
      />
      <Vendors sections={data.sections} />
      <Faq headline={faq.title} subheading={faq.subTitle} />
    </>
  );
};

export default Vendor;
