import dayjs from "dayjs";

import * as localizedFormat from "dayjs/plugin/localizedFormat";

import React, { useState, useEffect } from "react";
import { generateDate, months } from "@/lib/calendar";
import cn from "@/lib/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { getLanguage, useLanguage } from "@/LanguageContext";

const TWCalendar = ({ gcEvents, selectDate, setSelectDate, bookingText }) => {
  const language = useLanguage();
  const days =
    language == "en"
      ? ["S", "M", "T", "W", "T", "F", "S"]
      : ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

  const currentDate = dayjs(new Date());
  const [today, setToday] = useState(currentDate);

  const monthsLocal = getLanguage(months);

  return (
    <div className="flex flex-col items-center justify-center mx-auto lg:gap-40 md:gap-20 sm:gap-5 md:divide-x md:w-full md:flex-row text-primaryGreen">
      <div className="sm:w-96 w-96 md:w-w-2/3 h-fit">
        <h1 className="pb-4 font-semibold text-center select-none">
          {monthsLocal[today.month()]} {today.year()}
        </h1>
        <div className="">
          <div className="flex items-center gap-20 justify-evenly">
            <GrFormPrevious
              className="p-2 transition-all rounded-full cursor-pointer w-9 h-9 bg-primaryGreenLight hover:bg-primaryGreenDark text-almostWhite hover:text-white ring-primaryGreenDark ring-2"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className="px-2 py-1 transition-all rounded-lg cursor-pointer bg-primaryGreenLight hover:bg-primaryGreenDark text-almostWhite hover:text-white ring-primaryGreenDark ring-2"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              {bookingText.today}
            </h1>
            <GrFormNext
              className="p-2 transition-all rounded-full cursor-pointer w-9 h-9 bg-primaryGreenLight hover:bg-primaryGreenDark text-almostWhite hover:text-white ring-primaryGreenDark ring-2"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7 ">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="grid text-sm text-center text-gray-500 select-none h-14 w-14 place-content-center"
              >
                {day}
              </h1>
            );
          })}
        </div>

        <div className="grid grid-cols-7 ">
          {generateDate(today.month(), today.year(), currentDate, gcEvents).map(
            ({ date, currentMonth, today, busy, inPast }, index) => {
              return (
                <div
                  key={index}
                  className="grid p-2 text-sm text-center border-t h-14 place-content-center"
                >
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-300 pointer-events-none",
                      inPast ? "text-gray-300 pointer-events-none" : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-transparent text-transparent"
                        : "",
                      busy
                        ? "bg-red-800 text-almostWhite pointer-events-none"
                        : "",
                      today ? "bg-gray-500 text-white" : "",
                      "h-10 w-10 rounded-full grid place-content-center hover:bg-primaryGreen hover:text-white transition-all cursor-pointer duration-300 select-none"
                    )}
                    onClick={() => {
                      setSelectDate(date.locale(language));
                    }}
                  >
                    {date.date()}
                  </h1>
                  {selectDate.toDate().toDateString() ===
                    date.toDate().toDateString() && (
                    <div className="absolute items-center justify-center w-10 h-10 text-gray-200 bg-green-800 rounded-full shrink-0 grow-0 -z10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 -z-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12l4 4L18 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between h-28 md:w-1/3 w-80 md:h-96 md:px-5 ">
        <div className="flex items-center justify-between w-full md:items-start md:flex-col">
          <h1 className="font-normal">{bookingText.selDate} </h1>
          <h1
            className={`p-3 my-4 rounded-lg font-semi bold w-fit animate-txtBlur ${
              selectDate.toDate().toDateString() ===
              currentDate.toDate().toDateString()
                ? "text-gray-400"
                : ""
            }`}
          >
            {selectDate.toDate().toDateString() ===
            currentDate.toDate().toDateString()
              ? `${bookingText.noSelection}`
              : selectDate.toDate().toDateString()}
          </h1>
        </div>
        <div>
          <p className="text-sm italic">{bookingText.startTimeNotice}</p>
        </div>
      </div>
    </div>
  );
};

export default TWCalendar;
