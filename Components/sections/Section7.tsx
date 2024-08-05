import React from 'react'
import { GoDotFill } from "react-icons/go";

const Section7 = () => {
  return (
    <div className="bg-[url('/images/background_img2.webp')] bg-no-repeat bg-cover font-serif">
        <p className='text-center text-7xl pt-36 pb-24 text-white text-bold'>EJET Ultimate China Sourcing Guide 2024</p>
    <div className="py-12 px-20 text-white">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
            <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
            <ul className="list-none list-inside mb-6 space-y-4 text-2xl">
                <li className='flex py-2'><GoDotFill className='text-4xl'/><span className='pl-10'> Provides a deep understanding of China Sourcing. </span></li>
                <li className='flex py-2'><GoDotFill className='text-4xl'/><span className='pl-10'>Learn about the best markets to source products from.</span></li>
                <li className='flex py-2'><GoDotFill className='text-4xl'/><span className='pl-10'>How to do the right quality control and shipping.</span></li>
                <li className='flex pt-2 pb-20'><GoDotFill className='text-4xl'/><span className='pl-10'>Includes essential tips that will help you save costs.</span></li>
            </ul>
            <div className="flex items-center space-x-2">

            <div className="flex  w-full shadow-2xl ">
                <input type="text" id="hs-trailing-button-add-on" name="hs-trailing-button-add-on" className="py-7 px-10 w-2/4 text-2xl rounded-l-full text-black border-4 border-white" placeholder='Your Email Address' />
                <button type="button" className="py-7 px-16 inline-flex justify-center items-center gap-x-2 text-2xl rounded-e-md bg-[#2CA6E0] border-4 border-[#2CA6E0]  text-white hover:bg-transparent hover:border-4 border-[#2CA6E0] rounded-r-full">
                Free Download
                </button>

            </div>

            </div>
        </div>

            <div className="w-full lg:w-1/3">
            <img src="/images/side_img2.webp" alt="Sourcing Guide 2024" className="w-full rounded-md" />
            </div>
        </div>
    </div>

    </div>
  )
}

export default Section7
