import React from 'react'

const Section3 = () => {
  return (
<section className="text-gray-600 body-font bg-[#F7F9FA] font-serif">
<p className='text-center text-7xl pt-20 text-gray-800'>One Stop China Sourcing Agent Service</p>
  <div className="px-20 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
    <video className="w-full" controls poster='/video/poster_sm.png'>
          <source src="/video/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
    <div className="flex flex-col flex-wrap lg:w-1/2 lg:pl-12 lg:text-left text-center pt-4">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        
        <div className="flex-grow">
          <h2 className="text-gray-900 text-4xl font-medium title-font mb-3 mt-2">A Streamlined Supply Line</h2>
          <p className="leading-relaxed text-xl">Whatever products you need, we develop source and deliver them to you, and help you achieve your sourcing goals: Cost saving, Higher quality, and Faster delivery.</p>
        </div>
      </div>

      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-gray-900 text-4xl font-medium title-font mb-3 mt-2">Worry-Free Solution</h2>
          <p className="leading-relaxed text-xl">We bear all the buying risks for you. Our expert team will follow up on each detail of every single order with our high standard. We deliver upon our promise.</p>
        </div>
      </div>

      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-gray-900 text-4xl font-medium title-font mb-3 mt-2">The Power Behind Your Business Growth</h2>
          <p className="leading-relaxed text-xl">Wherever you are in your seller’s journey, EJET helps to improve your supply chain, build your brand & maximize your profits so as to grow your business.</p>
        </div>
      </div>

    </div>
  </div>
  <div className='text-center pb-20'>
  <button className="bg-[#2CA6E0] hover:bg-white hover:text-[#2CA6E0] hover:border-2 border-[#2CA6E0] text-white py-8 px-16 rounded-full text-xl">
  Working With EJET
</button>
  </div>
</section>

  )
}

export default Section3
