import React, { useState, useRef } from "react";

const AnimatedPageSlider = ({ data }) => {
  const [currIndex, setCurrIndex] = useState(1);
  const listRef = useRef(null);

  const handleNext = () => {
    const index = currIndex < data.length - 1 ? currIndex + 1 : 0;
    setCurrIndex(index);
    showSlider("next");
  };
  const handlePrevious = () => {
    const index =
      currIndex <= data.length - 1 && currIndex > 0
        ? currIndex - 1
        : data.length - 1;
    setCurrIndex(index);
    showSlider("prev");
  };

  function showSlider(type, index) {
    const list = document.querySelector(".list");
    const arrSlides = list.querySelectorAll(".carousel .list .carouselitem");

    if (type === "next") {
      listRef.current.appendChild(arrSlides[0]);
    } else if (type === "prev") {
      listRef.current.prepend(arrSlides[arrSlides.length - 1]);
    }
  }

  return (
    <div className="carousel">
      <div className="list" ref={listRef}>
        {data.map((slide, i) => (
          <div
            key={i}
            className="carouselitem border-2 border-white rounded-lg"
            style={{
              backgroundImage: `url(${slide.url})`,
            }}
          >
            <div className="content ">
              <div className="lg:text-8xl text-5xl uppercase font-bold  opacity-0 animate-[blurScale_700ms_ease-in-out_300ms_1_forwards]">
                {slide.id + 1}
              </div>
              <div className="lg:text-7xl text-5xl uppercase font-bold text-white opacity-0 animate-[blurScale_700ms_ease-in-out_300ms_1_forwards]">
                {slide.name}
              </div>
              <div className="lg:text-lg text-sm opacity-0 animate-[blurScale_700ms_ease-in-out_300ms_1_forwards] mt-2.5 mb-2">
                {slide.desc}
              </div>
              {/* <div className="opacity-0 animate-[blurScale_500ms_ease-in-out_0.5s_1_forwards] ml-1 "> */}
              <div className="flex w-full opacity-0 flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start animate-[blurScale_700ms_ease-in-out_300ms_1_forwards] ">
                <a
                  href={slide.btn1Link}
                  className="inline-block rounded-lg sm:bg-primaryGreen px-8 py-3 text-center text-sm font-semibold text-white ring-0 ring-white  transition duration-100 hover:bg-primaryGreenDark focus-visible:ring active:bg-accentDecoration md:text-base bg-black/50"
                >
                  {slide.btn1}
                </a>
                <a
                  href={slide.btn2Link}
                  className="inline-block rounded-lg sm:bg-white px-8 py-3 text-center text-sm font-semibold text-white sm:text-primaryGreen ring-0 ring-white transition duration-100 hover:bg-primaryGreen hover:text-white focus-visible:ring active:text-primaryGreen md:text-base bg-black/50"
                >
                  {slide.btn2}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-50 w-[200px] max-w-[30%] flex gap-2.5 left-[5%] translate-y-[-20%] top-[90%]">
        <button
          className="w-14 h-14 bg-primaryGreenDark/70 font-extrabold text-white text-base  transition-colors duration-300 cursor-pointer hover:bg-white hover:text-primaryGreen font-mono"
          onClick={handlePrevious}
        >
          &lt;
        </button>
        <button
          className="w-14 h-14 bg-primaryGreenDark/70 font-extrabold text-white text-base  transition-colors duration-300 cursor-pointer hover:bg-white hover:text-primaryGreen font-mono"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AnimatedPageSlider;
