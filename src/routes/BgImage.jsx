import React from "react";
import image from "@/assets/image/greenCarpet.jpg";
import { Link } from "react-router-dom";

const BgImage = () => {
  console.log("Home page");
  return (
    <>
      <section
        className="relative w-full h-screen bg-cover color-white"
        style={{
          background: `url(${image})`,
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.4)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid h-screen grid-cols-1 text-center text-white border-4 sm:grid-cols-2 place-content-center">
          <div className=""></div>
          <div className="">
            <h1 className="m-6 text-4xl sm:pt-40 pt-[440px]">
              Image Demo Page
            </h1>
            <p className="p-3 text-xl ">
              Get ready to transform your React applications into visually
              stunning experiences.
            </p>
            <Link
              to="/contact"
              className="p-2 text-sm bg-black border hover:bg-white hover:text-black"
            >
              Start Now
            </Link>
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center w-full h-screen text-white">
          <div className="grid h-48 grid-cols-2 text-white place-content-stretch">
            <div className="invisible">01</div>
            <div className="invisible">02</div>
            <div className="invisible">03</div>
            <div>
              <div className="flex flex-col items-center justify-center pt-20 pr-6 text-white sm:pt-40">
                <h1 className="m-6 text-4xl text-center">
                  Image <span className="sm:m-0 m-[-60px]"> Demo Page</span>
                </h1>
                <p className="text-xl text-center">
                  Get ready to transform your React applications into visually
                  stunning experiences.
                </p>
                <a href="#">Start Now</a>
              </div>
            </div>
          </div> 
        </div>*/}
      </section>{" "}
    </>
  );
};

export default BgImage;
