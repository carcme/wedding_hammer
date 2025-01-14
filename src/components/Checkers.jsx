import React from "react";
import whyUsData from "../data/whyUs";

const WhyUs = () => {
  const text = whyUsData.en;
  return (
    <>
      <div className="container p-8 pt-20 mx-auto text-center">
        <h1 className="p-4 text-4xl tracking-widest fon t-normal lg:text-6xl font-Alegreya">
          {text.title}
        </h1>

        <h2 className="mb-20 text-xl">{text.subTitle}</h2>

        {text.items.map((item, index) => (
          <div key={index} className="flex flex-wrap items-center text-left ">
            <div className="w-full md:w-3/5 lg:w-1/2">
              <img
                src={item.img}
                alt="gem"
                className="inline-block border shadow-2xl border-primaryGreen"
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
        ))}
      </div>
    </>
  );
};

export default WhyUs;
