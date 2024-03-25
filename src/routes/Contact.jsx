import React, { useContext } from "react";
import { useLanguage, useLanguageChange } from "../LanguageContext";
import image from "@/assets/greenCarpet.jpg";

const About = () => {
  const lang = useLanguage();
  const langChange = useLanguageChange();

  console.log("Contact page " + lang);

  return (
    <>
      <section
        className="relative w-full h-screen bg-bottom bg-cover color-white"
        style={{
          background: `url(${image})`,
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.2)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-screen gap-4 text-3xl font-bold text-center text-neutral-300">
          Contact Page <span className="inline-block text-5xl">{lang}</span>
          <div className="flex gap-4 ">
            <button
              onClick={() => {
                langChange("de");
              }}
              className="p-2 text-sm bg-black border hover:bg-white hover:text-black"
            >
              German
            </button>
            <button
              onClick={() => {
                langChange("en");
              }}
              className="p-2 text-sm bg-black border hover:bg-white hover:text-black"
            >
              English
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
