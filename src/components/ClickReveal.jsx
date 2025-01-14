import React from "react";

import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ClickReveal = ({ heading, listItems }) => {
  return (
    <>
      <label>
        <input
          className="absolute scale-0 cursor-pointer select-none sr-only peer/showLabel"
          type="checkbox"
        />

        <span className="block max-w-full mt-4 overflow-hidden transition-all duration-300 border-t border-b group peer/showLabel max-h-14 peer-checked/showLabel:max-h-96 border-primaryGreen ">
          <div className="flex items-center">
            <FaChevronRight className="mr-4 size-4 text-primaryGreen transition-transform duration-300 group-[:checked+&]:rotate-90" />
            <h3 className="flex items-center text-2xl font-bold tracking-widest cursor-pointer h-14 font-Amatic">
              {heading}
            </h3>
          </div>
          {listItems.map((item, index) => (
            <div key={index}>
              {/* Link Items */}
              {item.link && (
                <ul className="relative">
                  <li className="my-6 px-8 sm:text-lg font-Montserrat before:absolute before:content-[''] before:left-2 before:top-[13px] before:h-[1px] before:w-4 before:rounded-full before:bg-accentDecoration before:transition-all before:duration-200 translate-x-[-5px]">
                    <Link
                      key={index}
                      to={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primaryGreenDark font-Alegreya"
                    >
                      {item.text}
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          ))}
        </span>
      </label>
    </>
  );
};

export default ClickReveal;
