import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCircle,
  FaDotCircle,
} from "react-icons/fa";
// import "./image-slider.css";

export function ImageSlider({ data }) {
  const [imageIndex, setImageIndex] = useState(0);

  const images = data.slides;

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <section aria-label="Image Slider" className="relative h-screen w-screen">
      <div className="relative flex h-screen w-screen overflow-hidden">
        {images.map(({ img, title }, index) => (
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <img
              key={index}
              src={img}
              alt={title}
              aria-hidden={imageIndex !== index}
              className="block h-screen w-full flex-shrink-0 flex-grow-0 object-cover"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde. Ut,
              exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="allunset duration-10 absolute bottom-0 top-0 z-10 block cursor-pointer p-4 transition-colors ease-in-out"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <FaArrowLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        //   stroke: white;
        // fill: white;
        // width: 2rem;
        // height: 2rem;

        aria-label="View Next Image"
      >
        <FaArrowRight
          aria-hidden
          className="cursor-pointer bg-white text-white"
        />
      </button>

      <div id="after-image-slider-controls" />
    </section>
  );
}
