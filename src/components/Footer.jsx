import React from "react";
import { Link } from "react-router-dom";
import HammerIcon from "../components/HammerIcon";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import SubscribeWidget from "./Forms/SubscribeWidget";
import navData from "../data/navbarLinks";
import { getLanguage, useLanguage } from "../LanguageContext";

export const Footer = () => {
  const lang = useLanguage();
  const text = getLanguage(navData);

  return (
    <div id="footer" className="relative h-full w-full bg-cover">
      <div
        className="animate-bgBlur bg-[linear-gradient(to_bottom,rgba(27,27,27,0.9), rgba(27,27,27,0.7)),url('./assets/image/forest_wedding.webp')] h-full bg-cover bg-center object-cover mix-blend-overlay"
        loading="lazy"
      >
        <div className="relative z-10">
          <footer className="">
            <div className="container mx-auto px-5 py-24 md:px-8 lg:px-16">
              <div className="mx-auto flex flex-wrap text-left">
                <div className="px-8 pb-16 md:w-1/2 lg:w-1/3">
                  <h2 className="hover-diagonal-line before:font-Jost relative mb-10 pt-8 text-[18px] font-semibold tracking-widest text-primaryGreen before:absolute before:-left-0 before:-top-2 before:block before:text-[10px] before:font-normal before:content-['01'] after:absolute after:left-6 after:top-1 after:block after:h-0.5 after:w-6 after:overflow-hidden after:bg-accentDecoration">
                    Our Address
                  </h2>
                  <div className="font-Jost text-[14px] leading-6 tracking-widest text-[#717171]">
                    <Link
                      to={"https://maps.app.goo.gl/vTrFomLHUxdqG5qp7"}
                      target="_blank"
                    >
                      <p className="mb-4 w-fit hover:text-primaryGreen">
                        Hammer3
                        <br />
                        15746,
                        <br />
                        Groß Köris
                      </p>
                    </Link>
                    <p>
                      Email:
                      <Link to="/contact" className="hover:text-primaryGreen">
                        {/* <a
                        href="mailto:hammer@hammer3.com"
                        className="text-white"
                        > */}
                        Use Contact Form
                        {/* </a> */}
                      </Link>
                      <br />
                      <Link to={"tel:+4917634398803"}>
                        Tel:
                        <span className="text-primaryGreen">
                          +49 176 3439 8803
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="w-1/2 px-8 lg:w-1/4">
                  <h2 className="before:font-Jost relative mb-8 pt-8 text-[18px] font-semibold tracking-widest text-primaryGreen before:absolute before:-left-0 before:-top-2 before:block before:text-[10px] before:font-normal before:content-['02'] after:absolute after:left-6 after:top-1 after:block after:h-0.5 after:w-6 after:overflow-hidden after:bg-accentDecoration">
                    Useful Links
                  </h2>
                  <ul className="font-Jost mb-10 list-none text-[12px] leading-6 tracking-[3px] text-[#717171]">
                    {text.map((item, index) => (
                      <li
                        key={index}
                        className="relative ml-2 translate-x-[-5px] cursor-pointer py-1.5 uppercase duration-200 before:absolute before:-left-5 before:top-[14px] before:block before:h-1.5 before:w-1.5 before:rounded-full before:bg-transparent before:font-normal before:transition-all before:duration-200 before:content-[''] hover:text-primaryGreen hover:before:bg-accentDecoration"
                      >
                        <Link to={item.path}>{item.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full px-8 lg:w-5/12">
                  <h2 className="hover-diagonal-line before:font-Jost relative mb-10 pt-8 text-[18px] font-semibold tracking-widest text-primaryGreen before:absolute before:-top-2 before:left-0 before:block before:text-[10px] before:font-normal before:content-['03'] after:absolute after:left-6 after:top-1 after:block after:h-0.5 after:w-6 after:overflow-hidden after:bg-accentDecoration">
                    Social Links
                  </h2>
                  <div className="flex items-center justify-center gap-4 pb-8 lg:justify-start">
                    <div className="flex gap-4">
                      {/* instagram */}
                      <Link to="#" target="_blank" rel="noopener noreferrer">
                        <span className="hover:text-primaryGreen"></span>
                        <FaInstagram
                          size={20}
                          className="relative z-[1] cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                        />
                      </Link>
                      {/* twitter */}
                      <Link to="#" target="_blank" rel="noopener noreferrer">
                        <span className="inner"></span>
                        <FaTwitter
                          size={20}
                          className="relative z-[1] cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                        />
                      </Link>
                      <Link to="#" target="_blank" rel="noopener noreferrer">
                        <span className="inner"></span>
                        <FaFacebook
                          size={20}
                          className="relative z-[1] cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                        />
                      </Link>
                      <Link to="#" target="_blank" rel="noopener noreferrer">
                        <span className="inner"></span>
                        <FaYoutube
                          size={20}
                          className="relative z-[1] cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                        />
                      </Link>
                      {/* linkdin */}
                      <Link
                        to="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition duration-100 hover:text-primaryGreen active:text-gray-600"
                      >
                        <span className="inner"></span>
                        <FaLinkedin
                          size={20}
                          className="relative z-[1] cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                        />
                      </Link>
                      {/* github */}
                      <Link
                        to="https://github.com/carcme"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition duration-100 hover:text-primaryGreen active:text-primaryGreen"
                      >
                        <span className="inner"></span>
                        <FaGithub
                          size={20}
                          className="relative z-[1] cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                        />
                      </Link>{" "}
                      {/* hammer3 */}
                      <Link
                        to="https://hammer3.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="hover:text-primaryGreen"></span>
                        <HammerIcon
                          size={20}
                          color="#9ca3af"
                          classname="relative z-[1] cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                        />
                      </Link>
                    </div>
                  </div>
                  <SubscribeWidget />
                </div>
              </div>
            </div>
            <div className="bg-primaryGreen">
              <div className="container mx-auto flex flex-col items-center px-5 py-6 text-sm text-almostWhite">
                <Link
                  to="https://www.hammer3.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    © <span className="hover:text-gray-500">Hammer3 </span>{" "}
                    2024 | All Rights Reserved
                  </p>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
