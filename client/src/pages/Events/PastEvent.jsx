import React from "react";
import { PastEventData } from "../../data/PastEventData";
import { useState } from "react";
import { useDarkMode } from "../../DarkModeContext";

const PastEvent = () => {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const { isDarkMode } = useDarkMode();

  return (
    <>
      {/* line */}
      <div className="bg-lineColor border-solid w-full h-[1.5px]">
        <hr></hr>
      </div>
      <div className={`bg-lime-100 ' ${isDarkMode ? "bg-lime-950" : ""}`}>
        {/* Title */}
        <div className="flex flex-row max-xs:flex-col">
          <div
            className={`flex flex-col max-xs:flex-col ml-24 max-xs:ml-10 text-lime-600  font-bold text-6xl max-xxs:text-2xl max-xs:text-4xl py-10 max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl mt-8" ${
              isDarkMode ? " text-lime-100" : ""
            }`}
          >
            <p>Past Events</p>
            <div className={`text-greyText text-xl max-xs:text:lg mt-6 ${ isDarkMode ? " text-lime-100" : ""}`}>
              <p>Archive extrodinare of our sponsors</p>
            </div>
          </div>
        </div>

        {/* Event Boxes */}
        <div className="flex flex-row  items-center justify-center py-10">
          {PastEventData.slice(0, window.innerWidth >= 768 ? 4 : 2).map(
            (event, index) => (
              <div
                key={index}
                className={`border-0 rounded-lg  h-[50%] w-[20%] bg-white ml-10 relative drop-shadow-lg pb-10 max-xs:w-[45%] max-xs:height-[10%] max-xs:ml-2 ${isDarkMode ? "bg-green-50" : ""}`}>
                <button className="absolute border-0 rounded-full h-10 w-40 bg-lime-300 text-black font-semibold top-3 right-3">
                  {event.date}
                </button>
                <img
                  src={event.image}
                  className="h-[40%] w-50 mt-20 ml-20 max-xs:w-20 "
                />
                <div className="flex items-center justify-center font-bold text-2xl mt-5 max-xs:text-center ">
                  <p>{event.title}</p>
                </div>
                <div className="flex items-center justify-center text-justify ml-10 mr-10 mt-2">
                  <p className="font-medium">{event.desc}</p>
                </div>
              </div>
            )
          )}
        </div>
        {expanded && (
          <div
            className={`flex flex-row items-center justify-center py-10 transition-max-h duration-300  ${
              expanded ? "max-h-[1000px]" : "max-h-[0px]"
            }`}
          >
            {Array.from({ length: window.innerWidth >= 768 ? 4 : 2 }).map(
              (_, index) => {
                const event =
                  PastEventData[index + (window.innerWidth >= 768 ? 4 : 2)]; // Adjust the starting index accordingly
                return (
                  event && (
                    <div
                      key={index}
                      className="border-0 rounded-lg h-[50%] w-[20%] bg-white ml-10 relative drop-shadow-lg pb-10 max-xs:w-[45%] max-xs:height-[10%] max-xs:ml-2"
                    >
                      <button className="absolute border-0 rounded-full h-10 w-40 bg-lime-300 text-black font-semibold top-3 right-3">
                        {event.date}
                      </button>
                      <img
                        src={event.image}
                        className="h-[40%] w-50 mt-20 ml-20 max-xs:w-20 "
                      />
                      <div className="flex items-center justify-center font-bold text-2xl mt-5 max-xs:text-center ">
                        <p>{event.title}</p>
                      </div>
                      <div className="flex items-center justify-center text-justify ml-10 mr-10 mt-2">
                        <p className="font-medium">{event.desc}</p>
                      </div>
                    </div>
                  )
                );
              }
            )}
          </div>
        )}

        <div className="flex items-center justify-center py-10">
          <button
            onClick={handleToggle}
            class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700 "
          >
            {expanded ? "Close All" : "View All"}
          </button>
        </div>
      </div>
    </>
  );
};

export default PastEvent;
