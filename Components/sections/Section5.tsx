import React from 'react'
import { MdPlayArrow } from "react-icons/md";

const Section5 = () => {
  return (
    
    <div className='pb-20 font-serif'>
        <p className='text-center text-7xl pt-32 pb-20 text-gray-800'>What Our Partners Say</p>
    <div className='mx-auto w-4/6 shadow-2xl'>
        <a href="#" className="items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        {/* <video
      id="homeVideo"
      playsInline
      width="880px"
      height="480px"
      style={{ objectFit: 'cover', width: '880px' }}
      poster="https://oss.ejet.com/2023/12/组-8.jpg"
      preload="metadata"
      controls
    >
      <source src="https://oss.ejet.com/2023/12/EJET-Customer-Testimonials.mp4" type="video/mp4" />
      Sorry, your browser doesnt support embedded videos.
    </video> */}
        <video className="w-full" controls poster='/video/poster.png'>
          <source src="/video/video3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className=" justify-between p-4 leading-normal px-10">
            <div className='flex justify-between mt-6'>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Aahmoud Shaeikh</h5>

           <button type="button" className="inline-flex items-center px-5 py-2.5 text-2xl font-medium text-center text-[#02A6D3] bg-white rounded-lg">
           MORE CASE STUDIES  
            <MdPlayArrow/>
            </button>


            </div>
            <p className="my-6 text-xl font-normal text-gray-700 dark:text-gray-400">Through our 5 years of cooperation with EJET, they continue to impress us with their dedication, support and reliability. Our company keeps growing and we are sure that our partnership with EJET is the driving forces behind the growth.</p>
        </div>
        </a>
    </div>
    </div>



  )
}

export default Section5
