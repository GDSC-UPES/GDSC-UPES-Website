import React from 'react';
import homeHero from '../static/homeHero.png'
import gdscLight from '../static/gdscLight.webp'
import Website from '../static/Website.png';
import Instagram from '../static/Instagram.png';
import LinkedIn from '../static/LinkedIn.png';
import Hashnode from '../static/Hashnode.png';
import TwitterX from '../static/TwitterX.png';
import GitHub from '../static/GitHub.png';
const Home = () => {
  return (
    <div className='flex flex-row'>
      <div className='w-[35%] ml-10 py-20 mt-8'>
        <div className='mb-6'>
          <img
            src={gdscLight}
            alt="GDSC Light"
            className='w-[20%]'
          />
        </div>

        <div className='leading-normal text-greyText drop-shadow-custom '>
          <p className='font-bold text-6xl leading-normal'>Google Developer<br />
            <span className='leading-normal'> Student Club</span></p>
          <p className='font-semibold text-4xl mt-4'>UPES Dehradun</p>
        </div>

        <div className='flex py-10 text-3xl'>
          <p>
            <span className='text-redText font-bold drop-shadow-custom'>Code.</span>
            <span className='text-blueText font-bold drop-shadow-custom px-2'>Create.</span>
            <span className='text-greenText font-bold drop-shadow-custom '>Collaborate.</span>
          </p>
        </div>

        <div className='socialmedia flex flex-row'>
          <img src={Website} alt="Website" className='w-12 mr-10' />
          <img src={Instagram} alt="Instagram" className='w-12 mr-10' />
          <img src={LinkedIn} alt="LinkedIn" className='w-12 mr-10' />
          <img src={Hashnode} alt="Hashnode" className='w-12 mr-10' />
          <img src={TwitterX} alt="Twitter" className='w-12 mr-10' />
          <img src={GitHub} alt="GitHub" className='w-12 mr-10' />
        </div>
      </div>

      <div className=' w-[65%] flex'>
        <img
          src={homeHero}
          alt="Home Hero"
          className='w-full'
        />
      </div>
    </div>
  );
}

export default Home;
