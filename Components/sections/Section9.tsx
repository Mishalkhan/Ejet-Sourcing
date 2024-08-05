import React from 'react'

const Section9 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-[#F7F9FA]">
  <div className="px-32 py-24 mx-auto">
    <div className="flex">
        
      <div className="sm:w-1/2 mb-10 px-4 mr-10">
        <div className="rounded-lg h-auto overflow-hidden">
        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/6qLi4pmm1_Q?si=kG_7R8cx-YVDadAR" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

        </div>
      </div>

      <div className="sm:w-1/2 mb-10 px-4 ml-10">
        <div className="rounded-lg h-auto overflow-hidden">
        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/GF2pAFLowqU?si=vMnL3kffDwFNbSe8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

        </div>
      </div>
    </div>
  </div>

  <div className='text-center pb-20'>
  <button className="bg-[#2CA6E0] hover:bg-white hover:text-gray-800 hover:border-2 border-gray-800 text-white py-8 px-16 rounded-full text-xl">
  View More
</button>
  </div>
</section>

    </div>
  )
}

export default Section9
