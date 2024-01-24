import React from 'react'
import Goal1 from "../../assets/illustrations/home-goal-1.png"
import Goal2 from "../../assets/illustrations/home-goal-2.png"

const Goals = () => {
  return (
    <>
<div className='bg-lineColor border-solid w-full h-[1.5px]'><hr></hr></div>
<div className='flex flex-row '>
        {/* First Row */}
        <div className='flex flex-col w-[50%] mr-8 max-xs:w-full ml-24 max-xxs:ml-2 max-xs:ml-4 max-md:ml-10 max-lg:ml-12 max-xl:ml-16 py-20 max-xxs:py-0 max-xs:py-2 max-md:py-10 max-lg:py-14 mt-8 max-xxs:mt-2 max-xs:mt-4 max-lg:mt-6'>
          <div className='text-greyText drop-shadow-custom'>
            <div className='flex flex-col max-xs:flex-row font-bold text-6xl max-xxs:text-xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl'>
              <div className='flex leading-normal'>
                <p>Our Goals</p>
              </div>
            </div>
            <div className='flex leading-normal text-2xl max-xs:text-lg max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl mt-4 max-xxs:mt-1 max-xs:mt-2 max-sm:mt-3'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
            </div>
            <br></br>
            <div className='flex leading-normal text-2xl max-xs:text-lg max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl mt-4 max-xxs:mt-1 max-xs:mt-2 max-sm:mt-3'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
        </div>
        {/* Image in the First Row */}
        <div className='w-[40%] mt-10 spac'>
          <img
            src={Goal1}
            alt="Goal-1"
            className=' h-15'
          />
        </div>
      </div>

      <div className='flex flex-row'>
        {/* Image in the Second Row */}
        <div className='w-[60%]  max-xxs:w-0 max-xs:w-0 max-md:w-[68%] '>
          <img
            src={Goal2}
            alt="Goal-2"
            className='mx-auto h-15'
          />
          <br></br>
        </div>
        {/* Second Row */}
        <div className='w-[60%] mt-20 max-xs:w-full mr-24 max-xxs:mr-2 max-xs:mr-4 max-md:mr-10 max-lg:mr-12 max-xl:mr-16 py-4 max-xxs:py-0 max-xs:py-2 max-md:py-4 max-lg:py-6'>
          <div className='text-greyText drop-shadow-custom'>
            <div className='text-left flex leading-normal text-2xl max-xs:text-lg max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl mt-4 max-xxs:mt-1 max-xs:mt-2 max-sm:mt-3 '>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <br></br>
            <div className='text-left flex leading-normal text-2xl max-xs:text-lg max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl mt-4 max-xxs:mt-1 max-xs:mt-2 max-sm:mt-3'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <br></br>
          </div>
        </div>
      </div>
      </>
    
  );
}

export default Goals;
