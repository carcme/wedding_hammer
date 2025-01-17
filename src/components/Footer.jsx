import React from "react";
import { Link } from "react-router-dom";
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
    <div id="footer" className="relative w-full h-full bg-cover ">
      <div
        className="h-full bg-cover bg-center object-cover animate-bgBlur mix-blend-overlay bg-[linear-gradient(to_bottom,rgba(27,27,27,0.9),  rgba(27,27,27,0.7)),url('./assets/image/forest_wedding.webp')]"
        loading="lazy"
      >
        <div className="relative z-10">
          <footer className="">
            <div className="container px-5 py-24 mx-auto md:px-8 lg:px-16">
              <div className="flex flex-wrap mx-auto text-left">
                <div className="px-8 pb-16 lg:w-1/3 md:w-1/2">
                  <h2
                    className="mb-10 pt-8 font-semibold tracking-widest text-primaryGreen text-[18px] relative
                before:content-['01'] before:block before:absolute before:-left-0 before:-top-2 before:font-Montserrat before:text-[10px] before:font-normal hover-diagonal-line
                after:block after:absolute after:top-1 after:left-6 after:h-0.5 after:w-6 after:overflow-hidden after:bg-accentDecoration"
                  >
                    Our Address
                  </h2>
                  <div className="font-Hind text-[14px] tracking-widest leading-6 text-[#717171]">
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
                  <h2
                    className="mb-8 pt-8 font-semibold tracking-widest text-primaryGreen text-[18px] relative
                  before:content-['02'] before:block before:absolute before:-left-0 before:-top-2 before:font-Montserrat before:text-[10px] before:font-normal after:block after:absolute after:top-1 after:left-6 after:h-0.5 after:w-6 after:overflow-hidden after:bg-accentDecoration"
                  >
                    Useful Links
                  </h2>
                  <ul className="mb-10 list-none font-Hind text-[12px] tracking-[3px] leading-6 text-[#717171] ">
                    {text.map((item, index) => (
                      <li
                        key={index}
                        className="py-1.5 ml-2 uppercase duration-200 cursor-pointer hover:text-primaryGreen relative before:absolute before:content-[''] before:-left-5 before:top-[14px] before:block before:w-1.5 before:h-1.5 before:rounded-full before:font-normal before:bg-transparent hover:before:bg-accentDecoration before:transition-all before:duration-200 translate-x-[-5px]"
                      >
                        <Link to={item.path}>{item.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full px-8 lg:w-5/12">
                  <h2
                    className="mb-10 pt-8 font-semibold tracking-widest text-primaryGreen text-[18px] relative
                  before:content-['03'] before:block before:absolute before:left-0 before:-top-2 before:font-Montserrat before:text-[10px] before:font-normal hover-diagonal-line     after:block after:absolute after:top-1 after:left-6 after:h-0.5 after:w-6  after:overflow-hidden after:bg-accentDecoration"
                  >
                    Social Links
                  </h2>
                  <div className="flex items-center justify-center gap-4 pb-8 lg:justify-start">
                    <div className="flex gap-4">
                      {/* instagram */}
                      <Link to="#">
                        <span className=" hover:text-primaryGreen"></span>
                        <FaInstagram
                          size={20}
                          className="relative z-[1] transition-all  cursor-pointer bg-transparent hover:scale-110 text-gray-400 hover:text-primaryGreen"
                        />
                      </Link>
                      {/* twitter */}
                      <Link to="#">
                        <span className="inner"></span>
                        <FaTwitter
                          size={20}
                          className="relative z-[1] transition-all  cursor-pointer bg-transparent hover:scale-110 text-gray-400 hover:text-primaryGreen"
                        />
                      </Link>
                      <Link to="#">
                        <span className="inner"></span>
                        <FaFacebook
                          size={20}
                          className="relative z-[1] transition-all  cursor-pointer bg-transparent hover:scale-110 text-gray-400 hover:text-primaryGreen"
                        />
                      </Link>
                      <Link to="#">
                        <span className="inner"></span>
                        <FaYoutube
                          size={20}
                          className="relative z-[1] transition-all  cursor-pointer bg-transparent hover:scale-110 text-gray-400 hover:text-primaryGreen"
                        />
                      </Link>
                      {/* linkdin */}
                      <Link
                        to="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-primaryGreen active:text-gray-600"
                      >
                        <span className="inner"></span>
                        <FaLinkedin
                          size={20}
                          className="relative z-[1] transition-all  cursor-pointer bg-transparent hover:scale-110 text-gray-400 hover:text-primaryGreen"
                        />
                      </Link>
                      {/* github */}
                      <Link
                        to="https://github.com/carcme"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-primaryGreen active:text-primaryGreen"
                      >
                        <span className="inner"></span>
                        <FaGithub
                          size={20}
                          className="relative z-[1] transition-all  cursor-pointer bg-transparent hover:scale-110 text-gray-400 hover:text-primaryGreen"
                        />
                      </Link>
                    </div>
                  </div>
                  {/* <div className="mb-6 ">
                    <span className="inline-flex mt-4 text-white sm:ml-auto sm:mt-0 sm:justify-start">
                      <ul className="social">
                        <li>
                          <a href="#">
                            <span className="inner"></span>
                            <FaFacebook size={16} className="relative z-[1]" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="inner"></span>
                            <FaTwitter size={16} className="relative z-[1]" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="inner"></span>
                            <FaInstagram size={16} className="relative z-[1]" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="inner"></span>
                            <FaYoutube size={16} className="relative z-[1]" />
                          </a>
                        </li>
                      </ul>
                    </span>
                  </div> */}

                  <SubscribeWidget />
                </div>
              </div>
            </div>
            <div className="bg-transparent/80 ">
              <div className="container flex flex-col items-center px-5 py-6 mx-auto text-sm">
                <Link to="https://www.hammer3.com">
                  <p>
                    © <span>Hammer3 </span> 2024 | All Rights Reserved
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
