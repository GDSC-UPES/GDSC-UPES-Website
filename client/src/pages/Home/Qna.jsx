import React from 'react'
import QnA1 from "../../assets/illustrations/home-faq-1.png" 
import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Qna = () => {
const [activeIndex,setActiveIndex]=useState(null);
const faqData=[
  {
  question:'This is a question 1?',
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
    <div className='overflow-hidden'>
      <div className='bg-lineColor border-solid w-full h-[1.5px]'><hr></hr></div>
      <div className='w-full px-20 mx-xxs:ml-5 max-xs:px-7   pt-20 max-xxs:pt-2 max-xs:pt-4 max-lg:mt-6'>
          <div className='text-greyText drop-shadow-custom  font-bold text-6xl max-xxs:text-xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl px-0 max-xs:px-5 max-sm:px-10 max-md:px-10 max-lg:px-10 max-xl:px-20'>
              <p>You Ask, We Answer!</p>
          </div>
          </div>
          <div className="flex flex-col">
          <div className="flex flex-row max-xs:flex-col">
          {/* <div className='w-[60%] max-xs:w-[100%] px-20  py-20 max-xxs:py-0 max-xs:py-2 max-md:py-10 max-lg:py-14 max-xs:mt-2'>
          <div className='flex leading-normal text-greenText font-bold text-3xl max-xxs:text-xl max-sm:text-2xl '>
                <p>What is GDSC?</p>
          </div>
          <div className='flex leading-normal text-greyText text-2xl max-xs:text-justify  '>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
            </div>
          <div className='flex leading-normal max-xs:text-justify  text-2xl max-xs:text-xs max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl mt-4 max-xxs:mt-1 max-xs:mt-2 max-sm:mt-3 '>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
         </div>
        </div> */}
        <div className='w-full px-20 mx-xxs:ml-5 max-xs:px-7  py-20 max-xxs:py-2 max-xs:py-4 max-md:py-10 max-lg:py-14 mt-8 max-xxs:mt-2 max-xs:mt-4 max-lg:mt-6'>
        <div className=" drop-shadow-custom">
          <div className='flex flex-col max-xs:flex-row max-md:flex-row  max-sm:flex-row font-bold text-3xl max-xxs:text-xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl px-0 max-xs:px-5 max-sm:px-10 max-md:px-10 max-lg:px-10 max-xl:px-20'>
            <div className='text-greenText flex leading-normal '>
              <p>What is GDSC?</p>
            </div>
          </div>
         <div className='"text-greyText flex leading-normal max-xs:text-justify  text-2xl max-xs:text-xs max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl mt-4 max-xxs:mt-1 max-xs:mt-2 max-sm:mt-3 px-0 max-xs:px-5 max-xs:mr-5  max-md:px-10 max-lg:px-10 max-xl:px-20'>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
         </div>
         <br></br>
         </div>
         </div>
        
        <img src={QnA1} alt="image-1" className='h-50 w-50 max-xss:h-10 max-xxs:w-30' />

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


