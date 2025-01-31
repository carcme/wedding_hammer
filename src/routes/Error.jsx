import React, { useEffect } from "react";
import Carousel from "../components/temp/Carousel1";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-white py-6 pt-24 lg:py-12 lg:pt-28">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <img
                src="../assets/image/ballon.webp"
                loading="lazy"
                alt="Photo by Theo Crazzolara"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
              <p className="mb-4 text-sm font-semibold uppercase text-primaryGreen md:text-base">
                Error 404
              </p>
              <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl">
                Page not found
              </h1>

              <p className="mb-4 text-center text-gray-500 sm:text-left md:mb-8 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>

              <nav className="flex gap-4 sm:block sm:space-y-1 md:space-y-2">
                <div>
                  <a
                    href="/"
                    className="inline-block text-sm text-indigo-700 transition duration-100 hover:text-indigo-800 active:text-indigo-700 md:text-base"
                  >
                    Go Back Home
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
