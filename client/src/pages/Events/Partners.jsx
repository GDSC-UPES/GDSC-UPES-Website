import React from 'react'
import bg from '../../assets/illustrations/events-partner-bg.png'
import partner1 from '../../assets/illustrations/events-partner-1.png'
import partner2 from '../../assets/illustrations/events-partner-2.png'
import partner3 from '../../assets/illustrations/events-partner-3.png'
// import bg from "../../assets/illustrations/events-partners-bg-main.png"

const Partners = () => {
  return (
    <div>
    <div className='bg-lineColor border-solid w-full h-[1.5px]'><hr></hr></div>
    <div style={{ backgroundImage: `url(${require('../../assets/illustrations/events-partners-bg-main.png')})` }} className='h-screen ' >
      <div className="flex flex-row ">
        {/* <div className="w-[50%] max-xs:w-full ml-24 max-xxs:ml-2 max-xs:ml-4 max-md:ml-10 max-lg:ml-12 max-xl:ml-16 py-20 max-xxs:py-0 max-xs:py-2 max-md:py-10 max-lg:py-14 mt-8 max-xxs:mt-2 max-xs:mt-4 max-lg:mt-6"> */}
            <div className="flex flex-col ml-24 text-red-600 max-xs:flex-row font-bold text-6xl max-xxs:text-xl py-10 max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl mt-8">
                <p>Our Partners</p>
              <div className="text-greyText text-xl mt-5">
              <p>Archive extrodinare of our Partners</p>
            </div>
            </div>
        {/* </div> */}
      </div>
      <div className="flex flex-row justify-center items-center h-80 py-60 ">
        <img src={partner1}
        alt="partner -1"
        className='w-30 h-30 mr-20'/>
        <img src={partner2}
        alt="partner -3"
        className='w-30 h-30 mr-20'/>
        <img src={partner3}
        alt="partner -3"
        className='w-30 h-30'/>
      </div>
    </div>
    
    </div>
  )
}

export default Partners
