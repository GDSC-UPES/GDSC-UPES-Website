import React from 'react'
import bg from '../../assets/illustrations/events-partner-bg.png'
import partner1 from '../../assets/illustrations/events-partner-1.png'
import partner2 from '../../assets/illustrations/events-partner-2.png'
import partner3 from '../../assets/illustrations/events-partner-3.png'
import { useDarkMode } from "../../DarkModeContext";

const Partners = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div>
    <div className='bg-lineColor border-solid w-full h-[1.5px]'><hr></hr></div>
    <div style={{ backgroundImage: `url(${require('../../assets/illustrations/events-partners-bg-main.png')})` }} className='h-screen ' >
      {/* <div className="flex flex-row ">
            <div className="flex flex-col ml-24 text-red-600 max-xs:flex-row font-bold text-6xl max-xxs:text-xl py-10 max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl mt-8">
                <p>Our Partners</p>
              <div className="text-greyText text-xl mt-5">
              <p>Archive extrodinare of our Partners</p>
            </div>
            </div>
      </div> */}
      <div className="flex flex-row max-xs:flex-col">
          <div
            className={`flex flex-col max-xs:flex-col ml-24 max-xs:ml-10 text-red-600  font-bold text-6xl max-xxs:text-2xl max-xs:text-4xl py-10 max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl mt-8" ${
              isDarkMode ? " text-red-600" : ""
            }`}
          >
            <p>Past Events</p>
            <div className={`text-greyText text-xl max-xs:text:lg mt-6 ${ isDarkMode ? " text-lime-100" : ""}`}>
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

export default Partners
