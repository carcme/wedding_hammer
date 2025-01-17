import React from "react";
import { getAssetImageURL } from "@/lib/image-util";

const SplitImage = () => {
  const heroImage1 = getAssetImageURL("forest_wedding_group.webp");
  const heroImage2 = getAssetImageURL("piggyback.webp");

  return (
    <div className="flex flex-wrap justify-between mb-8 md:mb-16 xl:w-7/12">
      <div className="flex w-full mb-12 md:mb-16 ">
        <div className="relative z-10 -ml-12 overflow-hidden rounded-lg shadow-lg left-12 top-12 md:left-16 md:top-16 lg:ml-0 ">
          <img
            src={heroImage1}
            loading="lazy"
            alt="Photo by Kaung Htet"
            className="object-cover object-center w-full h-full "
          />
        </div>

        <div className="overflow-hidden bg-gray-900 rounded-lg shadow-lg ">
          <img
            src={heroImage2}
            loading="lazy"
            alt="Photo by Manny Moreno"
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SplitImage;
