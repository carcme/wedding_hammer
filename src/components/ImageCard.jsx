import React, { useRef } from "react";
import { GiWheat } from "react-icons/gi";

const ImageCard = ({ image, blendMode }) => {
  // const parallax = useParallax({
  //   easing: "easeOutQuad",
  //   translateX: [-50, 18],
  // });

  return (
    <>
      <section
        className={`relative w-full h-screen color-white`}
        style={{
          background: `url(${image})`,
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {blendMode && (
          <div
            className={`absolute w-full h-screen color-white bg-gradient-to-t from-transparent to-almostWhite from-60%`}
          />
        )}

        <div className="flex items-center justify-center w-full h-screen text-3xl font-bold text-center text-neutral-300">
          <div className="w-full py-10 text-black md:w-3/5 sm:w-4/5 bg-primaryHoneyDew/80 rounded-xl ">
            <div className="flex items-center justify-center">
              <GiWheat className="inline-block size-10 text-primaryGreen [transform:rotateY(180deg)]" />
              <h2 className="px-4 tracking-wider font-Amatic">
                ELEGANT & RUSTIC
              </h2>
              <GiWheat className="inline-block size-10 text-primaryGreen" />
            </div>
            <h1 className="py-4 text-6xl font-light font-Cormorant">
              Wedding Venue
            </h1>
            <p className="p-4 text-base font-light sm:px-20 font-Montserrat">
              The Hammer Barn is nestled in a nature reserve and surrounded by
              forest. We have one neighbour and then 7km to the nearest village
              and still only 30mins from Schonefeld airport.
            </p>
            <p className="p-4 text-base font-light sm:px-20 font-Montserrat">
              We host stunning weddings from April to October, offering forest
              ceremonies just outside Berlin. The barn is set on 1600 sqm, has a
              kitchen, firepit and stage.
            </p>
            <p className="p-4 text-base font-light sm:px-20 font-Montserrat">
              The Hammer Barn blends rustic charm and German elegance so
              seamlessly your guests will ask, “How did you ever find this
              place?”
            </p>
          </div>
        </div>
      </section>
      <section className="relative w-full bg-primaryHoneyDew">
        <div className="container flex items-center justify-center py-20 mx-auto text-3xl font-bold text-neutral-300">
          <div className="w-full p-10 text-black md:w-3/5 sm:w-4/5 bg-primaryHoneyDew">
            <div className="flex items-left">
              <GiWheat className="inline-block size-10 text-primaryGreen [transform:rotateY(180deg)]" />
              <h2 className="px-4 tracking-wider font-Amatic">
                EACH WEDDING HAS A
              </h2>
              <GiWheat className="inline-block size-10 text-primaryGreen" />
            </div>
            <h1 className="py-4 text-6xl font-light font-Cormorant">
              Personality
            </h1>
            <p className="px-2 py-4 text-base font-light sm:px-20 font-Montserrat">
              There is no such thing as a “standard wedding” here at The Farm.
              Each of our weddings has its own personality drawing on the
              couple's history, their families, their futures and their
              traditions.
            </p>
            <p className="px-2 py-4 text-base font-light sm:px-20 font-Montserrat">
              With our licensed Wedding Coordinators and a stable of tried and
              trusted local vendors, we can help you bring your vision to life.
              This will allow you to sit back and enjoy your day.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageCard;
