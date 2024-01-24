import React from 'react'
import { CurrentEventData } from '../../data/EventDesc'

const Details = () => {
  return (
    <div>
      <div className='bg-lineColor border-solid w-full h-[1.5px]'><hr></hr></div>
      <div className="relative bg-red-100 h-screen">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 80%)' }} className="w-full h-full bg-lime-100">
      <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="w-[70%] max-xs:w-full ml-24 max-xxs:ml-2 max-xs:ml-4 max-md:ml-10 max-lg:ml-12 max-xl:ml-16 py-20 max-xxs:py-0 max-xs:py-2 max-md:py-10 max-lg:py-14 mt-8 max-xxs:mt-2 max-xs:mt-4 max-lg:mt-6">
         <div className="flex leading-normal text-lime-600 text-6xl font-bold">
                <p>About {CurrentEventData[0].title}</p>
              </div>
              <div className="text-greyText text-xl">
              <p>About the current event blah blah blah blah</p>
            </div>
            <div className="text-black text-xl mt-10">
              <p>{CurrentEventData[0].aboutpara1}</p>
              <br></br>
              <p>{CurrentEventData[0].aboutpara2}</p>
            </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Details

