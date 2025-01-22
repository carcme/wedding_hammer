import React from "react";
import InfoCardDecorated from "./InfoCardDecorated";

const ImageCard = ({ image, blendMode }) => {
  return (
    <>
      <section
        className={`color-white relative`}
        style={{
          background: `url(${image})`,
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {blendMode && (
          <div
            className={`color-white absolute h-screen w-full bg-gradient-to-t from-transparent from-80% to-almostWhite`}
          />
        )}
        <InfoCardDecorated />
      </section>
    </>
  );
};

export default ImageCard;
