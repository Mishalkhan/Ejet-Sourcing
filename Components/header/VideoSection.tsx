import React from 'react'

const VideoSection = () => {
  return (
    <div className="relative">
        <video className="w-full" loop autoPlay muted>
          <source src="/video/mainvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='absolute bottom-1/4 inset-x-0 text-center text-white font-serif'>
            <h1 className='text-9xl font-bold'>China Sourcing Expert</h1>
            <br/>
            <p className='text-5xl'>We streamline your procurement, making it easier than ever with one-stop and worry-free sourcing solution.</p>
        </div>
      </div>
  )
}

export default VideoSection
