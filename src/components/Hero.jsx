import React from "react";

const Hero = ({ image, title, subTitle, blendMode }) => {
  return (
    <>
      <div
        alt=""
        className="relative flex h-screen w-full items-center justify-center bg-bottom"
        style={{
          background: `url(${image})`,
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.2)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {blendMode && (
          <div
            className={`color-white absolute h-screen w-full bg-gradient-to-b from-transparent from-60% to-black`}
          />
        )}
        <div className="text-white">
          <h1 className="font-Jost p-4 text-center text-6xl font-bold">
            {title}
          </h1>

          <h2 className="font-Jost text-center text-3xl">{subTitle}</h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
