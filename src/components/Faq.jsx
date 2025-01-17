import React from "react";
import Accordion from "../components/Accordion";

const Faq = ({ headline, subheading }) => {
  return (
    <>
      <section className="relative bg-almostWhite">
        <div className="container flex flex-col py-12 mx-auto lg:flex-row">
          <div className="w-2/3">
            <p className="max-w-lg my-8 font-bold text-gray-800">Weddings</p>
            <h1 className="max-w-xl my-8 text-4xl font-medium tracking-wide capitalize font-Lora text-primaryGreen lg:pr-10">
              Frequently Asked Questions
            </h1>
          </div>

          <Accordion />
        </div>
      </section>
    </>
  );
};

export default Faq;
