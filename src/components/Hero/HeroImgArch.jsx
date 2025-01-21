import React from "react";
import { getAssetImageURL } from "@/lib/image-util";

const HeroImgArch = ({ headline, subheading, image }) => {
  return (
    <>
      <section className="container mx-auto flex flex-col items-center py-12 pt-32 lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="max-w-xl font-Lora text-4xl font-medium capitalize tracking-wide text-primaryGreen md:text-6xl lg:pr-10">
            {headline}
          </h1>

          <p className="mt-8 max-w-lg text-gray-500">{subheading}</p>
        </div>

        <div className="mx-auto mt-12 h-[45rem] w-full max-w-lg overflow-hidden rounded-t-full outline outline-4 outline-offset-4 outline-primaryGreenLight/60 lg:mt-0">
          <img
            className="h-full w-full rounded-t-full object-cover"
            src={getAssetImageURL(image)}
            alt="couple married in forest"
          />
        </div>
      </section>
    </>
  );
};

export default HeroImgArch;
