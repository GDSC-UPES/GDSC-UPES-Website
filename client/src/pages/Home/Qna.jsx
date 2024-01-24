import React from 'react'
import QnA1 from "../../assets/illustrations/home-faq-1.png" 
import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Qna = () => {
const [activeIndex,setActiveIndex]=useState(null);
const faqData=[
  {
  question:'This is a question 1 ?',
  answer:'This is the answer 1',
},
{
  question:'This is a question 2?',
  answer:'This is the answer 2',
},
{
  question:'This is a question 3?',
  answer:'This is the answer 3',
},
{
  question:'This is a question 4?',
  answer:'This is the answer 4',
},
{
  question:'This is a question 5?',
  answer:'This is the answer 5',
},
];

const faqOpen=(index)=>{
  setActiveIndex((currentval)=>(currentval==index?null:index));
};

  return (
    <div>
      <div className='bg-lineColor border-solid w-full h-[1.5px]'><hr></hr></div>
        {/* <div className='w-[50%] max-xs:w-full ml-24 max-xxs:ml-2 max-xs:ml-4 max-md:ml-10 max-lg:ml-12 max-xl:ml-16 py-20 max-xxs:py-0 max-xs:py-2 max-md:py-10 max-lg:py-14 mt-8 max-xxs:mt-2 max-xs:mt-4 max-lg:mt-6'> */}
            <div className='flex flex-col text-greyText drop-shadow-custom text-6xl font-bold  mt-10 max-xxs:mt-2 max-xs:mt-4 max-lg:mt-6 ml-24 pt-20'>
          {/* <div className='text-greyText drop-shadow-custom flex leading-normal '> */}
                <p>You Ask, We Answer!</p>
              {/* </div> */}
            {/* </div> */}
          </div>
          <div className="flex flex-col">
          <div className="flex flex-row">
          <div className='w-[60%] max-xs:w-full ml-24 max-xxs:ml-2 max-xs:ml-4 max-md:ml-10 max-lg:ml-12 max-xl:ml-16 py-20 max-xxs:py-0 max-xs:py-2 max-md:py-10 max-lg:py-14 '>
          <div className='flex leading-normal text-greenText font-bold text-3xl'>
                <p>What is GDSC?</p>
          </div>
          <div className='flex leading-normal text-greyText text-2xl'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
            </div>
        </div>
        <img src={QnA1} alt="image-1" className='h-50 w-50' />
        </div>
        <div className="faq-section w-[70%] ml-20">
          {faqData.map((item,index)=>(
            <div key={index} className="border-b">
              <button className={"w-100% h-24 text-left p-4 focus-outline-none ${activeIndex===index?'bg-gray-200':'bg-white'}"}
               onClick={() => faqOpen(index)}
               >
                <div className="flex space-x-10 items-center">
                  <h1 className='text-2xl font-semibold'>{item.question}</h1>
                  {activeIndex==index?<FiMinus className='text-gray-600'/>:<FiPlus className='text-gray-600'/>}
                  </div>
                  </button>
                  {activeIndex==index &&
                  (<div className="p-4">
                    <p className='text-gray-700 text-xl'>{item.answer}</p>
                  </div>
                  )}
          </div>
          ))}
        </div>
       
        </div>
        </div>
  )
}

export default Qna


