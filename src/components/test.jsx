import React from "react";

const Test = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="grid grid-cols-12 m-4 ">
          <div className="col-span-5">
            <div className="grid grid-rows-12">
              <div className="row-span-2 "></div>

              <div className="row-span-8 bg-red">
                <div className="w-full p-4 bg-white shadow-2xl">
                  <div className="flex justify-between text-xl font-Amatic">
                    <p>Product Review</p>
                    <p className="text-gray-700">17th March, 2021</p>
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold md:mt-10">
                    Coffee From Heaven
                  </h2>
                  <p className="my-3 font-medium leading-relaxed text-justify text-gray-700">
                    m adipisci aliquidLorem ipsum dolor sit amet consectetur
                    adipisicing elit. Autem aperiam nulla cupiditate saepe sed
                    quis veritatis minus rem adipisci aliquid. r adipisicing
                    elit. Autem aperiam nulla cupiditate saepe sed quis
                    veritatis minus rem adipisci aliquidLorem ipsum dolor sit
                    amet consectetur adipisicing elit. Autem aperiam nulla
                    cupiditate saepe sed quis veritatis minus rem adipisci
                    aliquid.
                  </p>
                  <button className="p-3 px-5 mt-2 text-sm font-bold md:mt-5 bg-primaryGoldSatin text-primaryGreenDark hover:bg-purple-800">
                    Read More
                  </button>
                </div>
              </div>

              <div className="row-span-2 "></div>
            </div>
          </div>
          <div className="order-first col-span-7 scale-105 shadow-2xl -z-10 ">
            <img
              className="object-cover w-full h-full bg-cover row-span-8 xl:max-w-6xl "
              src="https://images.pexels.com/photos/1083502/pexels-photo-1083502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
