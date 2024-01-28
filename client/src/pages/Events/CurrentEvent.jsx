import React from "react";
import hero from "../../assets/illustrations/events-hero-1.png";
import { Link } from "react-router-dom";
import { CurrentEventData } from "../../data/EventDesc";
import { useDarkMode } from "../../DarkModeContext";

const CurrentEvent = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <div className="bg-lineColor border-solid w-full h-[1.5px]">
        <hr></hr>
      </div>
      <div
        className={`overflow-hidden relative bg-yellow-100 " ${
          isDarkMode ? "bg-yellow-200" : ""
        }`}
      >
        {/* Triangular cut element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 80%)" }}
            className={`w-full h-full bg-white ${
              isDarkMode ? "bg-zinc-900" : ""
            }`}
          ></div>
        </div>

        <div className="flex justify-center items-center h-screen">
          <div
            className={`box-border rounded-lg p-0 w-[60%] h-[60%]  max-xs:w-[80%] max-xs:h-[70%] max-xs:mr-0 bg-blue-300 relative max-xs:px-10 ${
              isDarkMode ? "bg-blue-400" : ""
            }`}
          >
            <img
              src={hero}
              alt="Overlapping Image"
              className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 max-xs:w-10 max-xs:h-10"
            />
            <div
              className={`text-greyText object-right-top " ${
                isDarkMode ? "text-gray-800 " : ""
              }`}
            >
              <p className="text-6xl font-bold absolute top-5 right-10 max-xs:text-2xl max-xs:right-7">
                {CurrentEventData[0].date}
              </p>
              <p className="text-3xl font-semibold absolute top-20 right-12 max-xs:text-xl max-xs:top-12 max-xs:right-7 ">
                {CurrentEventData[0].month}
              </p>
            </div>
            <div
              className={`flex flex-row mt-20 max-xs:flex-col max-xs:mt-0 " ${
                isDarkMode ? "text-gray-800" : ""
              }`}
            >
              <div className="flex flex-col w-[30%]">
                <img
                  src={CurrentEventData[0].image}
                  alt="Event Logo"
                  className="w-[50%] mt-20 ml-20 max-xs:w-0"
                />
              </div>
              <div className="flex flex-col w-[70%] max-xs:w-full p-4 max-xs:py-0 ">
                <p className="`flex leading-normal text-5xl font-bold text-black mt-10 max-xs:text-4xl  max-xs:text-center">
                  {CurrentEventData[0].title}
                </p>
                <button className="border-2 rounded-full h-10 w-40 border-blue-600 text-blue-600 font-semibold mt-5 max-xs:text-center max-xs:ml-10 ">
                  {CurrentEventData[0].type}
                </button>
                <p className="text-2xl font-semibold mt-5 max-xs:text-justify max-xs:text-lg max-sm:text-xl ">
                  {CurrentEventData[0].desc}
                </p>
                <div className="flex max-xs:flex-col max-xs:text-center">
                  <Link to="/event-details">
                    <button className="rounded-lg h-10 w-40 bg-blue-600 text-white font-semibold mt-7 mr-20  hover:bg-blue-800 max-xs:w-23 max-xs:mt-5 max-xs:mr-0">
                      More Details
                    </button>
                  </Link>
                  <button className="border-2 rounded-lg h-10 w-40 border-blue-600 text-black font-semibold mt-7 hover:bg-blue-400 max-xs:w-23 max-xs:mt-3 max-xs:ml-10">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentEvent;
