import React from "react";
import image from "@/assets/girlForest.jpg";
const About = () => {
  console.log("About page");
  return (
    <>
      <section
        className={`relative w-full h-screen color-white`}
        style={{
          background: `url(${image})`,
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center justify-center w-full h-screen text-3xl font-bold text-center text-neutral-300">
          About Page
        </div>
      </section>
    </>
  );
};

export default About;
