import React from 'react'
import AboutUsLight from "../../assets/illustrations/home-about.png"
import { useDarkMode } from '../../DarkModeContext';

const About = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
    <div className={`flex flex-col  overflow-hidden ${isDarkMode ? 'bg-zinc-900' : ''}`}>
    <div className={`bg-lineColor border-solid w-full h-[1.5px] ${isDarkMode ? 'bg-gray-800' : ''}`}><hr></hr></div>
    <div className='flex flex-col sm:flex-row md:flex-row'>


      <div className='w-full px-20 mx-xxs:ml-5 max-xs:px-7  py-20 max-xxs:py-2 max-xs:py-4 max-md:py-10 max-lg:py-14 mt-8 max-xxs:mt-2 max-xs:mt-4 max-lg:mt-6'>
        <div className={`text-greyText drop-shadow-custom ${isDarkMode ? 'text-white drop-shadow-custom1' : ''}`}>
          <div className='flex flex-col max-xs:flex-row max-md:flex-row  max-sm:flex-row font-bold text-6xl max-xxs:text-xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl px-0 max-xs:px-5 max-sm:px-10 max-md:px-10 max-lg:px-10 max-xl:px-20'>
            <div className='flex leading-normal '>
              <p>About Us</p>
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
         <div className='flex leading-normal max-xs:text-justify sm:items-center text-2xl max-xs:text-xs max-sm:text-xl max-xs:mr-5 max-md:text-2xl max-lg:text-3xl max-xl:text-4xl mt-4 max-xxs:mt-1 max-xs:mt-2 max-sm:mt-3 px-0 max-xs:px-5 max-sm:px-10 max-md:px-10 max-lg:px-10 max-xl:px-20'>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
         </div>
         </div>
         </div>
    
 
   <div className='w-[45%] max-xxs:w-[90%] max-xxs:px-10 max-xs:ml-7 max-md:w-[80%] flex items-center justify-center  '>
   <img
     src={AboutUsLight}
     alt="About Us"
     className='mx-auto h-85 max-xs:h-50'
   />
 </div>
     </div>
     </div>
         </>
    
   );
 }

 export default About;
