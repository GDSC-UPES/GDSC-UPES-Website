import React from 'react'
import { CurrentEventData } from '../../data/EventDesc'
import { Link } from 'react-router-dom'
import calendar from "../../assets/logos/Calendar.png"
import clock from "../../assets/logos/Clock.png"
import map from "../../assets/logos/Map-Marker.png"
import { useDarkMode } from "../../DarkModeContext";

const Desc = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div>
      <div className='bg-lineColor border-solid w-full h-[1.5px]'><hr></hr></div>
        <div className={`bg-blue-200 h-screen max-xs:h-90 ${isDarkMode ? "bg-blue-950" : ""}`}>
          <div className="flex flex-row  items-center justify-center ">
        <div className="flex flex-col w-[20%]">
          <img 
          src={CurrentEventData[0].image}
          alt="Event Logo"
          className='w-[50%] mt-40 ml-20 max-xs:w-0'
          />
          </div>
          <div className="flex flex-col w-[50%] p-4 mt-40  max-xs:mt-10 max-xs:w-full max-xs:mr-20 max-xs:text-center">
          <p className= {`flex leading-normal text-5xl font-bold text-black mt-10 max-xs:mt-0 ${isDarkMode ? "text-white " : ""}`}>{CurrentEventData[0].title}</p>
          <button className={`border-2 rounded-full h-10 w-40 border-blue-600 text-blue-600 font-semibold mt-10 ${isDarkMode ? "text-blue-900 bg-blue-400 " : ""}`} >{CurrentEventData[0].type}</button>
          <p className={`text-2xl font-semibold mt-10 max-xs:text-lg max-xs:text-justify ${isDarkMode ? "text-blue-100 " : ""}`} >{CurrentEventData[0].desc}</p>
          <div className="flex">
            <Link to="">
          <button className='rounded-lg h-10 w-40 bg-blue-600 text-white font-semibold mt-10 mr-20  hover:bg-blue-800'>Register</button></Link>
          </div>
          </div>
          </div>
          <div className="flex flex-row items-center justify-center ">
          <div className={`flex flex-row box-border rounded-lg p-5 w-[60%] h-55 bg-orange-100 mt-20 max-xs:w-full ${isDarkMode ? "bg-orange-200 " : ""}`}>
            <div className="flex flex-col w-[30%] items-center justify-center ">
            <img 
            src ={calendar}
            alt="calendar-logo"
            className='h-20 w-20'
            />
            <p className='text-greyText text-4xl font-bold mt-2 max-xs:text-2xl '>{CurrentEventData[0].date}</p>
            <p className='text-greyText items-center text-xl font-semibold  '>{CurrentEventData[0].month}</p>
            </div>
            <div className="flex flex-col w-[50%] items-center justify-center mt-0">
            <img 
            src ={clock}
            alt="clock-logo"
            className='h-30 w-20'
            />
            <p className='text-greyText text-3xl font-bold max-xs:text-xl max-xs:px-10'>{CurrentEventData[0].time}</p>
            </div>
            <div className="flex flex-col w-[30%] items-center justify-center ">
            <img 
            src ={map}
            alt="map-logo"
            className='h-20 w-20'
            />
            <p className='text-greyText text-4xl font-bold mt-2 max-xs:text-2xl  max-xs:px-5'>{CurrentEventData[0].loc}</p>
            <p className='text-greyText items-center text-xl font-semibold max-xs:px-5 '>UPES Bidholi</p>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Desc
