import React from "react";
import vendorList from "../data/vendorsList";
import { getLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";

import { FaChevronRight } from "react-icons/fa6";
import ClickReveal from "./ClickReveal";

const Vendors = () => {
  const vl = getLanguage(vendorList);
  return (
    <>
      {vl.title !== "" && (
        <div className="mx-auto text-center ">
          <h1 className="p-4 text-4xl font-normal tracking-widest lg:text-6xl font-Alegreya">
            {vl.title}
            {vl.subTitle && <h2 className="text-xl">{vl.subTitle}</h2>}
          </h1>
        </div>
      )}
      <div>
        {vl.sections.map((section, index) => (
          <div className="relative md:py-20" key={index}>
            <div
              className={`absolute inset-0 -z-10 ${
                index % 2 === 0 ? "bg-primaryHoneyDew" : "bg-white"
              }`}
            />
            <div
              className={`flex flex-wrap justify-center max-w-7xl mx-auto items-center `}
            >
              <div className="">
                <img
                  src={section.img}
                  alt={section.alt}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  className="inline-block w-full shadow-2xl md:size-96 border-primaryGreen"
                />
              </div>
              <div
                className={`w-full md:w-3/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12 ${
                  index % 2 === 0 ? "md:order-first" : ""
                } `}
              >
                <h2 className="pb-4 text-xl font-normal leading-9 tracking-widest uppercase sm:text-4xl font-Alegreya">
                  {section.title}
                </h2>
                {section.textTop.map((para, i) => (
                  <p key={i} className="leading-7 sm:text-xl font-Alegreya">
                    {para}
                  </p>
                ))}
                <ClickReveal
                  heading={section.listHeading}
                  listItems={section.listItems.atags}
                />

                {section.textBottom.map((para, i) => (
                  <p
                    key={i}
                    className="mt-6 leading-7 sm:text-xl font-Alegreya"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>{" "}
          </div>
        ))}
      </div>
    </>
  );
};

export default Vendors;
