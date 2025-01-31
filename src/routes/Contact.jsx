import React, { useEffect } from "react";
import ContactUs from "../components/Forms/ContactUs";
import SubscribeComponent from "@/components/Forms/SubscribeComponent";
import contactUsText from "@/data/contactPageText";
import Faq from "../components/Faq";
import faqData from "@/data/faqData";
import { getLanguage, useLanguage } from "@/LanguageContext";
import { Helmet } from "react-helmet-async";
import helmetData from "@/data/helmetData";
import Carousel from "../components/temp/Carousel1";
const Contact = () => {
  const text = getLanguage(contactUsText);
  const faq = getLanguage(faqData);
  const meta = getLanguage(helmetData);

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet htmlAttributes={{ lang: useLanguage() }}>
        <title>{meta.titleContact}</title>
        <meta name="description" content={meta.descContact} />
        <meta name="robots" content={meta.robots} />
        <meta name="charSet" content={meta.charset} />
      </Helmet>

      <div className="bg-almostWhite">
        <div className="font-Jost flex w-full flex-col px-4 pt-40 text-center text-primaryGreen lg:px-40">
          <h1 className="animate-bgBlur mb-4 text-2xl font-bold sm:text-5xl">
            {text.title}
          </h1>
          <p className="animate-bgBlur mx-auto text-base font-light leading-relaxed text-gray-600 sm:text-xl lg:w-2/3">
            {text.subTitle}
          </p>
        </div>
      </div>
      <ContactUs text={text} />
      <Faq headline={faq.title} subheading={faq.subTitle} />
      <SubscribeComponent />
    </>
  );
};

export default Contact;
