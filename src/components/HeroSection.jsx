import React from "react";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between px-20 bg-gray-100 py-36">
      {/* Left Content (Heading + List) */}
      <div className="flex flex-col max-w-lg space-y-4">
        <h1 className="text-4xl font-bold text-primaryGreen sm:text-5xl">
          Weddings
        </h1>
        <h2 className="text-xl font-bold text-primaryGreen sm:text-xl">
          Your wedding in the heart of Naturepark Dahme-Heideseen
        </h2>
        <h2 className="font-bold text-md text-slate-600 sm:text-md">
          Venue Options
        </h2>
        <ul className="pl-5 space-y-2 text-lg text-gray-500 list-disc">
          <li>Forest Ceremony</li>
          <li>Stunning Scenic Views</li>
          <li>Expert Event Planning Assistance</li>
          <li>Delicious Catering Options</li>
        </ul>
      </div>

      {/* Right Image */}
      <div className="hidden w-1/2 ml-8 md:block">
        <img
          src="./assets/image/fridge.webp"
          alt="Event Image"
          className="object-cover w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
