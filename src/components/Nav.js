
import React, { useState } from 'react';
import { MdInstallMobile } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa6";


export default function Nav() {
  const [toggle, setToggle] = useState(true);
  <div className='h bg-blue-500'></div>
  const open = () => {
    if (toggle === true)
      setToggle(false);
    else
      setToggle(true);
  }
  return (
    <section>

      <div className='h-[400px] lg:h-[500px] overflow-hidden'>
        <img src="images/nav.avif" className='h-full w-full object-cover relative' alt="" />
        <nav className='absolute top-0 w-full mt-3 flex justify-start md:justify-around text-white py-5 text-[20px]'>
          <a href='/'>
            <p>
              <FaBars className='md:opacity-0 md:hidden' onClick={open} />
            </p>
            <p className='opacity-0 md:visible md:opacity-100 '><MdInstallMobile className='inline' />Get The App</p>
          </a>
          <ul className='gap-5 opacity-0 hidden md:flex md:opacity-100 visible cursor-pointer'>
            <li>Invester Relation</li>
            <li>Add Resturant</li>
            <li>Log in</li>
            <li>Sign Up</li>
          </ul>
          <div className='h-full w-full md:hidden bg-white text-black p-9 z-10'
            style={{
              display: toggle ? 'none' : 'block'
            }}>
            <ul>
              <li>Invester Relation</li>
              <li>Add Resturant</li>
              <li>Log in</li>
              <li>Sign Up</li>
            </ul>
          </div>
        </nav>

        <div className='absolute top-[100px] m-auto w-full flex flex-col align-middle justify-center'>
          <img src="./images/logo.avif" className='w-[20%] mx-auto' alt="" />

          <h1 className='mx-auto text-3xl lg:text-4xl mt-10 text-white'>
            Discover the best food & drinks in Bhubaneswar
          </h1>

          <div className='mx-auto mt-10 flex md:w-[700px] w-full flex-wrap rounded-md overflow-hidden'>
            <div className='flex items-center bg-white lg:w-[250px] w-full py-4'>
              <FaMapMarkerAlt className='inline text-[#ff2a2a]' />
              <input type="text" name="" id="" className='outline-none border-none]' placeholder='Enter Location' />
              <TiArrowSortedDown className='inline pl-6' />

            </div>
            <div className='flex items-center bg-white lg:w-[450px] w-full mt-4 md:mt-0'>
              <span className=''>|</span>
              <IoIosSearch className='inline' />
              <input type="text" className='outline-none border-none' placeholder='Search for Resturant,cuisine or a dish' />
            </div>
          </div>

        </div>
      </div >
    </section >
  )
}
