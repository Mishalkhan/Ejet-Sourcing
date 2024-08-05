import React from 'react'

const Section1 = () => {
  return (
    <section className="text-gray-600 body-font bg-[#F7F9FA] font-serif">
      <p className='text-center text-7xl pt-20 text-gray-800'>One Stop China Sourcing Agent Service</p>
  <div className=" py-14 mx-10">
    <div className="flex flex-wrap mt-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4 shadow-2xl pr-5 pt-10">
        <div className="rounded-lg h-64">
          <img alt="content" className="object-cover object-center h-full w-full" src="/images/img1source.webp" style={{aspectRatio:3/2, objectFit:"contain"}} />
        </div>
        <h2 className="title-font text-3xl font-medium text-gray-900 pt-10 pb-6">We Source</h2>
        <p className="leading-relaxed text-2xl pt-5 pb-10 px-10">Whatever products you need, we can find the best-matched supplier at the most competitive price. Our sourcing services include Supplier Management, New Product Development, Product Branding, On-line Sourcing, and On-Ground Sourcing.</p>
      </div>
      <div className="sm:w-1/2 mb-10 px-4 shadow-2xl pl-5 pt-10">
        <div className="rounded-lg h-64 ">
          <img alt="content" className="object-cover object-center h-full w-full" src="/images/img2deliver.webp" style={{aspectRatio:3/2, objectFit:"contain"}} />
        </div>
        <h2 className="title-font text-3xl font-medium text-gray-900 pt-10 pb-6">We Deliver</h2>
        <p className="leading-relaxed text-2xl pt-5 pb-10 px-10">Once you placed the order, we will follow up every step to ensure you get the right products, at the right price, by the right delivery. Our delivery services include Quality Control, Amazon FBA Prep Service, Warehousing & Consolidation, Shipping & Distribution.</p>
      </div>
    </div>
  </div>
</section>


  )
}

export default Section1
