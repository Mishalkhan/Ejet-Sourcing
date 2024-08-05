import Link from 'next/link';
import React from 'react';
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='navbar-container font-serif'>
      <nav className="justify-between px-20 py-7">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <img src="/images/logo.webp" alt="Logo" />
          </Link>
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="nav-item">
                <Link href="/" className="nav-link text-3xl">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link text-3xl">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link text-3xl">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link text-3xl">
                  Resources
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link text-3xl">
                <button className="bg-[#2CA6E0] hover:bg-white hover:text-[#2CA6E0] hover:border-2 border-[#2CA6E0] text-white py-6 px-14 rounded-full text-xl">
                  Start Sourcing
                </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link text-3xl flex">
                  <img src='/images/uk.svg' className='w-10 mx-3' alt='its uk flag'/>
                  <p className='pr-2'>Engish</p>
                  <MdArrowDropDown />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
