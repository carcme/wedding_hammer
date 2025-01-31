import React from "react";
import whyUsData from "../data/whyUs";

const WhyUs = () => {
  const text = whyUsData.en;
  return (
    <>
      <div className="container mx-auto p-8 pt-20 text-center">
        <h1 className="fon t-normal font-Jost p-4 text-4xl tracking-widest lg:text-6xl">
          {text.title}
        </h1>

        <h2 className="mb-20 text-xl">{text.subTitle}</h2>

        {text.items.map((item, index) => (
          <div key={index} className="flex flex-wrap items-center text-left">
            <div className="mt-20 w-full md:w-3/5 lg:w-1/2">
              <img
                src={item.img}
                alt="gem"
                className="inline-block border border-primaryGreen shadow-2xl"
              />
            </div>
            <div
              className={`w-full px-4 text-center md:w-2/5 md:text-left lg:w-1/2 lg:pl-12 ${
                index % 2 === 0 ? "md:order-first" : ""
              } `}
            >
              <h3 className="font-Jost mt-8 text-xl font-bold sm:text-2xl md:mt-0">
                {item.title}
              </h3>
              {item.text.map((para, i) => (
                <p key={i} className="font-Jost mt-6 sm:text-lg">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhyUs;
