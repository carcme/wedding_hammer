import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import SplitImage from "./SplitImage";
import { Link } from "react-router-dom";
import homeData from "../data/homeData";
import { getLanguage } from "../LanguageContext";

const HeroSplit = () => {
  const data = getLanguage(homeData);

  return (
    <div className="pt-24 pb-6 bg-almostWhite lg:pt-44 sm:pb-8 lg:pb-12">
      <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
        <section className="flex flex-col justify-between gap-6 mb-8 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
            <p className="my-4 font-semibold text-primaryGreen md:mb-6 md:text-lg xl:text-xl">
              {data.teaser}
            </p>

            <h1 className="max-w-xl mb-8 font-serif text-4xl font-medium tracking-wide text-gray-800 capitalize md:text-6xl">
              {data.title}
            </h1>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                to="/booking"
                className="inline-block px-8 py-3 text-sm font-semibold text-center transition duration-100 rounded-lg outline-none text-almostWhite bg-primaryGreen ring-primaryGreen ring-2 hover:bg-primaryGreenLight focus-visible:ring active:bg-primaryGreenLight md:text-base"
              >
                {data.btn1}
              </Link>

              <Link
                to={"/contact"}
                className="inline-block px-8 py-3 text-sm font-semibold text-center transition duration-100 rounded-lg outline-none bg-almostWhite text-primaryGreen ring-2 ring-primaryGreenDark hover:bg-primaryGreen hover:text-white focus-visible:ring active:text-primaryGreen md:text-base"
              >
                {data.btn2}
              </Link>
            </div>
          </div>
          {/* <!-- content - end --> */}

          <SplitImage />
          {/* <!-- image - start --> */}
          {/* <div className="h-56 overflow-hidden bg-gray-100 rounded-lg shadow-lg lg:h-96 xl:w-7/12">
            <img
              src="../assets/image/forest_wedding.webp"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="object-cover object-center w-full h-full"
            />
          </div> */}
          {/* <!-- image - end --> */}
        </section>

        <section className="flex flex-col items-center justify-between gap-10 pt-8 border-t lg:flex-row lg:gap-8">
          {/* <!-- stats - start --> */}
          <div className="grid grid-cols-2 gap-4 -mx-6 md:-mx-8 md:flex md:divide-x">
            <div className="px-6 md:px-8">
              <span className="block text-lg font-bold text-center text-primaryGreen md:text-xl">
                {data.capacity}
              </span>
              <span className="block text-sm font-semibold text-center text-gray-800 md:text-base">
                {data.capacityTitle}
              </span>
            </div>

            <div className="px-6 md:px-8">
              <span className="block text-lg font-bold text-center text-primaryGreen md:text-xl">
                {data.pricesTitle}
              </span>
              <span className="block text-sm font-semibold text-center text-gray-800 md:text-base">
                {data.prices}
              </span>
            </div>

            <div className="px-6 md:px-8">
              <span className="block text-lg font-bold text-center text-primaryGreen md:text-left md:text-xl">
                {data.areaTitle}
              </span>
              <span className="block text-sm font-semibold text-center text-gray-800 md:text-left md:text-base">
                1600 m<sup>2</sup>
              </span>
            </div>

            <div className="px-6 md:px-8">
              <span className="block text-lg font-bold text-center text-primaryGreen md:text-left md:text-xl">
                {data.somethingTitle}
              </span>
              <span className="block text-sm font-semibold text-center text-gray-800 md:text-left md:text-base">
                {data.something}
              </span>
            </div>
          </div>
          {/* <!-- stats - end --> */}

          {/* <!-- social - start --> */}
          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase sm:text-base">
              {data.social}
            </span>
            <span className="w-12 h-px bg-gray-200"></span>

            <div className="flex gap-4">
              {/* instagram */}
              <a href="#">
                <span className="inner"></span>
                <FaInstagram
                  size={20}
                  className="relative z-[1] transition-all  cursor-pointer bg-transparent hover:scale-110 text-gray-400 hover:text-primaryGreen"
                />
              </a>
              {/* twitter */}
              <a href="#">
                <span className="inner"></span>
                <FaTwitter
                  size={20}
                  className="relative z-[1] transition-all  cursor-pointer bg-transparent hover:scale-110 text-gray-400 hover:text-primaryGreen"
                />
              </a>
              <a href="#">
                <span className="inner"></span>
                <FaYoutube
                  size={20}
                  className="relative z-[1] transition-all  cursor-pointer bg-transparent hover:scale-110 text-gray-400 hover:text-primaryGreen"
                />
              </a>
              {/* linkdin */}
              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-primaryGreen active:text-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* github */}
              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-primaryGreen active:text-primaryGreen"
              >
                <svg
                  className="w-5 h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
          {/* <!-- social - end --> */}
        </section>
      </div>
    </div>
  );
};

export default HeroSplit;
