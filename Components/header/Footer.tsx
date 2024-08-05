import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiYoutube } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoAtOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className='bg-[#333333] font-serif'>

      <footer className="footer text-[#F0F0F0] p-20">
        <aside>
          <img src="/images/footerlogo.webp" className="w-96 pb-14" alt='its a logo'/>
          <div className='flex space-x-14 py-3 px-2'>   
            <span className='w-1/3 text-4xl bg-[#ffffff] text-[#108EC8] hover:bg-[#108EC8] hover:text-[#ffffff] p-4 rounded-full'> <FaFacebookF /> </span>
            <span className='w-1/3 text-4xl bg-[#ffffff] text-[#108EC8] hover:bg-[#108EC8] hover:text-[#ffffff] p-4 rounded-full'> <FaLinkedinIn /> </span>
            <span className='w-1/3 text-4xl bg-[#ffffff] text-[#C4302B] hover:bg-[#C4302B] hover:text-[#ffffff] p-4 rounded-full'> <SiYoutube /> </span>
          </div>
          <div className='flex space-x-14 py-3 px-2'>   
            <span className='w-1/3 text-4xl bg-[#ffffff] text-[#C4302B] hover:bg-[#108EC8] hover:text-[#ffffff] p-4 rounded-full'> <IoLogoInstagram /> </span>
            <span className='w-1/3 text-4xl bg-[#ffffff] text-[#108EC8] hover:bg-[#108EC8] hover:text-[#ffffff] p-4 rounded-full'> <FaTwitter /> </span>
            <span className='w-1/3 text-4xl bg-[#ffffff] text-[#108EC8] hover:bg-[#C4302B] hover:text-[#ffffff] p-4 rounded-full'> <IoLogoWhatsapp /> </span>
          </div>
        </aside>
        <nav>
          <p className="text-medium text-[#999999] text-4xl pb-10">Resources</p>
          <Link href="#" className="link link-hover py-2 text-2xl ">Video Library</Link>
          <Link href="#" className="link link-hover py-2 text-2xl ">Buying From China</Link>
          <Link href="#" className="link link-hover py-2 text-2xl ">China Wholesale Markets</Link>
          <Link href="#" className="link link-hover py-2 text-2xl ">China Sourcing Tips</Link>
          <Link href="#" className="link link-hover py-2 text-2xl ">Shipping From China</Link>
          <Link href="#" className="link link-hover py-2 text-2xl ">China Fairs</Link>
        </nav>
        <nav>
          <p className="text-medium text-[#999999] text-4xl pb-10">About Us</p>
          <Link href="#" className="link link-hover py-2 text-2xl ">About EJET</Link>
          <Link href="#" className="link link-hover py-2 text-2xl ">EJET Commitment</Link>
          <Link href="#" className="link link-hover py-2 text-2xl ">Case Study</Link>
          <Link href="#" className="link link-hover py-2 text-2xl ">EJET Affiliate</Link>
          <Link href="#" className="link link-hover py-2 text-2xl ">How it Works</Link>
        </nav>
        <nav>
          <p className="text-medium text-[#999999] text-4xl pb-10">Contact Us</p>
          <p className="link link-hover py-2 text-2xl flex"><span className='pr-4 text-4xl text-[#B8B8B8]'><IoAtOutline /></span> contact@ejet.com</p>
          <p className="link link-hover py-3 text-2xl flex"><span className='pr-4 text-4xl text-[#B8B8B8]'><FiPhone /></span>+86 150 8821 0909</p>
          <p className="link link-hover py-3 text-2xl flex"><span className='pr-4 text-4xl text-[#B8B8B8]'><HiOutlineBuildingOffice2 /></span> Yiwu Guangzhou China</p>
        </nav>
      </footer>
      <hr className='text-white'/>
      <footer className='px-20 py-10 flex'>
        <p className="text-[#ffffff] text-2xl pl-20">
        <span className='pr-3'> �� </span> 
           2024 Ejet International.
        <span className='pl-3'>|</span> 
        <span className='pl-3'>All rights reserved by Mishal Khan </span>
        <span className='pl-3'>|</span> 
        <span className='pl-3'> Privacy Policy </span>
        <span className='pl-3'>|</span>
        <span className='pl-3'> Terms of Service</span></p>

          <div className='flex pl-10 text-2xl text-white'>
            <img src='/images/chinese.png' className='w-10' alt='its chinese flag'/>
            <p className='pl-3'> Chinese </p>
          </div>

          <div className='flex pl-10 text-2xl text-white'>
          <img src='/images/america.png' className='w-10' alt='its america flag'/>
          <p className='pl-3'> English </p>
          </div>

      </footer>
    </div>
  )
}

export default Footer
