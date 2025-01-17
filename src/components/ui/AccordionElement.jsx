export default function AccordionElement(props) {
  const { text } = props;

  return (
    <div className="min-w-full ">
      <div className="relative flex items-center border-t border-almostWhite ">
        <div className="absolute w-8 h-8 bg-transparent rounded-full sm:size-16 sm:left-5" />
        <svg
          className="z-10 mx-2 sm:mx-8 fill-almostWhite shrink-0"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transition duration-300 ease-out origin-center transform ${
              props.isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transition duration-300 ease-out origin-center transform ${
              props.isOpen ? "rotate-180" : "rotate-90"
            }`}
          />
        </svg>
        <button
          className={`w-full text-left text-almostWhite transition duration-300 text-sm sm:p-3 p-2 font-Alegreya tracking-widest`}
          onClick={props.toggleAccordion}
        >
          {props.title}
        </button>
      </div>
      <div
        aria-labelledby={props.title}
        className={`grid text-sm overflow-hidden transition-all duration-300 ease-in-out ${
          props.isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {text.map((paragraph, i) => (
            <p
              key={i}
              className="pb-4 pl-10 pr-10 sm:pl-[93px] leading-loose text-sm text-left break-words font-Montserrat text-neutral-100 tracking-wide"
              onClick={props.toggleAccordion}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
