
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

export default function City() {
    return (
        <div className='flex justify-center p-8 lg:p-0 mb-[100px]'>
            <div className='max-w-[1100px]'>

                <h1 className='text-[2rem] lg:text-[3rem] font-sans text-[#464646]'>Popular localities in and around<span className='text-black font-semibold'> Bhubaneswar</span></h1>
                <div className='city flex  justify-between flex-wrap md:flex-nowrap lg:w-[1100px]'>
                    <div>
                        <div>
                            <p>Patia</p>
                            <span>689 places</span>

                            <h1 className='absolute right-4 top-[40%]'>
                                <IoIosArrowForward />
                            </h1>
                        </div>
                        <div>
                            <p>Jayadev Vihar</p>
                            <span>127 Places</span>
                            <h1 className='absolute right-4 top-[40%]'>
                                <IoIosArrowForward />
                            </h1>
                        </div>
                        <div>
                            <p>Unit 4</p>
                            <span>89 Places</span>
                            <h1 className='absolute right-4 top-[40%]'>
                                <IoIosArrowForward />
                            </h1>
                        </div>
                    </div>



                    <div>
                        <div>
                            <p>Chandrasekharpur</p>
                            <span>343 places</span>
                            <h1 className='absolute right-4 top-[40%]'>
                                <IoIosArrowForward />
                            </h1>
                        </div>
                        <div>
                            <p>Nayapalli</p>
                            <span>167 Places</span>
                            <h1 className='absolute right-4 top-[40%]'>
                                <IoIosArrowForward />
                            </h1>
                        </div>
                        <div>
                            <p>Lakshmi Sugar</p>
                            <span>148 Places</span>
                            <h1 className='absolute right-4 top-[40%]'>
                                <IoIosArrowForward />
                            </h1>
                        </div>
                    </div>


                    <div>
                        <div>
                            <p>Sahid Nagar</p>
                            <span>288 places</span>
                            <h1 className='absolute right-4 top-[40%]'>
                                <IoIosArrowForward />
                            </h1>
                        </div>
                        <div>
                            <p>Kharabela Nagar</p>
                            <span>162 Places</span>
                            <h1 className='absolute right-4 top-[40%]'>
                                <IoIosArrowForward />
                            </h1>
                        </div>
                        <div>
                            <p>See More</p>
                            <h1 className='absolute right-4 top-[40%]'>
                                <IoIosArrowForward />
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
