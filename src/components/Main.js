
import React from 'react'

export default function Main() {
    return (
        <div className='flex justify-center  ju my-8 lg:p-0'>
            <main className='flex w-[1100px] md:justify-center justify-start  lg:justify-between flex-wrap'>
                <div className='w-[30%] rounded-2xl overflow-hidden relative border-[2px] border-gray-400 h-[250px] min-w-[150px] m-5 lg:m-0 hover:scale-105 duration-200'>
                    <img src="images/main1.avif" alt=""/>
                    <div className='w-[100%] bg-white absolute bottom-0 p-2'>
                        <h1 className='text-2xl'>
                            Order online
                        </h1>
                        <p className='text-gray-600'>
                            stay home and order to your doorstep
                        </p>
                    </div>
                </div>

                <div className='w-[30%] rounded-2xl overflow-hidden relative border-[2px] border-gray-400 h-[250px] min-w-[150px] m-5 lg:m-0  hover:scale-105 duration-200'>
                    <img src="images/main2.avif" alt=""/>
                    <div className='w-[100%] bg-white absolute bottom-0 p-2'>
                        <h1 className='text-2xl'>
                            Dining
                        </h1>
                        <p className='text-gray-600'>
                            View the city's favorite dinign venues
                        </p>
                    </div>
                </div>


                <div className='w-[30%] rounded-2xl overflow-hidden relative border-[2px] border-gray-400 h-[250px] min-w-[150px] m-5 lg:m-0  hover:scale-105 duration-200'>
                    <img src="images/main3.avif" alt=""/>
                    <div className='w-[100%] bg-white absolute bottom-0 p-2'>
                        <h1 className='text-2xl'>
                            Nightlife and Clubs
                        </h1>
                        <p className='text-gray-600'>
                            Explore the city's top Nightlife outlets
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}
