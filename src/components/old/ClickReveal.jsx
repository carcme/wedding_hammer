import React from "react";

import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ClickReveal = ({ heading, listItems }) => {
  return (
    <>
      <label>
        <input
          className="peer/showLabel sr-only absolute scale-0 cursor-pointer select-none"
          type="checkbox"
        />

        <span className="peer/showLabel group mt-4 block max-h-14 max-w-full overflow-hidden border-b border-t border-primaryGreen transition-all duration-300 peer-checked/showLabel:max-h-96">
          <div className="flex items-center">
            <FaChevronRight className="mr-4 size-4 text-primaryGreen transition-transform duration-300 group-[:checked+&]:rotate-90" />
            <h3 className="font-Jost flex h-14 cursor-pointer items-center text-2xl font-bold tracking-widest">
              {heading}
            </h3>
          </div>
          {listItems.map((item, index) => (
            <div key={index}>
              {/* Link Items */}
              {item.link && (
                <ul className="relative">
                  <li className="font-Jost my-6 translate-x-[-5px] px-8 before:absolute before:left-2 before:top-[13px] before:h-[1px] before:w-4 before:rounded-full before:bg-accentDecoration before:transition-all before:duration-200 before:content-[''] sm:text-lg">
                    <Link
                      key={index}
                      to={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-Jost text-primaryGreenDark"
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
