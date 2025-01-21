import React from "react";
import Accordion from "./ui/Accordion";

const Faq = ({ headline, subheading }) => {
  return (
    <>
      <section className="relative bg-primaryGreen">
        <div className="container mx-auto flex flex-col py-12 lg:flex-row">
          <div className="w-2/3">
            <p className="my-8 max-w-lg font-bold text-gray-300">
              {subheading}
            </p>
            <p className="my-8 max-w-xl font-Lora text-4xl font-medium capitalize tracking-wide text-primaryGreenDark lg:pr-10">
              {headline}
            </p>
          </div>

          <Accordion />
        </div>
      </section>
    </>
  );
};

export default Faq;
