import React from "react";

const LeftText = ({ title1, title2, text }) => {
  return (
    <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
      <h1 class="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
        {title1}
        <br />
        {title2}
      </h1>

      <p class="max-w-md leading-relaxed text-gray-500 xl:text-lg">{text}</p>
    </div>
  );
};

export default LeftText;
