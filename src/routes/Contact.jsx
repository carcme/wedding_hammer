import React, { useEffect } from "react";
import ContactUs from "../components/Contact/ContactUs";
import SubscribeComponent from "@/components/Forms/SubscribeComponent";
import contactUsText from "@/data/contactPageText";
import { getLanguage } from "@/LanguageContext";

const Contact = () => {
  const text = getLanguage(contactUsText);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="section-divider bg-almostWhite">
        <div className="flex flex-col w-full px-4 pt-40 text-center text-primaryGreen lg:px-40">
          <h1 className="mb-4 text-2xl font-bold sm:text-5xl animate-bgBlur">
            {text.title}
          </h1>
          <p className="mx-auto text-base font-light leading-relaxed text-gray-600 lg:w-2/3 animate-bgBlur sm:text-xl font-Montserrat">
            {text.subTitle}
          </p>
        </div>
      </div>
      <ContactUs text={text} />
      <div className=" section-divider bg-almostWhite" />
      <SubscribeComponent />
    </>
  );
};

export default Contact;
