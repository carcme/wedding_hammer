import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getAssetImageURL } from "@/lib/image-util";
import { FaGamepad, FaEuroSign } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import BookingForm from "@/components/Forms/BookingForm";

import bookingPageText from "../data/bookingPageText";
import { BookingData } from "@/data/BookingData";
import { getLanguage } from "@/LanguageContext";

const Booking = ({}) => {
  const location = useLocation();

  const data = getLanguage(BookingData);
  console.log("data === ", data);
  const bookingText = getLanguage(bookingPageText);

  console.log("data.mysteries[0] === ", data.mysteries[0]);
  // if (location === null || location.state === null) {
  //   console.log("Error - No mystery data, redirect to select page ");
  //   return <Navigate to={"/mystery"} />;
  // }

  const { id, title, intro, image, subTitle, players, difficulty, cost, slug } =
    data.mysteries[0];

  const heroImage = getAssetImageURL(image);

  console.log("title ", title);
  console.log("intro.length ", intro.length);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <>
      <div className="py-6 bg-almostWhite sm:py-8 ">
        <div className="px-4 pt-24 mx-auto max-w-screen-2xl md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-primaryGreen sm:flex-row xl:h-96">
            {/* <!-- content - start --> */}
            <div className="flex flex-col w-full p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
              <h2 className="mb-4 text-xl font-bold text-almostWhite md:text-2xl lg:text-4xl">
                {title[0]}
                {/* Your Day */}
                <br />
                {/* Your Way */}
                {title[1]}
              </h2>

              <p className="max-w-md mb-8 text-gray-300">{subTitle[0]}</p>
              <p className="max-w-md mb-8 text-gray-300">{subTitle[1]}</p>
              {/* add a button ??? */}
              {/* <div className="mt-auto">
                <a
                  href="#"
                  className="inline-block px-8 py-3 text-sm font-semibold text-center text-gray-800 transition duration-100 rounded-lg outline-none bg-almostWhite hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                >
                  Save now
                </a>
              </div> */}
            </div>
            {/* <!-- content - end --> */}

            {/* <!-- image - start --> */}
            <div className="order-first w-full h-48 bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
              <img
                src={heroImage}
                loading="lazy"
                alt=""
                className="object-cover object-center w-full h-full"
              />
            </div>
            {/* <!-- image - end --> */}
          </div>
        </div>
      </div>

      <div className="relative text-gray-900 bg-almostWhite">
        <div className="flex flex-col justify-between max-w-screen-lg px-4 mx-auto sm:px-6 lg:px-8">
          {intro.length > 0 && (
            <div className="">
              {intro.map((para, index) => (
                <h3 key={index} className="pt-4 sm:text-xl font-Montserrat">
                  {para}
                </h3>
              ))}
            </div>
          )}
          <div className="section-divider-white"></div>
          <div className="pb-20 text-2xl font-bold text-center sm:text-4xl font-Montserrat">
            <p>{bookingText.bookNow}</p>
          </div>
          <div className="">
            <BookingForm
              title={title}
              players={players}
              cost={cost}
              bookingText={bookingText}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
