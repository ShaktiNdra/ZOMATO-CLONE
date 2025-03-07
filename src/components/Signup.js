import React, { useState } from 'react';

export default function Signup() {

    const [inputType, setImputType] = useState('email');
    const chageInput = () => {
        setImputType('number');
    }
    const changetoEmail = () => {
        setImputType('email');
    }

    return (
        <div className='flex bg-[#fffbf7] flex-wrap p-8 lg:p-0 md:flex-nowrap'>
            <div className='lg:w-[50vw] flex justify-end'>
                <img src="images/zomato.avif" className='lg:w-[70%] w-[50%] hidden lg:block ' alt="" />
            </div>

            <div className='flex flex-col justify-center '>
                <h1 className='text-[3rem] lg:text-[3rem] tex-[2rem]'>Get the Zomato app</h1>
                <p className='lg:py-2 max-w-[550px] text-[1.3em] text-[#363636] leading-10 font-light'>
                    We will send you a link, open it on your phone to download the app
                </p>
                <div className=''>
                    <input type="radio" name="option" id="" className='-hue-rotate-[200deg] scale-125' onChange={changetoEmail} /> Email
                    <input type="radio" name="option" id="" className='ml-8 -hue-rotate-[200deg] scale-125' onChange={chageInput} /> Number
                    <div className='inputBox mt-4'>
                        {
                            inputType === 'email' ? (<input type="email" placeholder="Enter your email" className='p-[1rem] bg-white w-[200px] lg:w-[280px] border-2 border-[#363636] rounded-[.7rem]'/>) :
                                (
                                    <input type="text" placeholder="Enter your number" className='p-[1rem] bg-white w-[200px] lg:w-[280px] border-2 border-[#363636] rounded-[.7rem]' />
                                )
                        }

                        <button className='ml-3 bg-[#ef4f5f] min-w-[11rem] min-h-[44px] rounded-[.7rem] text-white mt-4 lg:mt-0'>Share App Link</button>
                    </div>

                    <p className='text-[#979797] mt-4'>
                        Download app From
                    </p>

                    <div className='flex w-[80%] items-center py-2'>
                    <img src="images/googlePlay.webp" alt="" className='w-[150px] m-2 h-[80%]' />
                    <img src="images/appStore.png" alt="" className='w-[150px] m-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}
