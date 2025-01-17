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

const ProfileCard = ({
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
}) => {
  console.log("name", name, name.length);

  if (!image.startsWith("https")) {
    image = getAssetImageURL(image);
  }

  return (
    <>
      {name.length > 0 && (
        <div className="flex flex-row h-full pt-4 align-middle sm:flex-col min-h-96 lg:min-w-64 ">
          <div className="flex flex-col flex-1 max-w-sm">
            <img
              className="object-cover w-20 h-20 overflow-hidden rounded-full"
              src={image}
              alt={imageAlt}
            />
            <div className="py-4 font-Montserrat">
              <div className="mb-2 text-[16px] tracking-widest text-gray-700 font-semibold ">
                {name}
              </div>
              <div className="mb-6 font-light tracking-widest font-Cormorant w-fulltext-sm">
                {service}
              </div>
              <p className="font-Lora text-[14px] tracking-widest text-gray-700 font-thin">
                {comments}
              </p>
            </div>
          </div>
          <div className="items-end text-white sm:space-x-4 sm:py-4 ">
            {website.length > 0 && (
              <Link to={website}>
                <span className="sm:inline-block">
                  <BsBrowserChrome
                    size={20}
                    className="mb-2 relative z-[1] transition-all  cursor-pointer bg-transparent hover:scale-110 text-gray-400 hover:text-primaryGreen"
                  />
                </span>
              </Link>
            )}
            {twitter.length > 0 && (
              <Link to={twitter}>
                <span className="sm:inline-block ">
                  <FaTwitter
                    size={20}
                    className="mb-2 relative z-[1] transition-all  cursor-pointer bg-transparent hover:scale-110 text-gray-400 hover:text-primaryGreen"
                  />{" "}
                </span>
              </Link>
            )}
            {insta.length > 0 && (
              <Link to={insta}>
                <span className="sm:inline-block ">
                  <FaInstagram
                    size={20}
                    className="mb-2 relative z-[1] transition-all  cursor-pointer bg-transparent hover:scale-110 text-gray-400 hover:text-primaryGreen"
                  />
                </span>
              </Link>
            )}
            {facebook.length > 0 && (
              <Link to={facebook}>
                <span className="sm:inline-block ">
                  <FaFacebook
                    size={20}
                    className="mb-2 relative z-[1] transition-all  cursor-pointer bg-transparent hover:scale-110 text-gray-400 hover:text-primaryGreen"
                  />
                </span>
              </Link>
            )}
            {linkedin.length > 0 && (
              <Link to={linkedin}>
                <span className="sm:inline-block ">
                  <FaLinkedin
                    size={20}
                    className="mb-2 relative z-[1] transition-all  cursor-pointer bg-transparent hover:scale-110 text-gray-400 hover:text-primaryGreen"
                  />
                </span>
              </Link>
            )}
            {linkedin.length > 0 && (
              <Link to={linkedin}>
                <span className="sm:inline-block ">
                  <FaYoutube
                    size={20}
                    className="mb-2 relative z-[1] transition-all  cursor-pointer bg-transparent hover:scale-110 text-gray-400 hover:text-primaryGreen"
                  />
                </span>
              </Link>
            )}
            FaYoutube
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
