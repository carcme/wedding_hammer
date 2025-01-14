import React from "react";
import { GiWheat } from "react-icons/gi";

import image from "@/assets/image/girlForest.jpg";

const About = () => {
  console.log("About page");
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen text-3xl font-bold text-center text-neutral-300">
        <div className="w-full py-10 text-black md:w-3/5 sm:w-4/5 bg-almostWhite/80 rounded-xl">
          <div className="flex items-center justify-center">
            <GiWheat className="inline-block size-10 text-primaryGreen [transform:rotateY(180deg)]" />
            <h2 className="px-4 tracking-wider font-Amatic">ELEGANT RUSTIC</h2>
            <GiWheat className="inline-block size-10 text-primaryGreen" />
          </div>
          <h1 className="py-4 text-6xl font-light font-Cormorant">
            Wedding Venue
          </h1>
          <p className="p-4 text-base font-light sm:px-20 font-Montserrat">
            The Hammer Barn is nestled in a nature reserve and surrounded by
            forest. We have one neighbour and then 7km to the nearest village.
          </p>
          <p className="p-4 text-base font-light sm:px-20 font-Montserrat">
            We host stunning weddings from April to October, offering forest
            ceremonies just outside Berlin. The barn is set on 1600 sqm, has a
            kitchen, firepit and stage.
          </p>
          <p className="p-4 text-base font-light sm:px-20 font-Montserrat">
            The Hammer Barn blends rustic charm and German elegance so
            seamlessly your guests will ask, “How did you ever find this place?”
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
