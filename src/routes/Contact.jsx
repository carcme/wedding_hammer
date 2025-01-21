import React, { useEffect } from "react";
import ContactUs from "../components/Forms/ContactUs";
import SubscribeComponent from "@/components/Forms/SubscribeComponent";
import contactUsText from "@/data/contactPageText";
import Faq from "../components/Faq";
import faqData from "@/data/faqData";
import { getLanguage } from "@/LanguageContext";

const Contact = () => {
  const text = getLanguage(contactUsText);
  const faq = getLanguage(faqData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-almostWhite">
        <div className="flex w-full flex-col px-4 pt-40 text-center text-primaryGreen lg:px-40">
          <h1 className="animate-bgBlur mb-4 text-2xl font-bold sm:text-5xl">
            {text.title}
          </h1>
          <p className="animate-bgBlur mx-auto font-Montserrat text-base font-light leading-relaxed text-gray-600 sm:text-xl lg:w-2/3">
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
