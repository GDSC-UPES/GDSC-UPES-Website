import React from 'react'
import AboutUs from "../../assets/illustrations/home-about.png"

const About = () => {
  return (
    <>
    <div className='flex flex-col '>
    <div className='bg-lineColor border-solid w-full h-[1.5px]'><hr></hr></div>
    <div className='flex flex-row'>
    <div className='w-[50%] max-xs:w-full ml-24 max-xxs:ml-2 max-xs:ml-4 max-md:ml-10 max-lg:ml-12 max-xl:ml-16 py-20 max-xxs:py-0 max-xs:py-2 max-md:py-10 max-lg:py-14 mt-8 max-xxs:mt-2 max-xs:mt-4 max-lg:mt-6'>
    <div className='text-greyText drop-shadow-custom'>
          <div className='flex flex-col max-xs:flex-row font-bold text-6xl max-xxs:text-xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl'>
            <div className='flex leading-normal'>
            <p>About Us</p>
            </div>
          </div>
        <div className='flex leading-normal text-2xl max-xs:text-lg max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl mt-4 max-xxs:mt-1 max-xs:mt-2 max-sm:mt-3'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
        </div>
        <br></br>
        <div className='flex leading-normal text-2xl max-xs:text-lg max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl mt-4 max-xxs:mt-1 max-xs:mt-2 max-sm:mt-3'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
        </div>
        <br></br>
        <div className='flex leading-normal text-2xl max-xs:text-lg max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl mt-4 max-xxs:mt-1 max-xs:mt-2 max-sm:mt-3'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
        </div>
        </div>
        </div>
    
 
        <div className='w-[45%] max-xxs:w-0 max-xs:w-0 max-md:w-[68%] flex items-center justify-center'>
  <img
    src={AboutUs}
    alt="About Us"
    className='mx-auto h-85'
  />
</div>
    </div>
    </div>
        </>
    
  );
}

export default About;