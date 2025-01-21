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
      className={`fixed top-0 z-50 mx-auto flex h-24 w-full items-center justify-between px-2 text-white transition-colors duration-700 ease-in-out xl:px-40 ${
        scrollPosition < 100 ? "bg-primaryGreen" : "bg-primaryGreen/90"
      } ${isOpen ? "bg-primaryGreenDark" : ""} `}
    >
      {/* Logo */}
      <Link to="/" className="pl-4 sm:pl-12">
        <img
          src={Logo}
          alt="hammer3-logo"
          className="h-14 w-14 rounded-full hover:scale-110"
        />
      </Link>{" "}
      {/* Desktop Navigation */}
      <button
        className="ml-10 hidden transition duration-300 hover:cursor-pointer md:flex"
        aria-label="language"
        onClick={changeLanguage}
      >
        <span
          className={`fi fib py-[14px] ${
            language === "de" ? "fi-gb" : "fi-de"
          }`}
        ></span>
      </button>
      <ul className="relative hidden text-almostWhite md:flex">
        {/* hover-diagonal-line */}
        {navbarLinks.map((item, index) => (
          <li
            key={index}
            className="m-2 cursor-pointer p-3 capitalize duration-300"
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "relative before:absolute before:-top-2 before:left-0 before:block before:h-0.5 before:w-full before:rounded-full before:bg-almostWhite before:content-['']"
                  : "relative"
              }
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div
        id="big-nav-buttons"
        className="flex flex-grow justify-end space-x-4 pr-4 text-white"
      >
        <div className="items-end space-x-4">
          <Link to="/booking">
            <button
              className="rounded-full border-2 border-primaryGreenDark bg-transparent p-3 transition duration-300 hover:cursor-pointer hover:bg-primaryGreenDark"
              aria-label="Show mysteries"
            >
              <FaRegCalendarAlt size={16} color="#ddd" />
            </button>
          </Link>
          <Link to="/contact">
            <button
              className="rounded-full border-2 border-primaryGreenDark bg-primaryGreenDark p-3 transition duration-300 hover:cursor-pointer hover:bg-transparent/20"
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
        className={`fixed left-0 top-[96px] z-50 h-full w-[60%] bg-primaryGreen p-10 text-primaryHoneyDew duration-700 ease-in-out md:hidden ${
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
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            <li className="z-50 cursor-pointer border-b p-4 duration-300 hover:border-b-primaryGreenDark hover:font-extrabold">
              {item.text}
            </li>
          </NavLink>
        ))}
        <button
          className="z-50 cursor-pointer p-4 duration-300"
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
