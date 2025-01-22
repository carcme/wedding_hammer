import React from "react";
import { getAssetImageURL } from "@/lib/image-util";

const SplitImage = () => {
  const heroImage1 = getAssetImageURL("forest_wedding_group.webp");
  const heroImage2 = getAssetImageURL("piggyback.webp");

  return (
    <div className="mb-8 flex flex-wrap justify-between md:mb-16 xl:w-7/12">
      <div className="mb-12 flex w-full md:mb-16">
        <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg shadow-lg md:left-16 md:top-20 lg:-ml-20">
          {/* <div className="h-56 overflow-hidden bg-gray-100 rounded-lg shadow-lg lg:h-96 xl:w-7/12"> */}
          <img
            src={heroImage1}
            loading="lazy"
            alt="Photo by Kaung Htet"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="overflow-hidden rounded-lg bg-gray-900 shadow-lg">
          <img
            src={heroImage2}
            loading="lazy"
            alt="Photo by Manny Moreno"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default SplitImage;
