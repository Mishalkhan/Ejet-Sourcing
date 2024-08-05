import React from 'react'
import { IoAtOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { IoLogoWechat } from "react-icons/io5";

const Section10 = () => {
  return (
    <div className='font-serif'>
        <p className='text-center text-7xl pt-20 text-gray-800'>We Are Glad to Hear from You!</p>
        <p className='text-center text-4xl pt-20 text-gray-800'>Any information from you is warmly welcome. Please do not hesitate to contact us!</p>
  <div className="flex py-8">
  {/* Contact Information */}
  <div className="w-full w-1/2 p-4 pl-32">
    <div className="mb-4">
        <div className="flex text-2xl text-medium text-gray-600 py-5 leading-loose">
            <div className='py-4'><IoAtOutline /> </div>
            <p className='pl-6'>contact@ejet.com</p>
        </div>
        <div className="flex text-2xl text-medium text-gray-600 py-5 leading-loose">
            <div className='py-4'><FaPhoneAlt /> </div>
            <p className='pl-6'>+86 150 8821 0909</p>
        </div>
        <div className="flex text-2xl text-medium text-gray-600 py-5 leading-loose">
            <div className='py-4'><GoClock /></div>
            <div>
                <p className='pl-6 pb-10'>Monday - Friday 8:30am - 5:00pm</p>
                <p className='pl-6'>Saturday - 8:30am - 3:00pm</p>
            </div>
        </div>
        <div className="flex text-2xl text-medium text-gray-600 py-5 leading-loose">
            <div className='py-4'><IoLocationSharp /> </div>
            <div>
                <p className='pl-6 pb-10'><span className='text-extrabold text-gray-800'>Corporate Office</span><br />7th Floor of Tianbo International Building<br />No 55, Jiangdong Middle Road<br />Yiwu City, Zhejiang Province<br />China 322000</p>
                <p className='pl-6'><span className='text-extrabold text-gray-800'>Branch Office</span><br />Room 1802, D Building, Mingyue Mansion,<br />No.2-4 Huacheng Road, Guangzhou, China</p>
            </div>
        </div>
        <div className="flex text-2xl text-medium text-gray-600 py-5 leading-loose">
            <div className='py-4'><IoLogoWechat /> </div>
            <div>
                <p className="pl-6 pb-10">Add Our Wechat</p>
                <img src="/images/QRcode.webp" alt="QR Code" className="w-80 pl-6" />
            </div>
        </div>
    
    </div>
  </div>
  
  {/* Contact Form */}
  <div className="w-1/2 p-4">
    <form action="#" method="POST" className="space-y-10 w-9/12 mx-auto">
      <div className="flex space-x-10">
        <div className="w-1/2">
          <label htmlFor="firstName" className="block pb-4 text-2xl font-medium">First Name <sup className='text-[#F70000] text-lg'>*</sup></label>
          <input type="text" id="firstName" name="firstName" className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-5" />
        </div>
        <div className="w-1/2">
          <label htmlFor="lastName" className="block pb-4 text-2xl font-medium">Last Name <sup className='text-[#F70000] text-lg'>*</sup></label>
          <input type="text" id="lastName" name="lastName" className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-5" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block pb-4 text-2xl font-medium">Email <sup className='text-[#F70000] text-lg'>*</sup></label>
        <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-5" />
      </div>
      <div>
        <label htmlFor="whatsapp" className="block pb-4 text-2xl font-medium">Whatsapp <sup className='text-[#F70000] text-lg'>*</sup></label>
        <input type="text" id="whatsapp" name="whatsapp" className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-5" />
      </div>
      <div>
        <label htmlFor="country" className="block pb-4 text-2xl font-medium">Country <sup className='text-[#F70000] text-lg'>*</sup></label>
        <input type="text" id="country" name="country" className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-5" />
      </div>
      <div>
        <label htmlFor="message" className="block pb-4 text-2xl font-medium">Message <sup className='text-[#F70000] text-lg'>*</sup></label>
        <textarea id="message" name="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-6" defaultValue={""} />
      </div>
      <div className='pb-20 pt-3'>
        <button className="bg-[#2CA6E0] hover:bg-[#CCCCCC] hover:text-[#2CA6E0] hover:border-2 border-[#2CA6E0] text-white py-7 px-32 rounded-full text-2xl">
        Send
        </button>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default Section10
