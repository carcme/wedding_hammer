import React, { useEffect, useState } from "react";
import AccordionElement from "@/components/ui/AccordionElement";
import { getLanguage, useLanguage } from "@/LanguageContext";

import faqData from "@/data/faqData";

const Accordion = () => {
  const language = useLanguage();
  const text = getLanguage(faqData);
  const [accordions, setAccordion] = useState(text.faqs);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        // return { ...accord , isOpen: false }; // use this to have only one open at a time
        return { ...accord };
      }
    });
    setAccordion(updatedAccordions);
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    setAccordion(text.faqs);
  }, [language]);

  return (
    <>
      <section className="py-20 bg-primaryGold">
        <div className="mx-auto max-w-7xl ">
          <h2 className="p-4 mx-auto mb-10 text-2xl font-bold sm:text-5xl text-neutral-200 font-English">
            {text.title}
          </h2>
          <div className="flex flex-wrap border-b border-neutral-300">
            {accordions.map((accordion) => (
              <AccordionElement
                key={accordion.key}
                title={accordion.title}
                text={accordion.text}
                isOpen={accordion.isOpen}
                toggleAccordion={() => toggleAccordion(accordion.key)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Accordion;
