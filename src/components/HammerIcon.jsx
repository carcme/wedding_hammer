import React from "react";

const HammerIcon = ({ size = 18, color = "black", classname }) => {
  return (
    <>
      <div className="">
        <svg
          className={`hammerIcon ${classname}`}
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width={size} // added size here
          height={size} // added size here
          fill="currentColor"
          //   fill={color} // added color here
          viewBox="0 0 1130 1128"
        >
          <path
            d="M1051 853a563 563 0 0 0-25-615c6 25 9 52 9 81v24a220 220 0 0 1-152 214c54 12 96 40 125 82s44 97 44 162v25l-1 27zM295 534l-5 87-3 87-3 88-2 87c-1 57-2 114-1 170v1l12-170 4-88 4-87 3-87 2-88 1-174-12 174zM191 170a279 279 0 0 1 110-55c20-6 41-10 62-15a202 202 0 0 0-184 57c-15 17-27 36-34 57 15-16 30-31 46-44zm395-79 24-1a952 952 0 0 0 24 0v-1c-8-4-16-6-24-8a140 140 0 0 0-48 0c-8 2-16 4-24 8v1h24z"
            className="st2"
          />
          <path
            d="M752 642H610V478h142c97 0 107-66 107-106l-2-20c0-36-8-61-27-81s-46-30-81-30l-3-194h2c18 0 34 1 50 3a563 563 0 0 0-493 13c38-6 81-6 131 1l28 35h38l27-41c5-7 13-11 21-11h93c14 0 25 11 25 25v144c0 14-11 25-25 25h-86c-11 0-21-8-23-19-5-17-16-42-40-46-32-5-68 54-78 131H271c-5-42-17-68-55-75-75-14-156 110-156 110H48l1-8a563 563 0 0 0 191 693l33-664v-21h140v20l1-20h1l35 749c1 11-8 21-19 23 30 7 62 12 94 14V920h218c41-1 72-13 95-35 23-23 35-56 35-99 0-46-10-81-31-107-21-25-51-37-90-37z"
            className="st2"
          />
        </svg>
      </div>
    </>
  );
};

export default HammerIcon;
