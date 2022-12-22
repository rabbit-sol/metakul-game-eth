import React, { useState } from 'react'
import dropdown from '../assets/img/dropdown.svg'
import dropup from '../assets/img/dropup.svg'

export default function NFTPools() {

    const [popular, setPopular] = useState(false);
    return (


        <>
            <div className='justify-between block sm:flex md:flex lg:flex xl:flex 2xl:flex'>
                <div className='text-gray font-black text-2xl tracking-wide'>
                    NFT Pools
                </div>
                {/* <div className='flex gap-x-2 sm:gap-10 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10 '> */}
                <div className='block gap-6 sm:block md:flex '>
                    <div className='justify-between text-gray'>
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                            <li className='relative'>
                                <div  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-space-gray border rounded-lg p-4  ">
                                   Join with your Nfts
                                   
                                </div>
                              
                            </li>

                        </ul>
                    </div>
                    <div className='text-gray'>
                        <form>
                            {/* <label for="default-search" className="mb-2 text-sm font-medium text-space-gray sr-only">Search</label> */}
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-space-gray dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" className="block p-2.5 pl-10 w-full sm:w-64 md:w-80 lg:80 xl:80 2xl:80 text-sm text-space-gray bg-background border-b border-nouveau focus:ring-background" placeholder="Search by name ..." />

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
