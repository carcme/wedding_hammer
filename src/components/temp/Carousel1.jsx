import React, { useEffect, useRef, useState } from "react";
// import "./Carousel.css"; // Add styles for your carousel here

const Carousel = ({ image }) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* <!-- list item --> */}
      <div className="list">
        <div className="absolute inset-0 h-full w-full">
          <img
            src={image[0].url}
            alt={image[0].alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute left-1/2 top-[20%] box-border w-2/4 max-w-[80%] -translate-x-1/2 transform pr-[30%] text-white shadow-md">
            <div className="font-bold tracking-[10px]">1</div>
            <div className="size-5 font-bold leading-tight">DESIGN SLIDER</div>
            <div className="text-[20px]font-bold leading-tight text-orange-600">
              ANIMAL
            </div>
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
        </div>
        <div className="item">
          <img
            src={image[1].url}
            alt={image[1].alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute left-1/2 top-[20%] box-border w-2/4 max-w-[80%] -translate-x-1/2 transform pr-[30%] text-white shadow-md">
            {" "}
            <div className="font-bold tracking-[10px]">2</div>
            <div className="size-5 font-bold leading-tight">DESIGN SLIDER</div>
            <div className="size-5 font-bold leading-tight text-orange-600">
              ANIMAL
            </div>
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
        </div>
        <div className="item">
          <img
            src={image[2].url}
            alt={image[2].alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute left-1/2 top-[20%] box-border w-2/4 max-w-[80%] -translate-x-1/2 transform pr-[30%] text-white shadow-md">
            {" "}
            <div className="font-bold tracking-[10px]">3</div>
            <div className="size-5 font-bold leading-tight">DESIGN SLIDER</div>
            <div className="size-5 font-bold leading-tight text-orange-600">
              ANIMAL
            </div>
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
        </div>
        <div className="item">
          <img
            src={image[3].url}
            alt={image[3].alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute left-1/2 top-[20%] box-border w-2/4 max-w-[80%] -translate-x-1/2 transform pr-[30%] text-white shadow-md">
            {" "}
            <div className="font-bold tracking-[10px]">4</div>
            <div className="size-5 font-bold leading-tight">DESIGN SLIDER</div>
            <div className="size-5 font-bold leading-tight text-orange-600">
              ANIMAL
            </div>
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
        </div>
      </div>
      {/* <!-- list thumnail --> */}
      <div className="absolute right-12 top-12 z-10 flex min-w-max flex-col gap-4">
        <div className="relative h-[150px] w-[150px] flex-shrink-0">
          <img src={image[0].url} alt={image[0].alt} />
          <div className="absolute bottom-2 left-2 right-2 text-white">
            <div className="font-medium">{image[0].alt}</div>
            <div className="font-light">Description</div>
          </div>
        </div>
        <div className="relative h-[150px] w-[150px] flex-shrink-0">
          <img
            src={image[1].url}
            alt={image[1].alt}
            className="h-full w-full rounded-md object-cover"
          />
          <div className="absolute bottom-2 left-2 right-2 text-white">
            <div className="font-medium">{image[0].alt}</div>
            <div className="font-light">Description</div>
          </div>
        </div>
        <div className="relative h-[150px] w-[150px] flex-shrink-0">
          <img
            src={image[2].url}
            alt={image[2].alt}
            className="h-full w-full rounded-md object-cover"
          />
          <div className="absolute bottom-2 left-2 right-2 text-white">
            <div className="font-medium">{image[2].alt}</div>
            <div className="font-light">Description</div>
          </div>
        </div>
        <div className="relative h-[150px] w-[150px] flex-shrink-0">
          <img
            src={image[3].url}
            alt={image[3].alt}
            className="h-full w-full rounded-md object-cover"
          />
          <div className="absolute bottom-2 left-2 right-2 text-white">
            <div className="font-medium">{image[3].alt}</div>
            <div className="font-light">Description</div>
          </div>
        </div>
      </div>

      <div className="arrows">
        <button id="prev">L </button>
        <button id="next">R</button>
      </div>
    </div>
  );
  console.log("🚀 ~ Carousel ~ image:", image);
  console.log("🚀 ~ Carousel ~ image:", image);
  console.log("🚀 ~ Carousel ~ image:", image);
  console.log("🚀 ~ Carousel ~ image:", image);
  console.log("🚀 ~ Carousel ~ image:", image);
  console.log("🚀 ~ Carousel ~ image:", image);
  console.log("🚀 ~ Carousel ~ image:", image);
  console.log("🚀 ~ Carousel ~ image:", image);
};

export default Carousel;
