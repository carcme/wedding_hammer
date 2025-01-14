import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import { FaRegCalendarAlt, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/logo/hammer3_logo.svg";
import LinksData from "../data/navbarLinks";
import useScrollPosition from "../hooks/useScrollPosition";
import {
  getLanguage,
  useLanguage,
  useLanguageChange,
} from "../LanguageContext";

const Navbar = () => {
  const menuRef = useRef();
  const language = useLanguage();
  const changeLanguage = useLanguageChange();
  const navbarLinks = getLanguage(LinksData);

  const [isOpen, setOpen] = useState(false);

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    let handler = (e) => {
      if (isOpen && !menuRef.current.contains(e.target)) {
        item;
        setOpen(false);
        console.log("closing menu");
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div
      className={`flex fixed justify-between items-center h-24 xl:px-40 mx-auto px-2 text-white 
       top-0 z-50 w-full transition-colors ease-in-out duration-700
      ${
        scrollPosition < 100 && !isOpen ? "bg-primaryGreen" : "bg-primaryGreen"
      } `}
    >
      {/* Logo */}
      <Link to="/" className="pl-4 sm:pl-12">
        <img
          src={Logo}
          alt="hammer3-logo"
          className="rounded-full h-14 w-14 hover:scale-110"
        />
      </Link>{" "}
      {/* Desktop Navigation */}
      <button
        className="hidden ml-10 transition duration-300 md:flex hover:cursor-pointer"
        aria-label="language"
        onClick={changeLanguage}
      >
        <span
          className={`py-[14px] fi fib ${
            language === "de" ? "fi-gb" : "fi-de"
          }`}
        ></span>
      </button>
      <ul className="relative hidden text-primaryHoneyDew hover-diagonal-line md:flex">
        {navbarLinks.map((item, index) => (
          <li
            key={index}
            className="p-4 m-2 capitalize duration-300 cursor-pointer "
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "relative before:content-[''] before:block before:absolute before:-top-2 before:left-0 before:w-full before:h-0.5 before:rounded-full before:bg-primaryGreenDark"
                  : "relative "
              }
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div
        id="big-nav-buttons"
        className="flex justify-end flex-grow pr-4 space-x-4 text-white "
      >
        <div className="items-end space-x-4">
          <Link to="/mystery">
            <button
              className="p-3 transition duration-300 bg-transparent border-2 rounded-full hover:bg-primaryGreenDark border-primaryGreenDark hover:cursor-pointer"
              aria-label="Show mysteries"
            >
              <FaRegCalendarAlt size={16} color="#ddd" />
            </button>
          </Link>
          <Link to="/contact">
            <button
              className="p-3 transition duration-300 border-2 rounded-full bg-primaryGreenDark hover:bg-transparent/20 border-primaryGreenDark hover:cursor-pointer"
              aria-label="Contact"
            >
              <FaEnvelope size={16} color="#ddd" />
            </button>
          </Link>
        </div>
      </div>
      {/* Mobile Navigation Icon */}
      <div
        ref={menuRef}
        className="block transition duration-700 ease-in-out md:hidden"
      >
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#EBF5DF"
          size={20}
        />
      </div>
      {/* Mobile Navigation Menu */}
      <ul
        className={`top-[64px] md:hidden left-0 w-[60%] p-10 bg-primaryGreen text-primaryHoneyDew fixed
           h-full z-50 ease-in-out duration-700 
        ${
          isOpen
            ? "translate-x-0 bg-primaryGreen"
            : "-translate-x-full bg-transparent"
        }`}
      >
        {/* Mobile Navigation Items */}
        {navbarLinks.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) => (isActive ? " text-white " : "")}
          >
            <li className="z-50 p-4 duration-300 border-b cursor-pointer hover:border-b-primaryGreenDark hover:font-extrabold">
              {item.text}
            </li>
          </NavLink>
        ))}
        <button
          className="z-50 p-4 duration-300 cursor-pointer "
          aria-label="language"
          onClick={changeLanguage}
        >
          {language === "de" && <span className="fi fi-gb fib"></span>}
          {language === "en" && <span className="fi fi-de fib"></span>}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
