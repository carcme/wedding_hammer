import React, { useEffect } from "react";
import HeroImgArch from "../components/Hero/HeroImgArch";
import FullPage from "../components/FullPage/FullPage";
import Vendors from "../components/Vendors";
import vendorsData from "../data/vendorsData";
import Faq from "../components/Faq";
import faqData from "@/data/faqData";
import { getLanguage, useLanguage } from "@/LanguageContext";
import { Helmet } from "react-helmet-async";
import helmetData from "@/data/helmetData";

const Vendor = () => {
  const data = getLanguage(vendorsData);
  const faq = getLanguage(faqData);
  const meta = getLanguage(helmetData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet htmlAttributes={{ lang: useLanguage() }}>
        <title>{meta.titleVenue}</title>
        <meta name="description" content={meta.descVenue} />
        <meta name="robots" content={meta.robots} />
        <meta name="charSet" content={meta.charset} />
      </Helmet>
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
