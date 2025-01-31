import React from "react";
import SubscribeWidget from "./SubscribeWidget";
import subscribeText from "@/data/subscribeComponentText";
import { getLanguage } from "@/LanguageContext";

const Subscribe = () => {
  const text = getLanguage(subscribeText);

  return (
    <section className="bg-primaryHoneyDew">
      <div className="font-Jost mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-md px-4 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-primaryGreenDark sm:text-4xl">
            {text.title}
          </h2>
          <p className="font-Jost mx-auto mb-8 max-w-2xl font-light text-[#717171] sm:text-xl md:mb-12">
            {text.subTitle}
          </p>
          <SubscribeWidget source="component" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
