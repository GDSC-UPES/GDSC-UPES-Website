import React from 'react'
import bg from '../../assets/illustrations/events-partner-bg.png'
import partner1 from '../../assets/illustrations/events-partner-1.png'
import partner2 from '../../assets/illustrations/events-partner-2.png'
import partner3 from '../../assets/illustrations/events-partner-3.png'
import { useDarkMode } from "../../DarkModeContext";

const Sponsors = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div>
    <div className='bg-lineColor border-solid w-full h-[1.5px]'><hr></hr></div>
    <div className={` bg-amber-100 pb-20 max-xs:h-screen max-xs:pb-0' ${isDarkMode ? "bg-indigo-900" : ""}`}> 
      <div className="flex flex-row max-xs:flex-col">
          <div
            className={`flex flex-col max-xs:flex-col ml-24 max-xs:ml-10 text-orange-400  font-bold text-6xl max-xxs:text-2xl max-xs:text-4xl py-10 max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl mt-8 ${
              isDarkMode ? " text-orange-400" : ""
            }`}
          >
            <p>Our Sponsors</p>
            <div className={`text-greyText text-xl max-xs:text:lg mt-6 ${ isDarkMode ? " text-orange-100" : ""}`}>
              <p>Archive extrodinare of our sponsors</p>
            </div>
          </div>
        </div>
      
      <div className="flex flex-row max-xs:flex-col justify-center items-center h-80 py-60 max-xs:mt-20 ">
        <img src={partner1}
        alt="partner -1"
        className='w-30 h-30 mr-20 max-xs:mt-10 max-xs:mr-0'/>
        <img src={partner2}
        alt="partner -3"
        className='w-30 h-30 mr-20 max-xs:mt-10 max-xs:mr-0'/>
        <img src={partner3}
        alt="partner -3"
        className='w-30 h-30 max-xs:mt-10 max-xs:mr-0 max-xs:px-10 max-xs:h-30'/>
      </div>
    </div>
    
    </div>
  )
}

export default Sponsors
