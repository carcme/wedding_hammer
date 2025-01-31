import React from "react";
import VendorProfileCard from "./VendorProfileCard";

const VendorsSection = ({ sections }) => {
  return (
    <>
      <div className="container bg-white">
        <div className="mx-auto max-w-screen-2xl">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="">
              {section.items.length > 0 && (
                <div
                  className={`justify-center text-xl ${
                    sectionIndex > 0 ? "my-16" : ""
                  }`}
                >
                  <p className="font-Jost font-bold sm:py-6">{section.stub}</p>
                  <h1 className="font-Jost my-2 text-2xl leading-10 text-gray-700 sm:text-4xl">
                    {section.title}
                  </h1>
                  <p className="font-Jost font-normaltracking-widest mb-2.5 pt-6 text-[18px] text-gray-700">
                    {section.tagline}
                  </p>

                  <div
                    className={`mt-16 grid grid-cols-1 gap-8 gap-x-10 ${
                      section.items.length % 3 !== 0
                        ? "sm:grid-cols-3"
                        : "md:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {section.items.map((item, index) => (
                      <VendorProfileCard
                        key={index}
                        name={item.name}
                        image={item.img}
                        imageAlt={item.imgAlt}
                        service={item.service}
                        comments={item.comments}
                        website={item.website}
                        insta={item.instagram}
                        facebook={item.facebook}
                        twitter={item.twitter}
                        linkedin={item.linkedin}
                        youtube={item.youtube}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VendorsSection;
