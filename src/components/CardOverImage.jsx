import React from "react";
import whyUsData from "../data/whyUs";
import { getLanguage } from "../LanguageContext";
import { getAssetImageURL } from "@/lib/image-util";

const CardOverImage = () => {
  const text = getLanguage(whyUsData);

  return (
    <>
      <div className="container mx-auto">
        <div className="container mx-auto p-8 pt-20 text-center">
          <h1 className="fon t-normal font-Jost p-4 text-4xl tracking-widest lg:text-6xl">
            {text.title}
          </h1>

          <h2 className="text-xl">{text.subTitle}</h2>
        </div>

        {text.items.map((item, index) => (
          <div key={index} className="flex justify-center lg:py-10">
            <div className="m-4 grid grid-cols-1 lg:grid-cols-12">
              <div
                className={`order-last lg:col-span-5 ${
                  index % 2 === 0 ? "lg:order-first" : "lg:order-last"
                }`}
              >
                <div className="grid lg:grid-rows-12">
                  <div className="hidden lg:row-span-2 lg:block"></div>

                  <div className="bg-red row-span-8">
                    <div className="w-full bg-almostWhite p-4">
                      {/* <div className="flex justify-between text-xl font-Jost">
                        <p>Product Review</p>
                        <p className="text-gray-700">17th March, 2021</p>
                      </div> */}
                      <h2 className="mt-4 text-3xl font-semibold md:mt-10">
                        {item.title}
                      </h2>

                      {item.text.map((paragraph, i) => (
                        <p
                          key={i}
                          className="my-3 text-justify font-medium leading-relaxed text-gray-700"
                        >
                          {paragraph}
                        </p>
                      ))}
                      <button className="mt-2 rounded-md bg-almostWhite p-3 px-5 text-sm font-bold text-primaryGreenDark hover:bg-primaryGreen hover:text-almostWhite md:mt-5">
                        Read More
                      </button>
                    </div>
                  </div>

                  <div className="hidden lg:row-span-2 lg:block"></div>
                </div>
              </div>
              <div className="-z-10 scale-105 lg:col-span-7 lg:shadow-2xl">
                <img
                  className="h-full w-full bg-cover object-cover lg:row-span-8 xl:max-w-6xl"
                  src={getAssetImageURL(item.img)}
                  alt={item.imgAlt}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardOverImage;
