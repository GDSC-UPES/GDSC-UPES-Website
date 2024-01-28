import React from 'react';
import gdscLight from '../../static/gdscLight.webp'
import Website from '../../static/Website.png';
import InstagramLight from '../../static/Instagram.png';
import InstagramDark from '../../static/Instagram-Dark.png';
import GitHubLight from '../../static/GitHub.png';
import GitHubDark from '../../static/GitHub-Dark.png';
import LinkedInLight from '../../static/LinkedIn.png';
import LinkedInDark from '../../static/LinkedIn-Dark.png';
import TwitterXLight from '../../static/TwitterX.png';
import TwitterXDark from '../../static/TwitterX-Dark.png';
import WebsiteLight from '../../static/Website.png';
import WebsiteDark from '../../static/Website-Dark.png';
import Hashnode from '../../static/Hashnode.png';

import { Link } from "react-router-dom";
import { useDarkMode } from '../../DarkModeContext';
import gdscDark from "../../assets/logos/gdsc-dark.webp"
import homeHero from "../../static/homeHero-transp.png"

const Home = () => {
  const { isDarkMode } = useDarkMode();
  const gdscLogo = isDarkMode ? gdscDark : gdscLight;
  const Instagram = isDarkMode ? InstagramDark : InstagramLight;
  const GitHub = isDarkMode ? GitHubDark : GitHubLight;
  const LinkedIn = isDarkMode ? LinkedInDark : LinkedInLight;
  const TwitterX = isDarkMode ? TwitterXDark : TwitterXLight;
  const Website = isDarkMode ? WebsiteDark : WebsiteLight;

  

  return (
    <div className={`flex flex-col overflow-hidden ${isDarkMode ? 'bg-zinc-900' : ''}`}>
        <div className='bg-lineColor border-solid w-full h-[1.5px]'><hr></hr></div>
    <div className='flex flex-row max-xs:ml-5'>
      <div className='w-[32%] max-xs:w-full ml-24 max-xxs:ml-2 max-xs:ml-4 max-md:ml-10 max-lg:ml-12 max-xl:ml-16 py-20 max-xxs:py-0 max-xs:py-2 max-md:py-10 max-lg:py-14 mt-8 max-xxs:mt-2 max-xs:mt-4 max-lg:mt-6'>
        <div className='mb-6 max-xxs:mb-1 max-xs:mb-2'>
          <img
            src={gdscLogo}
            alt="GDSC Light"
            className='w-[20%] max-xxs:w-[10%] max-xs:w-[12%] '
          />
        </div>

        <div className={`text-greyText drop-shadow-custom  ${isDarkMode ? 'text-white drop-shadow-custom1' : ''}`}>
          <div className='flex flex-col  font-bold text-6xl max-xxs:text-xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl'>
            <div className='flex leading-normal max-xs:w-[40%]'>
            <p className='whitespace-pre '>Google Developer </p>
            </div>
            <div className='flex leading-normal  max-xs:w-[70%] '>
            <p>Student Club</p>
            </div>
          </div>
          <p className='font-semibold text-5xl max-xs:text-lg max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl mt-4 max-xxs:mt-1 max-xs:mt-2 max-sm:mt-3'>UPES Dehradun</p>
        </div>

        <div className='flex py-10 max-xs:py-5 max-sm:py-5 max-md:py-7 max-lg:py-9 text-3xl max-sm:text-lg max-md:text-2xl max-lg:text-2xl max-xl:text-3xl'>
          <p>
            <span className={`text-redText font-bold drop-shadow-custom ${isDarkMode ? 'drop-shadow-custom1' : ''}`}>Code.</span>
            <span className={`text-blueText font-bold drop-shadow-custom px-2 ${isDarkMode ? 'drop-shadow-custom1' : ''}`}>Create.</span>
            <span className={`text-greenText font-bold drop-shadow-custom ${isDarkMode ? 'drop-shadow-custom1' : ''}`}>Collaborate.</span>
          </p>
        </div>

        <div className='flex flex-row max-xs:pb-10'>
          <Link  to="#">
            <img src={Website} alt="Website" className='hover:scale-110 transition-transform w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10  mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://instagram.com/">
            <img src={Instagram} alt="Instagram" className='hover:scale-110 transition-transform w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://linkedin.com/">
            <img src={LinkedIn} alt="LinkedIn" className='hover:scale-110 transition-transform w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8 ' />
          </Link>
          <Link to="https://hashnode.com/">
            <img src={Hashnode} alt="Hashnode" className='hover:scale-110 transition-transform w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://twitter.com">
            <img src={TwitterX} alt="TwitterX" className='hover:scale-110 transition-transform w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">
            <img src={GitHub} alt="GitHub" className='hover:scale-110 transition-transform w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
        </div>  
      </div>

      <div className='w-[68%] max-xxs:w-[100%] max-xs:w-[100%] max-md:w-[68%] flex'>
        <img
          src={homeHero}
          alt="Home Hero"
          className='w-full h-full'
        />
      </div>
    </div>
    </div>
  );
}

export default Home;