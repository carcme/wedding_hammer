import { Link } from "react-router-dom";

export default function AccordionElement(props) {
  const { title, text, link, linkTxt, isOpen, toggleAccordion } = props;

  return (
    <div className="min-w-full">
      <div className="relative flex items-center border-t border-almostWhite">
        <div className="absolute h-8 w-8 rounded-full bg-transparent sm:left-5 sm:size-16" />
        <svg
          className="z-10 mx-2 shrink-0 fill-almostWhite sm:mx-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center transform transition duration-300 ease-out ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center transform transition duration-300 ease-out ${
              isOpen ? "rotate-180" : "rotate-90"
            }`}
          />
        </svg>
        <button
          className={`font-Jost w-full p-2 text-left text-sm tracking-widest text-almostWhite transition duration-300 sm:p-3`}
          onClick={toggleAccordion}
        >
          {title}
        </button>
      </div>
      <div
        aria-labelledby={title}
        className={`grid overflow-hidden text-sm transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-row">
            <div className="flex flex-col">
              {text.map((paragraph, i) => (
                <div key={i} className="">
                  <p
                    className="font-Jost break-words pb-4 pl-10 pr-10 text-left text-sm font-light leading-loose tracking-wide text-neutral-100 sm:pl-[93px]"
                    onClick={props.toggleAccordion}
                  >
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end">
              {link?.length > 0 && (
                <Link to={link} onClick={toggleAccordion}>
                  <button className="font-Jost rounded bg-primaryGreenDark px-4 py-2 text-center font-bold text-white transition duration-200 hover:bg-almostWhite hover:text-primaryGreen">
                    {linkTxt}
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
