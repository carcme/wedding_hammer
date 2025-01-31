import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getAssetImageURL } from "@/lib/image-util";

const VendorProfileCard = ({
  image,
  imageAlt,
  name,
  service,
  comments,
  website,
  insta,
  facebook,
  twitter,
  linkedin,
  youtube,
}) => {
  if (!image.startsWith("https")) {
    image = getAssetImageURL(image);
  }

  return (
    <>
      {name.length > 0 && (
        <div className="flex h-full min-h-96 flex-row pt-4 sm:flex-col md:align-middle lg:min-w-64">
          <div className="flex-0 flex flex-grow flex-col md:max-w-sm">
            <img
              className="h-20 w-20 overflow-hidden rounded-full object-cover"
              src={image}
              alt={imageAlt}
            />
            <div className="font-Jost py-4">
              <div className="mb-2 text-[16px] font-semibold tracking-widest text-gray-700">
                {name}
              </div>
              <div className="w-fulltext-sm font-Jost mb-6 font-light tracking-widest">
                {service}
              </div>
              <p className="font-Jost text-[15px] tracking-widest text-gray-700">
                {comments}
              </p>
            </div>
          </div>
          <div className="items-end text-white sm:space-x-4 sm:py-4">
            {website.length > 0 && (
              <Link to={website} target="_blank" rel="noopener noreferrer">
                <span className="sm:inline-block">
                  <BsBrowserChrome
                    size={20}
                    className="relative z-[1] mb-2 cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                  />
                </span>
              </Link>
            )}
            {twitter.length > 0 && (
              <Link to={twitter} target="_blank" rel="noopener noreferrer">
                <span className="inline-block">
                  <FaTwitter
                    size={20}
                    className="relative z-[1] mb-2 cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                  />{" "}
                </span>
              </Link>
            )}
            {insta.length > 0 && (
              <Link to={insta} target="_blank" rel="noopener noreferrer">
                <span className="sm:inline-block">
                  <FaInstagram
                    size={20}
                    className="relative z-[1] mb-2 cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                  />
                </span>
              </Link>
            )}
            {facebook.length > 0 && (
              <Link to={facebook} target="_blank" rel="noopener noreferrer">
                <span className="sm:inline-block">
                  <FaFacebook
                    size={20}
                    className="relative z-[1] mb-2 cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                  />
                </span>
              </Link>
            )}
            {linkedin.length > 0 && (
              <Link to={linkedin} target="_blank" rel="noopener noreferrer">
                <span className="sm:inline-block">
                  <FaLinkedin
                    size={20}
                    className="relative z-[1] mb-2 cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                  />
                </span>
              </Link>
            )}
            {youtube.length > 0 && (
              <Link to={youtube} target="_blank" rel="noopener noreferrer">
                <span className="sm:inline-block">
                  <FaYoutube
                    size={20}
                    className="relative z-[1] mb-2 cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                  />
                </span>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default VendorProfileCard;
