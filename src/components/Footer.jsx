import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
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
        <div className="border-[#222] border-2 relative z-10 text-white">
          <footer className="text-[#717171]">
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
                      <a href="#">
                        <span className=" hover:text-primaryGreen"></span>
                        <FaInstagram
                          size={20}
                          className="relative z-[1] "
                          color="#9ca3af"
                        />
                      </a>
                      {/* twitter */}
                      <a href="#">
                        <span className="inner"></span>
                        <FaTwitter
                          size={20}
                          className="relative z-[1]"
                          color="#9ca3af"
                        />
                      </a>
                      <a href="#">
                        <span className="inner"></span>
                        <FaYoutube
                          size={20}
                          className="relative z-[1]"
                          color="#9ca3af"
                        />
                      </a>
                      {/* linkdin */}
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-primaryGreen active:text-gray-600"
                      >
                        <svg
                          className="w-5 h-5"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      {/* github */}
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-primaryGreen active:text-primaryGreen"
                      >
                        <svg
                          className="w-5 h-5"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
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
