import React from "react";
import speaker from "../static/speaker.png"
import { Link } from "react-router-dom";
import LinkedIn from "../static/LinkedIn.png"
import GitHub from "../static/GitHub.png"

function Team() {
  return<div style={{backgroundColor: "#fff5da", padding:"2rem"}}>
    <div className='flex justify-center text-[2rem]'>
          <p>
            <span className='font-extrabold'>Meet </span>
            <span className='text-blueText font-extrabold'>Our Team</span>
          </p>
        </div>
        <div>
        <div className="flex justify-center mt-[4rem] text-[1.4rem] font-bold">
        <p>GDSC UPES Lead</p>
        </div>
    <div className="flex flex-col justify-center mb-[8rem] mt-[1.5rem] text-center">
      <div className="flex justify-center">
      <img src={speaker} alt="" className="w-[11rem]"/>
      </div>
    <div>
    <p className=' text-[1.4rem] font-bold'>Your Name</p>   {/*name of team member*/}
    </div>
    <div className="flex flex-row justify-center">
    <Link to="https://linkedin.com/">         {/*put your linkedin url here*/}
            <img src={LinkedIn} alt="LinkedIn" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">      {/*put your github url here*/}
            <img src={GitHub} alt="GitHub" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10' />
          </Link>
    </div>
    </div>
        </div>   

<div>
<div className="text-center mb-[6vw] text-[1.5rem] font-bold">
        <p>The Core Team</p>
        </div>
    <div className="flex flex-wrap justify-around gap-x-[20vw] gap-y-[10vw]">
    <div className="flex flex-col justify-center text-center">
    <div className="flex justify-center">
      <img src={speaker} alt="" className="w-[11rem]"/>
      </div>
    <div>
    <p className=' text-[1.4rem] font-bold'>Your Name</p>   {/*name of team member*/}
    </div>
    <div className="flex flex-row justify-center">
    <Link to="https://linkedin.com/">         {/*put your linkedin url here*/}
            <img src={LinkedIn} alt="LinkedIn" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">      {/*put your github url here*/}
            <img src={GitHub} alt="GitHub" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10' />
          </Link>
    </div>
    </div>
    <div className="flex flex-col justify-center text-center">
    <div className="flex justify-center">
      <img src={speaker} alt="" className="w-[11rem]"/>
      </div>
    <div>
    <p className=' text-[1.4rem] font-bold'>Your Name</p>   {/*name of team member*/}
    </div>
    <div className="flex flex-row justify-center">
    <Link to="https://linkedin.com/">         {/*put your linkedin url here*/}
            <img src={LinkedIn} alt="LinkedIn" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">      {/*put your github url here*/}
            <img src={GitHub} alt="GitHub" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10' />
          </Link>
    </div>
    </div>
    <div className="flex flex-col justify-center text-center">
    <div className="flex justify-center">
      <img src={speaker} alt="" className="w-[11rem]"/>
      </div>
    <div>
    <p className=' text-[1.4rem] font-bold'>Your Name</p>   {/*name of team member*/}
    </div>
    <div className="flex flex-row justify-center">
    <Link to="https://linkedin.com/">         {/*put your linkedin url here*/}
            <img src={LinkedIn} alt="LinkedIn" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">      {/*put your github url here*/}
            <img src={GitHub} alt="GitHub" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10' />
          </Link>
    </div>
    </div>
    <div className="flex flex-col justify-center text-center">
    <div className="flex justify-center">
      <img src={speaker} alt="" className="w-[11rem]"/>
      </div>
    <div>
    <p className=' text-[1.4rem] font-bold'>Your Name</p>   {/*name of team member*/}
    </div>
    <div className="flex flex-row justify-center">
    <Link to="https://linkedin.com/">         {/*put your linkedin url here*/}
            <img src={LinkedIn} alt="LinkedIn" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">      {/*put your github url here*/}
            <img src={GitHub} alt="GitHub" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10' />
          </Link>
    </div>
    </div>
    <div className="flex flex-col justify-center text-center">
    <div className="flex justify-center">
      <img src={speaker} alt="" className="w-[11rem]"/>
      </div>
    <div>
    <p className=' text-[1.4rem] font-bold'>Your Name</p>   {/*name of team member*/}
    </div>
    <div className="flex flex-row justify-center">
    <Link to="https://linkedin.com/">         {/*put your linkedin url here*/}
            <img src={LinkedIn} alt="LinkedIn" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">      {/*put your github url here*/}
            <img src={GitHub} alt="GitHub" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10' />
          </Link>
    </div>
    </div>
    <div className="flex flex-col justify-center text-center">
    <div className="flex justify-center">
      <img src={speaker} alt="" className="w-[11rem]"/>
      </div>
    <div>
    <p className=' text-[1.4rem] font-bold'>Your Name</p>   {/*name of team member*/}
    </div>
    <div className="flex flex-row justify-center">
    <Link to="https://linkedin.com/">         {/*put your linkedin url here*/}
            <img src={LinkedIn} alt="LinkedIn" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">      {/*put your github url here*/}
            <img src={GitHub} alt="GitHub" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10' />
          </Link>
    </div>
    </div>
    <div className="flex flex-col justify-center text-center">
    <div className="flex justify-center">
      <img src={speaker} alt="" className="w-[11rem]"/>
      </div>
    <div>
    <p className=' text-[1.4rem] font-bold'>Your Name</p>   {/*name of team member*/}
    </div>
    <div className="flex flex-row justify-center">
    <Link to="https://linkedin.com/">         {/*put your linkedin url here*/}
            <img src={LinkedIn} alt="LinkedIn" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">      {/*put your github url here*/}
            <img src={GitHub} alt="GitHub" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10' />
          </Link>
    </div>
    </div>
    <div className="flex flex-col justify-center text-center">
    <div className="flex justify-center">
      <img src={speaker} alt="" className="w-[11rem]"/>
      </div>
    <div>
    <p className=' text-[1.4rem] font-bold'>Your Name</p>   {/*name of team member*/}
    </div>
    <div className="flex flex-row justify-center">
    <Link to="https://linkedin.com/">         {/*put your linkedin url here*/}
            <img src={LinkedIn} alt="LinkedIn" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">      {/*put your github url here*/}
            <img src={GitHub} alt="GitHub" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10' />
          </Link>
    </div>
    </div>
    <div className="flex flex-col justify-center text-center">
    <div className="flex justify-center">
      <img src={speaker} alt="" className="w-[11rem]"/>
      </div>
    <div>
    <p className=' text-[1.4rem] font-bold'>Your Name</p>   {/*name of team member*/}
    </div>
    <div className="flex flex-row justify-center">
    <Link to="https://linkedin.com/">         {/*put your linkedin url here*/}
            <img src={LinkedIn} alt="LinkedIn" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">      {/*put your github url here*/}
            <img src={GitHub} alt="GitHub" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10' />
          </Link>
    </div>
    </div>
    <div className="flex flex-col justify-center text-center">
    <div className="flex justify-center">
      <img src={speaker} alt="" className="w-[11rem]"/>
      </div>
    <div>
    <p className=' text-[1.4rem] font-bold'>Your Name</p>   {/*name of team member*/}
    </div>
    <div className="flex flex-row justify-center">
    <Link to="https://linkedin.com/">         {/*put your linkedin url here*/}
            <img src={LinkedIn} alt="LinkedIn" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">      {/*put your github url here*/}
            <img src={GitHub} alt="GitHub" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10' />
          </Link>
    </div>
    </div>
    <div className="flex flex-col justify-center text-center">
    <div className="flex justify-center">
      <img src={speaker} alt="" className="w-[11rem]"/>
      </div>
    <div>
    <p className=' text-[1.4rem] font-bold'>Your Name</p>   {/*name of team member*/}
    </div>
    <div className="flex flex-row justify-center">
    <Link to="https://linkedin.com/">         {/*put your linkedin url here*/}
            <img src={LinkedIn} alt="LinkedIn" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">      {/*put your github url here*/}
            <img src={GitHub} alt="GitHub" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10' />
          </Link>
    </div>
    </div>
    <div className="flex flex-col justify-center text-center">
    <div className="flex justify-center">
      <img src={speaker} alt="" className="w-[11rem]"/>
      </div>
    <div>
    <p className=' text-[1.4rem] font-bold'>Your Name</p>   {/*name of team member*/}
    </div>
    <div className="flex flex-row justify-center">
    <Link to="https://linkedin.com/">         {/*put your linkedin url here*/}
            <img src={LinkedIn} alt="LinkedIn" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">      {/*put your github url here*/}
            <img src={GitHub} alt="GitHub" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10' />
          </Link>
    </div>
    </div>
    <div className="flex flex-col justify-center text-center">
    <div className="flex justify-center">
      <img src={speaker} alt="" className="w-[11rem]"/>
      </div>
    <div>
    <p className=' text-[1.4rem] font-bold'>Your Name</p>   {/*name of team member*/}
    </div>
    <div className="flex flex-row justify-center">
    <Link to="https://linkedin.com/">         {/*put your linkedin url here*/}
            <img src={LinkedIn} alt="LinkedIn" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">      {/*put your github url here*/}
            <img src={GitHub} alt="GitHub" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10' />
          </Link>
    </div>
    </div>
    <div className="flex flex-col justify-center text-center">
    <div className="flex justify-center">
      <img src={speaker} alt="" className="w-[11rem]"/>
      </div>
    <div>
    <p className=' text-[1.4rem] font-bold'>Your Name</p>   {/*name of team member*/}
    </div>
    <div className="flex flex-row justify-center">
    <Link to="https://linkedin.com/">         {/*put your linkedin url here*/}
            <img src={LinkedIn} alt="LinkedIn" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">      {/*put your github url here*/}
            <img src={GitHub} alt="GitHub" className='w-10 max-xs:w-10 max-sm:w-10 max-lg:w-10 max-xl:w-10' />
          </Link>
    </div>
    </div>
    
    
    
    </div>
</div>
       
    
  </div>
}

export default Team;