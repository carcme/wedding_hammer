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
        return { ...accord, isOpen: false }; // use this to have only one open at a time
        // return { ...accord };
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
      <section className="bg-primaryGreen">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap border-b border-almostWhite">
            {accordions.map((accordion, index) => (
              <AccordionElement
                key={index}
                title={accordion.title}
                text={accordion.text}
                link={accordion.link}
                linkTxt={accordion.linkTxt}
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
