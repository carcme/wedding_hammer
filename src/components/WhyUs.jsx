import React from "react";
import whyUsData from "../data/whyUs";
import { getAssetImageURL } from "@/lib/image-util";

const WhyUs = () => {
  const text = whyUsData.en;
  const blendMode = true;
  return (
    <>
      <div className="font-Jost container mx-auto pt-20 text-center">
        <h1 className="pb-10 text-4xl font-normal tracking-widest lg:text-6xl">
          {text.title}
        </h1>

        <h2 className="text-xl">{text.subTitle}</h2>
      </div>
      {text.items.map((item, index) => (
        <div key={index} className="relative w-full md:py-10">
          <div
            className={`absolute inset-0 -z-10 ${
              index % 2 === 0 ? "bg-white" : "bg-primaryHoneyDew"
            }`}
          />
          {/* <div
            className={`absolute w-full h-screen color-white bg-gradient-to-t from-transparent to-almostWhite from-60%`}
          /> */}

          <div className="m-10 mx-auto flex max-w-7xl flex-wrap items-center md:px-10">
            <div className="m-auto w-3/4 md:w-3/5 lg:w-1/2">
              <img
                src={getAssetImageURL(item.img)}
                alt={item.imgAlt}
                className={`inline-block rounded-lg border border-primaryGreen shadow-2xl ${
                  index % 2 === 0 ? "" : "mt-10"
                }`}
              />
            </div>
            <div
              className={`w-full px-4 text-center md:w-2/5 md:text-left lg:w-1/2 lg:pl-12 ${
                index % 2 === 0 ? "md:order-first" : ""
              } `}
            >
              <h3 className="font-font-Jost mt-8 text-xl font-bold sm:text-2xl md:mt-0">
                {item.title}
              </h3>
              {item.text.map((para, i) => (
                <div key={i} className="font-font-Jost mt-6 sm:text-lg">
                  {para}
                  {/* add padding to last paragraph when bg is primaryHoneyDew*/}
                  {item.text.length - 1 === i && index % 2 !== 0 && (
                    <div className="pb-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyUs;
