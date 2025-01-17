import React from "react";
import { useLanguage, useLanguageChange } from "../LanguageContext";

const Pricing = () => {
  const lang = useLanguage();
  const langChange = useLanguageChange();
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-4 text-3xl font-bold text-center text-neutral-300">
        Contact Page <span className="inline-block text-5xl">{lang}</span>
        <div className="flex gap-4 ">
          <button
            onClick={() => {
              langChange(`${lang} === 'en' ? "de" : "en"`);
            }}
            className="p-2 text-sm border rounded-md bg-primaryGreen hover:bg-white hover:text-primaryGreen"
          >
            {lang === "en" ? "Change to DE" : "Change to EN"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Pricing;
