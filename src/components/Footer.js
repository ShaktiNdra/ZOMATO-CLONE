import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { GiIndiaGate } from "react-icons/gi";
import { GrLanguage } from "react-icons/gr";
export default function Footer() {
    return (
        <div className='footer flex flex-col align-middle p-6 lg:p-0 '>
            <footer className='w-[80vw] max-w-[1100px] text-[#696969] pt-7'>
                <div className="top flex justify-between mb-8 flex-wrap flex-col lg:flex-row">
                    <div className='lg:w-[20%] w-full'>
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&amp;crop=198:42;*,*" alt="Zomato logo" className="sc-elhb8j-1 ixsoFB w-[132px] h-[28px] mb-8 lg:mb-0" />
                    </div>
                    <div className='w-[20%] flex justify-start'>
                        <button className='flex items-center border border-[#696969] pl-5 pr-5 mr-5'><GiIndiaGate /> India</button>
                        <button className='flex items-center border border-[#696969] pl-5 pr-5'><GrLanguage /> English</button>
                    </div>
                </div>
                <div className='container flex justify-between flex-wrap'>
                    <div>
                        <h1>About Zomato</h1>
                        <p>Who We Are</p>
                        <p>Blog</p>
                        <p>Work With Us</p>
                        <p>Investor Relations</p>
                        <p>Report Fraud</p>
                        <p>Press Kit</p>
                        <p>Contact Us</p>
                    </div>

                    <div>
                        <h1>Zomaverse</h1>
                        <p>Zomato</p>
                        <p>Blinkit</p>
                        <p>District</p>
                        <p>Feeding India</p>
                        <p>Hyperpure</p>
                        <p>Zomato Live</p>
                        <p>Zomaland</p>
                        <p>Weather union</p>
                    </div>

                    <div>
                        <h1>For Resturant</h1>
                        <p>Partner With Us</p>
                        <p>Apps For You</p>
                    </div>

                    <div>
                        <h1>Learn More</h1>
                        <p>Privacy</p>
                        <p>Secrity</p>
                        <p>Terms</p>
                    </div>

                    <div>
                        <h1>Social Links</h1>
                        <span className='flex gap-2 text-3xl text-white'>
                            <CiLinkedin className='bg-black rounded-full p-1' />
                            <CiInstagram className='bg-black rounded-full p-1' />
                            <FaXTwitter className='bg-black rounded-full p-1' />
                            <CiYoutube className='bg-black rounded-full p-1' />
                            <FaFacebookF className='bg-black rounded-full p-1' />
                        </span>
                        <img src="images/appStore.png" alt="" className='w-[80%] mt-4 m-2' />
                        <img src="images/googlePlay.webp" alt="" className='w-[80%] m-2' />
                    </div>
                </div>

                <hr className='bg-[#929292] h-[3px] mt-8' />

                <p className='mt-5 mb-8'>
                    By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
                </p>
            </footer>
        </div>
    )
}
