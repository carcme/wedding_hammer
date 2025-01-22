import React from "react";
import { GiWheat } from "react-icons/gi";
import InfoCardData from "@/data/infoCardData";
import { getLanguage } from "@/LanguageContext";

const InfoCardDecorated = () => {
  const data = getLanguage(InfoCardData);
  return (
    <>
      <div className="container flex h-screen w-full items-center justify-center text-center text-3xl font-bold text-neutral-300">
        <div className="w-full rounded-xl bg-almostWhite/80 py-10 text-black sm:w-4/5 md:w-3/5">
          <div className="flex items-center justify-center">
            <GiWheat className="inline-block size-8 text-primaryGreen [transform:rotateY(180deg)] sm:size-10" />
            <h2 className="px-4 font-Amatic tracking-wider">
              {data.elgantTxt}
            </h2>
            <GiWheat className="inline-block size-8 text-primaryGreen sm:size-10" />
          </div>
          <h1 className="py-4 font-Cormorant text-5xl font-light sm:text-6xl">
            {data.title}
          </h1>
          {data.text.map((paragraph, index) => (
            <p className="p-2 font-Montserrat text-base font-light sm:px-20">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoCardDecorated;
