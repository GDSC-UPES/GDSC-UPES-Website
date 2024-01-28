import React from 'react'
import { CurrentEventData } from '../../data/EventDesc'
import speaker from "../../static/speaker.png"
import { useDarkMode } from "../../DarkModeContext";

const Details = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div>
      <div className='bg-lineColor border-solid w-full h-[1.5px]'><hr></hr></div>
      <div className="flex flex-row max-xs:flex-col">
      <div className={`flex flex-col w-[60%] px-20 max-xs:px-10 bg-lime-100 max-xs:w-full max-xs:pb-5 ${ isDarkMode ? " bg-green-800" : ""}`}>
        <div className="max-xs:w-full  py-20 max-xxs:py-0 max-xs:py-2 max-md:py-10 max-lg:py-14 mt-8 max-xs:mt-10 max-lg:mt-6">
         <div className={`flex leading-normal text-lime-600 text-6xl font-bold max-xs:text-4xl max-xs:text-center ${ isDarkMode ? " text-lime-100" : ""}`}>
                <p>About {CurrentEventData[0].title}</p>
              </div>
              <div className={`text-greyText text-xl max-xs:text-lg max-xs:mt-2 max-xs:text-center ${ isDarkMode ? " text-green-200" : ""}`}>
              <p>About the current event blah blah blah blah</p>
            </div>
            <div className={`text-black text-xl mt-10 py-30 max-xs:text-justify ${ isDarkMode ? " text-gray-300" : ""}`}>
              <p>{CurrentEventData[0].aboutpara1}</p>
              <br></br>
              <p>{CurrentEventData[0].aboutpara2}</p>
            </div>
        </div>
      </div>

      <div className={`flex flex-col w-[60%] px-20 max-xs:px-10 bg-red-100 max-xs:w-full max-xs:pb-5 ${ isDarkMode ? " bg-red-800" : ""}`}>
        <div className="max-xs:w-full  py-20 max-xxs:py-0 max-xs:py-2 max-md:py-10 max-lg:py-14 mt-8 max-xs:mt-10 max-lg:mt-6">
         <div className={`flex leading-normal text-red-600 text-6xl max-xs:px-20 max-xs:ml-5 font-bold max-xs:text-4xl max-xs:text-center ${ isDarkMode ? " text-red-100" : ""}`}>
                <p>Speakers</p>
              </div>
              <div className={`text-greyText text-xl max-xs:text-lg max-xs:mt-2 max-xs:text-center ${ isDarkMode ? " text-red-300" : ""}`}>
              <p>Speakers of the event</p>
            </div>
          <div className="flex flex-row justify-center mt-[3rem]  text-center">
          <div className="flex flex-col justify-center mr-20">
          <img src={speaker} alt="" className="w-[15rem]"/>
          <p className={`text-[1.4rem] font-bold ${ isDarkMode ? " text-white" : ""}`}>Your Name</p> 
          </div>
          <div className="flex flex-col justify-center">
          <img src={speaker} alt="" className="w-[15rem]"/>
          <p className={`text-[1.4rem] font-bold ${ isDarkMode ? " text-white" : ""}`}>Your Name</p> 
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Details

