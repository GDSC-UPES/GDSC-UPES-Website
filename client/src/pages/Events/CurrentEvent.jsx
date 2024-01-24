import React from 'react'
import hero from "../../assets/illustrations/events-hero-1.png"
import { Link } from 'react-router-dom'
import { CurrentEventData } from '../../data/EventDesc'

const CurrentEvent = () => {
    return (
    <>
<div className='bg-lineColor border-solid w-full h-[1.5px]'><hr></hr></div>
    <div className="relative bg-yellow-100">
    {/* Triangular cut element */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 80%)' }} className="w-full h-full bg-white"></div>
    </div>
      <div className="flex justify-center items-center h-screen">
      <div className="box-border rounded-lg p-0 w-[60%] h-[60%] bg-blue-300 relative">
      <img
    src={hero}
    alt="Overlapping Image"
    className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20"
  />
        <div className="text-greyText object-right-top">
          <p className='text-6xl font-bold absolute top-5 right-10'>{CurrentEventData[0].date}</p>
          <p className='text-3xl font-semibold absolute top-20 right-12'>{CurrentEventData[0].month}</p>
        </div>
        <div className='flex flex-row mt-20 '>
        <div className="flex flex-col w-[30%]">
          <img 
          src={CurrentEventData[0].image}
          alt="Event Logo"
          className='w-[50%] mt-20 ml-20'
          />
          </div>
          <div className="flex flex-col w-[70%] p-4 ">
          <p className='flex leading-normal text-5xl font-bold text-black mt-10 '>{CurrentEventData[0].title}</p>
          <button className='border-2 rounded-full h-10 w-40 border-blue-600 text-blue-600 font-semibold mt-5 '>{CurrentEventData[0].type}</button>
          <p className='text-2xl font-semibold mt-5'>{CurrentEventData[0].desc}</p>
          <div className="flex">
            <Link to="/event-details">
          <button className='rounded-lg h-10 w-40 bg-blue-600 text-white font-semibold mt-7 mr-20  hover:bg-blue-800'>More Details</button></Link>
          <button className='border-2 rounded-lg h-10 w-40 border-blue-600 text-black font-semibold mt-7 hover:bg-blue-400'>Register</button>
          </div>
          </div>
        </div>
         </div>
         </div>
    </div>
    </>
  )
}

export default CurrentEvent
