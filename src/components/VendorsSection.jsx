import React from "react";
import ProfileCard from "./ProfileCard";

const VendorsSection = ({ sections }) => {
  console.log("VendorsSection", sections);

  return (
    <>
      <div className="container bg-white ">
        <div className="mx-auto max-w-screen-2xl ">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="">
              {section.items.length > 0 && (
                <div
                  className={`justify-center mx-auto text-xl ${
                    sectionIndex > 0 ? "my-16" : ""
                  }`}
                >
                  <p className="font-bold sm:py-6 font-Hind">{section.stub}</p>
                  <h1 className="my-2 text-2xl leading-10 text-gray-700 font-Montserrat sm:text-4xl">
                    {section.title}
                  </h1>
                  <p className="mb-2.5 font-Hind text-[18px] tracking-widest text-gray-700 font-thin">
                    {section.tagline}
                  </p>

                  <div
                    className={`grid grid-cols-1 gap-8 gap-x-10 mt-16 ${
                      section.items.length % 3 !== 0
                        ? "sm:grid-cols-3"
                        : "md:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {section.items.map((item, index) => (
                      <ProfileCard
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
