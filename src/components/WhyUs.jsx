import React from "react";
import whyUsData from "../data/whyUs";
import { getAssetImageURL } from "@/lib/image-util";

const WhyUs = () => {
  const text = whyUsData.en;
  return (
    <>
      <div className="container pt-20 mx-auto text-center ">
        <h1 className="text-4xl font-normal tracking-widest lg:text-6xl font-Alegreya">
          {text.title}
        </h1>

        <h2 className="text-xl">{text.subTitle}</h2>
      </div>
      {text.items.map((item, index) => (
        <div key={index} className="relative md:py-10">
          <div
            className={`absolute inset-0 -z-10 ${
              index % 2 === 0 ? "bg-white" : "bg-primaryHoneyDew"
            }`}
          />
          <div className="flex flex-wrap items-center m-10 mx-auto text-left max-w-7xl">
            <div className="w-full px-4 md:w-3/5 lg:w-1/2">
              <img
                src={getAssetImageURL(item.img)}
                alt={item.imgAlt}
                className={`inline-block border rounded-lg shadow-2xl border-primaryGreen  ${
                  index % 2 === 0 ? "" : ""
                }`}
              />
            </div>
            <div
              className={`w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12 ${
                index % 2 === 0 ? "md:order-first" : ""
              } `}
            >
              <h3 className="mt-8 text-xl font-bold md:mt-0 sm:text-2xl font-Montserrat">
                {item.title}
              </h3>
              {item.text.map((para, i) => (
                <p key={i} className="mt-6 sm:text-lg font-Montserrat">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyUs;
