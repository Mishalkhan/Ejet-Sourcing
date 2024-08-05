import React from 'react'

const Section6 = () => {
  return (
<section className="text-gray-600 body-font bg-[#F7F9FA] font-serif">
<p className='text-center text-7xl pt-20 text-gray-800'>EJET is More Than a Supplier</p>
<p className='text-center text-4xl pt-20 text-gray-800'>why should choose us</p>
  <div className="px-20 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
    
    <img alt="feature" className="object-cover object-center h-full w-full" src="/images/side_img1.webp" />

    </div>

    <div className="flex flex-col flex-wrap lg:w-1/2 lg:pl-12 lg:text-left text-center pt-20">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        
        <div className="flex-grow">
          <h2 className="text-gray-700 text-4xl font-semibold title-font mb-6 mt-6">Exclusive Pricing and Favorable Terms</h2>
          <p className="leading-relaxed text-xl">Your dedicated sourcing specialist will work with you and handle any of your requests, ensuring you collaborate seamlessly with the EJET team.</p>
        </div>
      </div>

      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-gray-700 text-4xl font-semibold title-font mb-6 mt-6">Stable Quality and Priority Delivery</h2>
          <p className="leading-relaxed text-xl">By working with the EJET supply chain network, we will help you to achieve cost savings, higher quality products, and faster delivery.</p>
        </div>
      </div>

      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-gray-700 text-4xl font-semibold title-font mb-6 mt-6">Streamlined Procurement Process</h2>
          <p className="leading-relaxed text-xl">EJET will bear all your buying risks instead of you. You do not need to worry about your payment security, bad quality, and late delivery when you work with EJET.</p>
        </div>
      </div>

    </div>
  </div>
  <div className='text-center pb-20'>
  <button className="bg-[#2CA6E0] hover:bg-white hover:text-[#2CA6E0] hover:border-2 border-[#2CA6E0] text-white py-8 px-16 rounded-full text-xl">
  Start My Project
</button>
  </div>
</section>

  )
}

export default Section6
