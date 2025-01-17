import React, { useEffect } from "react";
import HeroImgArch from "../components/Hero/HeroImgArch";
import Vendors from "../components/Vendors";
import vendorsData from "../data/vendorsData";
import Faq from "../components/Faq";
import { getLanguage } from "../LanguageContext";

const Temp = () => {
  const data = getLanguage(vendorsData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroImgArch headline={data.title} subheading={data.subTitle} />
      <Vendors sections={data.sections} />
      <Faq />
    </>
  );
};

export default Temp;
