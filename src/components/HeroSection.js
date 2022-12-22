import React, { useState } from 'react'
import hero1 from '../assets/images/hero1.svg'
import hero2 from '../assets/images/hero2.svg'
import hero3 from '../assets/images/hero3.svg'
import hero4 from '../assets/images/hero4.svg'
import hero5 from '../assets/images/hero5.svg'
import hero6 from '../assets/images/hero6.svg'
import percentage from '../assets/images/percentage.svg'
import { Desktop, Mobile, Tablet } from './Media'

export default function HeroSection() {

    return (
        <div className='lg:max-h-56 bg-yankees-blue rounded-3xl block sm:flex lg:flex 2xl:flex py-8 px-8 min-h-[224px] text-gray justify-center sm:justify-between relative'>
            <div className='w-60 sm:block md:block lg:block xl:block 2xl:block'>
                <div>
                    <img src={percentage} />
                </div>

                <div className='text-4xl font-extrabold'>
                    Playing Fee
                </div>
                <div className='from-cyan-500 to-blue-500'></div>
            </div>
            {/* <div className='bg-gradient-to-r from-yankees-blue via-image-gradient min-w-1/2'>

            </div> */}
            {/* <div className='absolute top-0 left-0 w-2/3 xl:flex justify-center overflow-hidden'><div className='bg-image-gradient-top w-36 h-16 blur-[80px]'></div></div>
            <div className='absolute bottom-0 left-0 w-full xl:flex justify-center overflow-hidden'><div className='bg-image-gradient-bottom w-36 h-16 blur-[80px] opacity-80'></div></div> */}

            <div className='absolute top-0 left-0 w-2/3 hidden xl:flex justify-center overflow-hidden'><div className='bg-image-gradient-top w-36 h-16 blur-[80px]'></div></div>
            <div className='absolute bottom-0 left-0 w-full hidden xl:flex justify-center overflow-hidden'><div className='bg-image-gradient-bottom w-36 h-16 blur-[80px] opacity-80'></div></div>
            <div className='relative xl:flex 2xl:flex sm:hidden md:hidden mt-4 sm:mt-0 md:mt-0 lg:mt-0 2xl:mt-0 '>
                <Desktop>
                    <img src={hero1} className='relative right-2' />
                    <img src={hero2} className="absolute left-20" />
                    <img src={hero3} className="relative right-8" />
                </Desktop>
                <Mobile>
                    {/* <div className='absolute top-0 left-0 w-2/3  xl:flex justify-center overflow-hidden'><div className='bg-image-gradient-top w-36 h-16 blur-[80px]'></div></div>
                    <div className='absolute bottom-0 left-0 w-full xl:flex justify-center overflow-hidden'><div className='bg-image-gradient-bottom w-36 h-16 blur-[80px] opacity-80'></div></div> */}
                    <img src={hero4} className='relative right-2' />
                    <img src={hero5} className="relative left-0 top-1" />
                    <img src={hero6} className="relative right-0 top-2" />
                </Mobile>
                {/* <Tablet>
                    <img src={hero4} className='relative right-2' />
                    <img src={hero5} className="relative left-0 top-1" />
                    <img src={hero6} className="relative right-0 top-2" />
                </Tablet> */}

                {/* <img src={hero4} className='relative' />
                <img src={hero5} className="absolute" />
                <img src={hero6} className="relative" /> */}
            </div>
            <div className='text-left sm:text-center md:text-center lg:text-right 2xl:text-right relative flex flex-col mt-10 sm:mt-0 md:mt-10 lg:mt-0 2xl:mt-0'>
                <div className='text-xl sm:text-2xl md:text-2xl lg:text-2xl 2xl:text-2xl font-black tracking-wide'>
                    Utilize Your Eth NFTs
                </div>
                <div className='text-base text-space-gray font-black tracking-wider leading-8 pt-2'>
                    PLAY WITH THEM TO WIN OTHER NFTS
                </div>
                <div className='grow'></div>
                <div className='relative'>
                    <button className='bg-blue-chaos text-blue rounded-lg px-6 py-3 bottom-0 right-0 '>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}
