import React from 'react'

const Section4 = () => {
  return (
    <div className="bg-[url('/images/background_img1.webp')] bg-no-repeat bg-cover font-serif">
        <section className="text-gray-600 text-white font-serif">
  <div className="px-20 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-6xl font-medium title-font mb-4">EJET Commitment</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed  text-4xl">Commitment Is What Transforms a Promise into Reality</p>
    </div>

    <div className="flex flex-wrap -m-4 text-center">
        
      <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
        <div className="px-4 py-6 rounded-lg">
          <img src='/images/small_img/img1.webp' alt='its mini image' width={100} height={100} className='mx-auto'/>
          <p className="leading-relaxed text-white text-4xl py-6">Customer First</p>
        </div>
      </div>

      <div className="p-4 md:w-1/5 sm:w-1/2 w-full ">
        <div className="px-4 py-6 rounded-lg">
          <img src='/images/small_img/img2.webp' alt='its mini image' width={100} height={100} className='mx-auto'/>
          <p className="leading-relaxed text-white text-4xl py-6">100% Risk Free</p>
        </div>
      </div>

      <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
        <div className="px-4 py-6 rounded-lg">
          <img src='/images/small_img/img3.webp' alt='its mini image' width={100} height={100} className='mx-auto'/>
          <p className="leading-relaxed text-white text-4xl py-6">Transparency</p>
        </div>
      </div>

      <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
        <div className="px-4 py-6 rounded-lg">
          <img src='/images/small_img/img4.webp' alt='its mini image' width={100} height={100} className='mx-auto'/>
          <p className="leading-relaxed text-white text-4xl py-6">Privacy</p>
        </div>
      </div>

      <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
        <div className="px-4 py-6 rounded-lg">
          <img src='/images/small_img/img5.webp' alt='its mini image' width={100} height={100} className='mx-auto'/>
          <p className="leading-relaxed text-white text-4xl py-6">Due Diligence</p>
        </div>
      </div>

    </div>
  </div>
</section>
    </div>

  )
}

export default Section4
