import React from "react";
// import ImageSliderData from "../../data/ImageSliderData";
import { getLanguage } from "../../LanguageContext";
import { getAssetImageURL } from "@/lib/image-util";
import img1 from "../../assets/1.webp";
import img2 from "../../assets/2.webp";
import img3 from "../../assets/3.webp";
import img4 from "../../assets/4.jpg";

const ImageSliderData = {
  en: {
    slides: [
      {
        title: "Image 1",
        place: "Berlin",
        color: "text-red-500",
        img: img1,
      },
      {
        title: "Image 2",
        place: "Paris",
        color: "text-blue-500",
        img: img2,
      },
      {
        title: "Image 3",
        place: "Madrid",
        color: "text-green-500",
        img: img3,
      },
      {
        title: "Image 4",
        place: "Linz",
        color: "text-slate-500",
        img: img4,
      },
    ],
  },
  de: {},
};

const MaskCarousel = () => {
  const data = getLanguage(ImageSliderData);

  return (
    <>
      <div className="slider-container bg-[#f2f2f2]">
        <div className="fixed flex h-screen w-1/12 flex-col items-center justify-center gap-12">
          {data.slides.map((bullet, i) => {
            return (
              <img
                key={i}
                className={`bullet-${i + 1} h-12 w-12 rounded-full object-cover`}
                src={bullet.img}
                alt={bullet.title}
              ></img>
            );
          })}
        </div>
        {data.slides.map((slide, i) => {
          return (
            <section key={i} className="flex h-screen snap-start">
              <div className="flex h-full w-1/3 flex-col items-center justify-center leading-8">
                <h2 className={`${slide.color} text-[1.5rem] font-bold`}>
                  {slide.title}
                </h2>
                <h1 className="text-[2rem]">{slide.place}</h1>
              </div>
              <div className="w-2/3">
                <div
                  className="mask"
                  style={{
                    backgroundImage: `url(${slide.img})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "100%",
                  }}
                ></div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default MaskCarousel;
