import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getAssetImageURL } from "@/lib/image-util";
import { FaGamepad, FaEuroSign } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import BookingForm from "../components/Forms/BookingForm";

import bookingPageText from "../data/bookingPageText";
import { BookingData } from "../data/BookingData";
import { getLanguage, useLanguage } from "@/LanguageContext";
import { Helmet } from "react-helmet-async";
import helmetData from "@/data/helmetData";
import TableTemp from "../components/TableTemp";

const Booking = ({}) => {
  const location = useLocation();

  const data = getLanguage(BookingData);
  const bookingText = getLanguage(bookingPageText);
  const meta = getLanguage(helmetData);

  const { id, title, intro, image, subTitle, players, difficulty, slug } =
    data.mysteries[0];

  const heroImage = getAssetImageURL(image);

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet htmlAttributes={{ lang: useLanguage() }}>
        <title>{meta.titleBooking}</title>
        <meta name="description" content={meta.descBooking} />
        <meta name="robots" content={meta.robots} />
        <meta name="charSet" content={meta.charset} />
      </Helmet>
      <div className="font-Jost bg-almostWhite py-6 sm:py-8">
        <div className="mx-auto max-w-screen-2xl px-4 pt-24 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-primaryGreen sm:flex-row xl:h-96">
            {/* <!-- content - start --> */}
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
              <h2 className="mb-4 text-xl font-bold text-almostWhite md:text-2xl lg:text-4xl">
                {title[0]}
                {/* Your Day */}
                <br />
                {/* Your Way */}
                {title[1]}
              </h2>

              <p className="mb-8 max-w-md text-gray-300">{subTitle[0]}</p>
              <p className="mb-8 max-w-md text-gray-300">{subTitle[1]}</p>
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
            <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
              <img
                src={heroImage}
                loading="lazy"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* <!-- image - end --> */}
          </div>
        </div>
      </div>
      <TableTemp />
      <div className="font-Jost relative bg-almostWhite text-gray-900">
        <div className="mx-auto flex max-w-screen-lg flex-col justify-between px-4 sm:px-6 lg:px-8">
          {intro.length > 0 && (
            <div className="">
              {intro.map((para, index) => (
                <h3 key={index} className="pt-4 sm:text-xl">
                  {para}
                </h3>
              ))}
            </div>
          )}
          <div className="section-divider-white"></div>
          <div className="pb-20 text-center text-2xl font-bold text-primaryGreen sm:text-4xl">
            <p>{bookingText.bookNow}</p>
          </div>
          <div className="">
            <BookingForm
              title={title}
              players={players}
              bookingText={bookingText}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
