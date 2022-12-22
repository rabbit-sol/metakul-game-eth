import React from 'react'
import winners_nft1 from '../assets/images/winners_nft1.svg'
import winners_nft2 from '../assets/images/winners_nft2.svg'
import winners_nft3 from '../assets/images/winners_nft3.svg'
import winners_nft4 from '../assets/images/winners_nft4.svg'
import winners_nft5 from '../assets/images/winners_nft5.svg'
import blank_polygon from '../assets/images/blank_polygon.svg'
import plus_button from '../assets/images/plus_button.svg'
import nfticon from '../assets/images/nfticon.svg'
import cat_nft from '../assets/images/cat_nft.svg'
import { useNavigate } from 'react-router-dom'


export default function WinnersRound() {

    const navigate = useNavigate();
    const pageNavigate = (page) => {
        navigate(`/${page}`);
    };
    return (
        <div className='justify-between block'>
            <div className='flex justify-between mb-8'>
                <div>
                    <div className='flex gap-2'>
                        <div className='text-gray font-black text-2xl tracking-wide'>
                            Winners Takes All
                        </div>
                        <div className='flex items-center text-nouveau-main font-black text-sm leading-6 tracking-wider'>
                            5/6
                        </div>
                    </div>
                    <div className='text-space-gray text-opacity-[0.8] tracking-wide font-semibold text-sm leading-6'>
                        Waiting for <span className='text-light-green'>1</span> more player ...
                    </div>
                </div>
                <div className='flex gap-4 '>
                    <button onClick={() => pageNavigate("previousrounds")} className='bg-nouveau-main bg-opacity-[0.08] rounded-lg px-6 py-3 text-space-gray font-bold'>
                        Previous Rounds
                    </button>
                    <button className='bg-nouveau-main bg-opacity-[0.08] rounded-lg px-6 py-3 text-space-gray font-bold'>
                        Rules
                    </button>
                </div>

            </div>
            <div>
                <div className='flex'>
                    <div className='min-w-[50%]'>
                        <div className='min-w-[50%] flex justify-center h-96'>
                            <div className='relative'>
                                <img src={winners_nft2} className=' hover:cursor-pointer' />
                                <img src={winners_nft3} className='absolute top-16 left-[105px]  hover:cursor-pointer' />
                                <img src={winners_nft4} className='absolute top-[188px] left-[105px]  hover:cursor-pointer' />
                                <div className=' hover:cursor-pointer'>
                                    <img src={plus_button} className='absolute bg-opacity[0.64] top-[122px]' />
                                    <div className='absolute text-gray text-5xl top-[155px] right-[45px]'>
                                        8
                                    </div>
                                </div>
                                <img src={winners_nft5} className='absolute top-[245px]  hover:cursor-pointer' />
                                <div className=' hover:cursor-pointer'>
                                    <img src={plus_button} className='absolute top-[188px] right-[105px]' />
                                    <div className='absolute top-[220px] right-[153px] text-light-blue text-5xl'>
                                        +
                                    </div>
                                </div>
                                <img src={winners_nft1} className='absolute top-16 right-[105px]  hover:cursor-pointer' />
                            </div>
                        </div>
                        <div className='mt-10'>
                            <div className='text-gray text-sm leading-6 font-black tracking-wide'>
                                How It Works
                            </div>
                            <div className='text-space-gray font-semibold text-sm leading-6 tracking-wide mt-1'>
                                6 Players, 6 NFTs, 1 random winner gets selected, winner take all
                            </div>
                        </div>


                    </div>
                    <div>
                        <div className='bg-yankees-blue p-8 rounded-3xl'>
                            <div className='flex gap-3 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-space-gray-rgb" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <div className='text-gray font-black text-xl not-italic tracking-wide'>
                                    Crypto Dinosaurs
                                </div>
                            </div>
                            <div className='mt-4 relative'>
                                <div className='flex gap-3 '>
                                    <div className=''>
                                        <img src={nfticon} />
                                    </div>
                                    <div className='text-space-gray tracking-wide font-semibold leading-6 text-sm'>
                                        The Bored Ape Yacht Club is a Collection of 10 000
                                        unique Bored Ape NFTs - unique digital collectibles ...
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-8'>
                            <div className='flex justify-between text-space-gray uppercase text-xs tracking-wider text-opacity-[0.56] font-bold'>
                                <div>
                                    PLAYER
                                </div>
                                <div>
                                    NFT
                                </div>
                            </div>
                            <div className='flex justify-between text-space-gray text-sm leading-6 font-semibold tracking-wide mt-8'>
                                <div>
                                    n2tW3jdGihPZGrsturikzCXkSd7ZBXx3Wp
                                </div>
                                <div className='flex items-center' >
                                    BAYC #8956
                                </div>
                            </div>
                            <div className='flex justify-between text-space-gray text-sm leading-6 font-semibold tracking-wide mt-8'>
                                <div>
                                    mrrk7yBe3MQN1BZUcPRXQsyPWFf4bT6dKy
                                </div>
                                <div className='flex items-center' >
                                    BAYC #8956
                                </div>
                            </div>
                            <div className='flex justify-between text-space-gray text-sm leading-6 font-semibold tracking-wide mt-8'>
                                <div>
                                    mvPqvCC5j9u28n2RwycW3S1uDuqDewEd9Y
                                </div>
                                <div className='flex items-center' >
                                    BAYC #8956
                                </div>
                            </div>
                            <div className='flex justify-between text-space-gray text-sm leading-6 font-semibold tracking-wide mt-8'>
                                <div className='flex gap-4'>
                                    <div>
                                        <img src={cat_nft} />
                                    </div>
                                    <div className='flex items-center' >
                                        osmond
                                    </div>
                                </div>
                                <div className='flex items-center' >
                                    BAYC #8956
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </div>

    )
}
