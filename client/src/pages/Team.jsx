import React from "react";
import speaker from "../static/speaker.png"
import { Link } from "react-router-dom";
import LinkedIn from "../static/LinkedIn.png"
import GitHub from "../static/GitHub.png"
function Team() {
  return<div style={{backgroundColor: "#fff5da", padding:"2rem"}}>
    <div className='flex justify-center py-10 max-xs:py-5 max-sm:py-5 max-md:py-7 max-lg:py-9 text-3xl max-sm:text-lg max-md:text-2xl max-lg:text-2xl max-xl:text-3xl'>
          <p>
            <span className='text-redText font-bold drop-shadow-custom'>Meet</span>
            <span className='text-blueText font-bold drop-shadow-custom px-2'>Our Team</span>
          </p>
        </div>
        <div>
        <div className="text-center mt-[3vw] text-[1.5rem] font-bold">
        <p>GDSC UPES Lead</p>
        </div>
    <div className="flex justify-center mb-[10vw] mt-[3vw] text-center">
    <div className="text-center">
    <img src={speaker} alt="" />
    <p className=' text-[1.6rem]'>Your Name</p>   {/*name of team member*/}
    <div className="flex flex-row justify-center ml-[2rem]">
    <Link to="https://linkedin.com/">         {/*put your linkedin url here*/}
            <img src={LinkedIn} alt="LinkedIn" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">      {/*put your github url here*/}
            <img src={GitHub} alt="GitHub" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
    </div>
    </div>
    </div>
        </div>   

<div>
<div className="text-center mb-[6vw] text-[2rem] font-bold">
        <p>The Core Team</p>
        </div>
    <div className="flex flex-wrap justify-around gap-[10vw]">
    <div className="text-center">
    <img src={speaker} alt="" />
    <p className=' text-[1.6rem]'>Your Name</p>   {/*name of team member*/}
    <p className=' text-[1.6rem]'>Your Role</p>   {/*role of team member*/}
    <div className="flex flex-row justify-center ml-[2rem]">
    <Link to="https://linkedin.com/">         {/*put your linkedin url here*/}
            <img src={LinkedIn} alt="LinkedIn" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">      {/*put your github url here*/}
            <img src={GitHub} alt="GitHub" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
    </div>
    </div>
    <div className="text-center">
    <img src={speaker} alt="" />
    <p className=' text-[1.6rem]'>Your Name</p>
    <p className=' text-[1.6rem]'>Your Role</p>
    <div className="flex flex-row justify-center ml-[2rem]">
    <Link to="https://linkedin.com/">
            <img src={LinkedIn} alt="LinkedIn" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">
            <img src={GitHub} alt="GitHub" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
    </div>
    </div>
    <div className="text-center">
    <img src={speaker} alt="" />
    <p className=' text-[1.6rem]'>Your Name</p>
    <p className=' text-[1.6rem]'>Your Role</p>
    <div className="flex flex-row justify-center ml-[2rem]">
    <Link to="https://linkedin.com/">
            <img src={LinkedIn} alt="LinkedIn" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">
            <img src={GitHub} alt="GitHub" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
    </div>
    </div>
    <div className="text-center">
    <img src={speaker} alt="" />
    <p className=' text-[1.6rem]'>Your Name</p>
    <p className=' text-[1.6rem]'>Your Role</p>
    <div className="flex flex-row justify-center ml-[2rem]">
    <Link to="https://linkedin.com/">
            <img src={LinkedIn} alt="LinkedIn" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">
            <img src={GitHub} alt="GitHub" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
    </div>
    </div>
    <div className="text-center">
    <img src={speaker} alt="" />
    <p className=' text-[1.6rem]'>Your Name</p>
    <p className=' text-[1.6rem]'>Your Role</p>
    <div className="flex flex-row justify-center ml-[2rem]">
    <Link to="https://linkedin.com/">
            <img src={LinkedIn} alt="LinkedIn" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">
            <img src={GitHub} alt="GitHub" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
    </div>
    </div>
    <div className="text-center">
    <img src={speaker} alt="" />
    <p className=' text-[1.6rem]'>Your Name</p>
    <p className=' text-[1.6rem]'>Your Role</p>
    <div className="flex flex-row justify-center ml-[2rem]">
    <Link to="https://linkedin.com/">
            <img src={LinkedIn} alt="LinkedIn" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">
            <img src={GitHub} alt="GitHub" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
    </div>
    </div>
    <div className="text-center">
    <img src={speaker} alt="" />
    <p className=' text-[1.6rem]'>Your Name</p>
    <p className=' text-[1.6rem]'>Your Role</p>
    <div className="flex flex-row justify-center ml-[2rem]">
    <Link to="https://linkedin.com/">
            <img src={LinkedIn} alt="LinkedIn" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">
            <img src={GitHub} alt="GitHub" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
    </div>
    </div>
    <div className="text-center">
    <img src={speaker} alt="" />
    <p className=' text-[1.6rem]'>Your Name</p>
    <p className=' text-[1.6rem]'>Your Role</p>
    <div className="flex flex-row justify-center ml-[2rem]">
    <Link to="https://linkedin.com/">
            <img src={LinkedIn} alt="LinkedIn" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">
            <img src={GitHub} alt="GitHub" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
    </div>
    </div>
    <div className="text-center">
    <img src={speaker} alt="" />
    <p className=' text-[1.6rem]'>Your Name</p>
    <p className=' text-[1.6rem]'>Your Role</p>
    <div className="flex flex-row justify-center ml-[2rem]">
    <Link to="https://linkedin.com/">
            <img src={LinkedIn} alt="LinkedIn" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">
            <img src={GitHub} alt="GitHub" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
    </div>
    </div>
    <div className="text-center">
    <img src={speaker} alt="" />
    <p className=' text-[1.6rem]'>Your Name</p>
    <p className=' text-[1.6rem]'>Your Role</p>
    <div className="flex flex-row justify-center ml-[2rem]">
    <Link to="https://linkedin.com/">
            <img src={LinkedIn} alt="LinkedIn" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">
            <img src={GitHub} alt="GitHub" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
    </div>
    </div>
    <div className="text-center">
    <img src={speaker} alt="" />
    <p className=' text-[1.6rem]'>Your Name</p>
    <p className=' text-[1.6rem]'>Your Role</p>
    <div className="flex flex-row justify-center ml-[2rem]">
    <Link to="https://linkedin.com/">
            <img src={LinkedIn} alt="LinkedIn" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">
            <img src={GitHub} alt="GitHub" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
    </div>
    </div>
    <div className="text-center">
    <img src={speaker} alt="" />
    <p className=' text-[1.6rem]'>Your Name</p>
    <p className=' text-[1.6rem]'>Your Role</p>
    <div className="flex flex-row justify-center ml-[2rem]">
    <Link to="https://linkedin.com/">
            <img src={LinkedIn} alt="LinkedIn" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">
            <img src={GitHub} alt="GitHub" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
    </div>
    </div>
    <div className="text-center">
    <img src={speaker} alt="" />
    <p className=' text-[1.6rem]'>Your Name</p>
    <p className=' text-[1.6rem]'>Your Role</p>
    <div className="flex flex-row justify-center ml-[2rem]">
    <Link to="https://linkedin.com/">
            <img src={LinkedIn} alt="LinkedIn" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">
            <img src={GitHub} alt="GitHub" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
    </div>
    </div>
    <div className="text-center">
    <img src={speaker} alt="" />
    <p className=' text-[1.6rem]'>Your Name</p>
    <p className=' text-[1.6rem]'>Your Role</p>
    <div className="flex flex-row justify-center ml-[2rem]">
    <Link to="https://linkedin.com/">
            <img src={LinkedIn} alt="LinkedIn" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
          <Link to="https://github.com/">
            <img src={GitHub} alt="GitHub" className='w-12 max-xs:w-7 max-sm:w-6 max-lg:w-8 max-xl:w-10 mr-10 max-xxs:mr-5 max-sm:mr-6 max-md:mr-8' />
          </Link>
    </div>
    </div>
    
    </div>
</div>
       
    
  </div>
}

export default Team;