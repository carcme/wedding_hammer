import React from "react";

const Hero = ({ image, title, subTitle, blendMode }) => {
  return (
    <>
      <div
        alt=""
        className="relative flex items-center justify-center w-full h-screen bg-bottom "
        style={{
          background: `url(${image})`,
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.2)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {blendMode && (
          <div
            className={`absolute w-full h-screen color-white bg-gradient-to-b from-transparent to-black from-60%`}
          />
        )}
        <div className="text-white">
          <h1 className="p-4 text-6xl font-bold text-center font-Amatic">
            {title}
          </h1>

          <h2 className="text-3xl text-center font-Hind">{subTitle}</h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
