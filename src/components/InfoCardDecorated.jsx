import React from "react";
import { GiWheat } from "react-icons/gi";

const InfoCardDecorated = () => {
  return (
    <>
      <div className="container flex h-screen w-full items-center justify-center pt-20 text-center text-3xl font-bold text-neutral-300">
        <div className="w-full rounded-xl bg-almostWhite/80 py-10 text-black sm:w-4/5 md:w-3/5">
          <div className="flex items-center justify-center">
            <GiWheat className="inline-block size-10 text-primaryGreen [transform:rotateY(180deg)]" />
            <h2 className="px-4 font-Amatic tracking-wider">ELEGANT RUSTIC</h2>
            <GiWheat className="inline-block size-10 text-primaryGreen" />
          </div>
          <h1 className="py-4 font-Cormorant text-6xl font-light">
            Wedding Venue
          </h1>
          <p className="p-4 font-Montserrat text-base font-light sm:px-20">
            The Hammer Barn is nestled in a nature reserve and surrounded by
            forest. We have one neighbour and then 7km to the nearest village.
          </p>
          <p className="p-4 font-Montserrat text-base font-light sm:px-20">
            We host stunning weddings from April to October, offering forest
            ceremonies just outside Berlin. The barn is set on 1600 sqm, has a
            kitchen, firepit and stage.
          </p>
          <p className="p-4 font-Montserrat text-base font-light sm:px-20">
            The Hammer Barn blends rustic charm and German elegance so
            seamlessly your guests will ask, “How did you ever find this place?”
          </p>
        </div>
      </div>
    </>
  );
};

export default InfoCardDecorated;
