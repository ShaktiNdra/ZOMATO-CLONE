
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

export default function Collection() {
    return (
        <div className='flex p-4 lg:p-0 justify-center my-0 lg:my-8'>
            <section className='max-w-[1100px]'>
                <h1 className='lg:text-[36px] text-[30px]'>Collections</h1>
                <div className='flex justify-between flex-wrap'>
                    <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Bhubaneswar, based on trends </p>
                    <span className='text-[#e03546]'>
                        All collection in Bhubaneswar <IoIosArrowForward className='inline'/>
                    </span>
                </div>

                <div className='Collection flex md:justify-between justify-center text-white font-medium my-8 flex-wrap'>

                    <div className='h-[300px] overflow-hidden min-w-[200px] m-2 

 md:m-0'>
                        <img src="images/collection1.avif" alt="" />
                        <section className='w-full absolute bottom-2 p-3 bg-[#0000004d]'>
                            <p>Best Luxury Dining Places</p>
                            <span>7 Places </span><IoIosArrowForward className='inline' />
                        </section>
                    </div>

                    <div className='h-[300px] overflow-hidden min-w-[200px] m-2 

 md:m-0'>
                        <img src="images/collection2.avif" alt="" />
                        <section className='w-full absolute bottom-0 p-3 bg-[#0000004d]'>
                            <p>Best Luxury Dining Places</p>
                            <span>7 Places </span><IoIosArrowForward className='inline' />
                        </section>
                    </div>

                    <div className='h-[300px] overflow-hidden min-w-[200px] m-2 

 md:m-0'>
                        <img src="images/collection3.avif" alt="" />
                        <section className='w-full absolute bottom-0 p-3 bg-[#0000004d]'>
                            <p>Best Luxury Dining Places</p>
                            <span>7 Places </span><IoIosArrowForward className='inline' />
                        </section>
                    </div>

                    <div className='h-[300px] overflow-hidden min-w-[200px] m-2 

 md:m-0'>
                        <img src="images/collection4.avif" alt="" />
                        <section className='w-full absolute bottom-0 p-3 bg-[#0000004d]'>
                            <p>Best Luxury Dining Places</p>
                            <span>7 Places </span><IoIosArrowForward className='inline' />
                        </section>
                    </div>

                </div>

            </section>
        </div>
    )
}
