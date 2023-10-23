import React from 'react';
import homeHero from '../static/homeHero.png'
import gdscLight from '../static/gdscLight.webp'
import Website from '../static/Website.png';
import Instagram from '../static/Instagram.png';
import LinkedIn from '../static/LinkedIn.png';
import Hashnode from '../static/Hashnode.png';
import TwitterX from '../static/TwitterX.png';
import GitHub from '../static/GitHub.png';
import AboutUs from "../static/home-about.png"
import Goal1 from "../static/home-goal-1.png"
import Goal2 from "../static/home-goal-2.png"

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='flex flex-col'>
        <div className='bg-lineColor border-solid w-full h-[1.5px]'><hr></hr></div>
    <div className='flex flex-row'>
      <div className='w-[32%] max-xs:w-full ml-24 max-xxs:ml-2 max-xs:ml-4 max-md:ml-10 max-lg:ml-12 max-xl:ml-16 py-20 max-xxs:py-0 max-xs:py-2 max-md:py-10 max-lg:py-14 mt-8 max-xxs:mt-2 max-xs:mt-4 max-lg:mt-6'>
        <div className='mb-6 max-xxs:mb-1 max-xs:mb-2'>
          <img
            src={gdscLight}
            alt="GDSC Light"
            className='w-[20%] max-xxs:w-[10%] max-xs:w-[12%] '
          />
        </div>

        <div className='text-greyText drop-shadow-custom'>
          <div className='flex flex-col max-xs:flex-row font-bold text-6xl max-xxs:text-xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl'>
            <div className='flex leading-normal'>
            <p className='whitespace-pre'>Google Developer </p>
            </div>
            <div className='flex leading-normal'>
            <p>Student Club</p>
            </div>
          </div>
          <p className='font-semibold text-5xl max-xs:text-lg max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl mt-4 max-xxs:mt-1 max-xs:mt-2 max-sm:mt-3'>UPES Dehradun</p>
        </div>

        <div className='flex py-10 max-xs:py-5 max-sm:py-5 max-md:py-7 max-lg:py-9 text-3xl max-sm:text-lg max-md:text-2xl max-lg:text-2xl max-xl:text-3xl'>
          <p>
            <span className='text-redText font-bold drop-shadow-custom'>Code.</span>
            <span className='text-blueText font-bold drop-shadow-custom px-2'>Create.</span>
            <span className='text-greenText font-bold drop-shadow-custom '>Collaborate.</span>
          </p>
        </div>


        <div className='flex flex-row'>
          <Link  to="#">
            <img src={Website} alt="Website" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10  mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://instagram.com/">
            <img src={Instagram} alt="Instagram" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://linkedin.com/">
            <img src={LinkedIn} alt="LinkedIn" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://hashnode.com/">
            <img src={Hashnode} alt="Hashnode" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://twitter.com">
            <img src={TwitterX} alt="TwitterX" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">
            <img src={GitHub} alt="GitHub" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
        </div>  
      </div>

      <div className='w-[68%] max-xxs:w-0 max-xs:w-0 max-md:w-[68%] flex'>
        <img
          src={homeHero}
          alt="Home Hero"
          className='w-full h-full'
        />
      </div>
    </div>
        <div className="about-us-container">
          <div class="ml-12 max-w-full mx-auto bg-white p-8">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-2/3 p-4">
                    <h2 class="text-greyText drop-shadow-custom font-bold text-6xl max-xxs:text-xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl">About Us</h2>
                    <p class="text-gray-600 mt-12 mr-24 text-2xl text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer eget justo a quam tincidunt ultricies. 
                        Vivamus euismod eget nisl ac bibendum. Suspendisse
                        non turpis at erat venenatis rhoncus.
                    </p>
                    <p class="text-gray-600 mt-6 mr-24 text-2xl text-justify">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p class="text-gray-600 mt-6 mr-24 text-2xl text-justify">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                      adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore 
                      magnam aliquam quaerat voluptatem.
                    </p>
                </div>
                <div class="md:w-1/3 p-4 mt-8">
                    <img src={AboutUs} class="w-full h-auto rounded" alt="About Us Image" />
                </div>
            </div>
        </div>

        <div className="goals-container">
          <div className="ml-12 max-w-full mx-auto bg-white p-8">
            <div class="flex flex-col md:flex-row">
            <div class="md:w-2/3 p-4">
              <h2 class="text-greyText drop-shadow-custom font-bold text-6xl max-xxs:text-xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl">Our Goals</h2>
                <p class="text-gray-600 mt-12 mr-24 text-2xl text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Integer eget justo a quam tincidunt ultricies. 
                  Vivamus euismod eget nisl ac bibendum. Suspendisse
                  non turpis at erat venenatis rhoncus.
                </p>
                <p class="text-gray-600 mt-6 mr-24 text-2xl text-justify">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div class="md:w-1/3 p-4 mt-8">
                    <img src={Goal1} class="w-full h-auto rounded" alt="About Us Image" />
              </div>
            </div>
          </div>
          <div className="ml-12 max-w-full mx-auto bg-white p-8">
            <div class="flex flex-col md:flex-row">
            <div class="md:w-1/3 p-4 mt-8">
                    <img src={Goal2} class="w-full h-auto rounded" alt="About Us Image" />
              </div>
              <div class="md:w-2/3 p-4">
                <p class="text-gray-600 mt-12 mr-8 text-2xl text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Integer eget justo a quam tincidunt ultricies. 
                  Vivamus euismod eget nisl ac bibendum. Suspendisse
                  non turpis at erat venenatis rhoncus.
                </p>
                <p class="text-gray-600 mt-6 mr-8 text-2xl text-justify">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Home;