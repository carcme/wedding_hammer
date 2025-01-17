import React from "react";
import { getAssetImageURL } from "@/lib/image-util";

const HeroImgArch = ({ headline, subheading }) => {
  return (
    <>
      <section className="container flex flex-col items-center py-12 pt-32 mx-auto lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="max-w-xl text-4xl font-medium tracking-wide capitalize font-Lora text-primaryGreen md:text-6xl lg:pr-10">
            {headline}
          </h1>

          <p className="max-w-lg mt-8 text-gray-500">{subheading}</p>
        </div>

        <div className="h-[45rem] mt-12 lg:mt-0 w-full mx-auto max-w-lg overflow-hidden rounded-t-full outline outline-4 outline-offset-4 outline-primaryGreenLight/60">
          <img
            className="object-cover w-full h-full rounded-t-full "
            src={getAssetImageURL("forest_wedding.webp")}
            alt="couple married in forest"
          />
        </div>
      </section>
    </>
  );
};

export default HeroImgArch;
