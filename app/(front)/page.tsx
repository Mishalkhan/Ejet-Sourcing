import React from 'react'
import VideoSection from '@/Components/header/VideoSection'
import Section1 from '@/Components/sections/Section1'
import Section2 from '@/Components/sections/Section2'
import Section3 from '@/Components/sections/Section3'
import Section4 from '@/Components/sections/Section4'
import Section5 from '@/Components/sections/Section5'
import Section6 from '@/Components/sections/Section6'
import Section7 from '@/Components/sections/Section7'
import Section8 from '@/Components/sections/Section8'
import Section9 from '@/Components/sections/Section9'
import Section10 from '@/Components/sections/Section10'
import { IoLogoWhatsapp } from "react-icons/io5";


const Home = () => {
  return (
    <div>

      <VideoSection/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section9/>
      <Section10/>

      <div className='fixed bottom-16 right-16 bg-[#25D366] text-white p-5 rounded-full'>
        <span className='text-5xl'><IoLogoWhatsapp /></span>
      </div>
    </div>
  )
}

export default Home
