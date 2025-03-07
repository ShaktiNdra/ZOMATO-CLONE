
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

export default function Explore(props) {

  const [toggle, setToggle] = useState(false);
 

  const open = () => {
    if(toggle === false){
      setToggle(true);
    }
    else{
      setToggle(false);
    }
  }

  return (
    <div className='flex justify-center my-5'>
      <section className='max-w-[1100px] py-5 px-3 border-2 border-[#e8e8e8] rounded-md bg-white drop-shadow-sm'>
        <div>
          <div className='flex justify-between w-[80vw] lg:w-[1100px] mb-2 pr-6 cursor-pointer' onClick={open}>
            <p className='text-xl'>
              {props.heading}
            </p>
            <p>
              <IoIosArrowDown style={
                {
                   rotate : toggle ? "180deg" : "0deg"
                }
              }/>
            </p>
          </div>
          <p style={
            {
              display : toggle ? "block" : "none"
            }
          } className='text-[#616161] text-lg'>{props.text}</p>
        </div>
      </section>
    </div>
  )
}
