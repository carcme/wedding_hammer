import React from "react";
import whyUsData from "../data/whyUs";
import { getLanguage } from "../LanguageContext";

const CardOverImage = () => {
  const text = getLanguage(whyUsData);

  return (
    <>
      <div className="container mx-auto">
        <div className="container p-8 pt-20 mx-auto text-center">
          <h1 className="p-4 text-4xl tracking-widest fon t-normal lg:text-6xl font-Alegreya">
            {text.title}
          </h1>

          <h2 className="text-xl">{text.subTitle}</h2>
        </div>

        {text.items.map((item, index) => (
          <div key={index} className="flex justify-center lg:py-10">
            <div className="grid grid-cols-1 m-4 lg:grid-cols-12 ">
              <div
                className={`order-last lg:col-span-5 ${
                  index % 2 === 0 ? "lg:order-first" : "lg:order-last"
                }`}
              >
                <div className="grid lg:grid-rows-12">
                  <div className="hidden lg:block lg:row-span-2 "></div>

                  <div className="row-span-8 bg-red">
                    <div className="w-full p-4 bg-white shadow-2xl">
                      <div className="flex justify-between text-xl font-Amatic">
                        <p>Product Review</p>
                        <p className="text-gray-700">17th March, 2021</p>
                      </div>
                      <h2 className="mt-4 text-3xl font-semibold md:mt-10">
                        {item.title}
                      </h2>

                      {item.text.map((paragraph, i) => (
                        <p
                          key={i}
                          className="my-3 font-medium leading-relaxed text-justify text-gray-700"
                        >
                          {paragraph}
                        </p>
                      ))}
                      <button className="p-3 px-5 mt-2 text-sm font-bold md:mt-5 bg-primaryGoldSatin text-primaryGreenDark hover:bg-purple-800">
                        Read More
                      </button>
                    </div>
                  </div>

                  <div className="hidden lg:block lg:row-span-2 "></div>
                </div>
              </div>
              <div className="scale-105 lg:shadow-2xl lg:col-span-7 -z-10 ">
                <img
                  className="object-cover w-full h-full bg-cover lg:row-span-8 xl:max-w-6xl "
                  src={item.img}
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
