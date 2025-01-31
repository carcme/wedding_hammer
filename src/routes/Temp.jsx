import React from "react";
import Carousel from "../components/temp/Carousel1";
import MaskCarousel from "../components/temp/MaskCarousel";
import { ImageSlide } from "yet-another-react-lightbox";
import { ImageSlider } from "../components/temp/ImageSlider";
import { getLanguage } from "../LanguageContext";

import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.jpg";

const IMAGES = [
  { url: img1, alt: "Car One" },
  { url: img2, alt: "Car Two" },
  { url: img3, alt: "Car Three" },
  { url: img4, alt: "Car Four" },
];
import ImageSliderData from "../data/ImageSliderData";

export const Temp = () => {
  const data = getLanguage(ImageSliderData);
  return (
    <div className="">
      <ImageSlider data={data} />
      {/* <MaskCarousel /> */}
      <Carousel image={IMAGES} />
    </div>
  );
};
