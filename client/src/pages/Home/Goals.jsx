import React from 'react'
import Goal1 from "../../assets/illustrations/home-goal-1.png"
import Goal2 from "../../assets/illustrations/home-goal-2.png"
import { useDarkMode } from '../../DarkModeContext';

const Goals = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className='overflow-hidden'>
<div className='bg-lineColor border-solid w-full h-[1.5px]'><hr></hr></div>
<div className='flex flex-row max-xs:flex-col max-xxs:flex-col'>
        {/* First Row */}
        <div className='w-full px-20 mx-xxs:ml-5 max-xs:px-7  py-20 max-xxs:py-2 max-xs:py-4 max-md:py-10 max-lg:py-14 mt-8 max-xxs:mt-2 max-xs:mt-4 max-lg:mt-6'>
        <div className="text-greyText drop-shadow-custom">
          <div className='flex flex-col max-xs:flex-row max-md:flex-row  max-sm:flex-row font-bold text-6xl max-xxs:text-xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl px-0 max-xs:px-5 max-sm:px-10 max-md:px-10 max-lg:px-10 max-xl:px-20'>
            <div className='flex leading-normal '>
              <p>Goals</p>
            </div>
          </div>
         <div className='flex leading-normal max-xs:text-justify  text-2xl max-xs:text-xs max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl mt-4 max-xxs:mt-1 max-xs:mt-2 max-sm:mt-3 px-0 max-xs:px-5 max-xs:mr-5  max-md:px-10 max-lg:px-10 max-xl:px-20'>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
         </div>
         <br></br>
         <div className='flex leading-normal max-xs:text-justify sm:items-center text-2xl max-xs:text-xs max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl mt-4 max-xxs:mt-1 max-xs:mt-2 max-sm:mt-3 px-0 max-xs:px-5 max-sm:px-10 max-md:px-10 max-xs:mr-5 max-lg:px-10 max-xl:px-20'>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
         </div>
         <br></br>

         </div>
         </div>
        {/* Image in the First Row */}
        <div className='w-[40%] px-10  max-xxs:w-[50%] max-xxs:px-10 max-xs:ml-7 max-md:w-[80%] flex items-center justify-center] spac'>
          <img
            src={Goal1}
            alt="Goal-1"
            className=' h-15 max-xss:h-10'
          />
        </div>
      </div>

      <div className='flex flex-row max-xs:flex-col-reverse max-xxs:flex-col-reverse'>
        {/* Image in the Second Row */}
        <div className='w-[60%]  max-xxs:w-[60%] max-xs:w-[60%] max-md:w-[68%] max-xxs:px-10 max-xs:ml-20'>
          <img
            src={Goal2}
            alt="Goal-2"
            className='mx-auto h-15'
          />
          <br></br>
        </div>

        {/* Second Row */}
        <div className='w-full px-20 mx-xxs:ml-5 max-xs:px-7  py-20 max-xxs:py-2 max-xs:py-4 max-md:py-10 max-lg:py-14 mt-8 max-xxs:mt-2 max-xs:mt-4 max-lg:mt-6'>
          <div className='text-greyText drop-shadow-custom'>
          <div className='flex leading-normal max-xs:text-justify  text-2xl max-xs:text-xs max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl mt-4 max-xxs:mt-1 max-xs:mt-2 max-sm:mt-3 px-0 max-xs:px-5 max-xs:mr-5  max-md:px-10 max-lg:px-10 max-xl:px-20'>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <br></br>
            <div className='flex leading-normal max-xs:text-justify  text-2xl max-xs:text-xs max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl mt-4 max-xxs:mt-1 max-xs:mt-2 max-sm:mt-3 px-0 max-xs:px-5 max-xs:mr-5  max-md:px-10 max-lg:px-10 max-xl:px-20'>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <br></br>
          </div>
        </div>
      </div>
      </div>
    
  );
}

export default Goals;
