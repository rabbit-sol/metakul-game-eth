import React from 'react'
import nfticon from '../assets/images/nfticon.svg'

import PlayNFTModal from './modals/PlayNFTModal';

export default function NFTPoolCard({ name, desc, playerJoined, totalPlayer, nftnews }) {

    const [open, setOpen] = React.useState(false);
    const playOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (

        <>
            <div className='bg-yankees-blue rounded-3xl flex flex-col'>
                <div>
                    <img src={nftnews} className="rounded-t-3xl w-full " />
                </div>
                <div className='p-8'>
                    <div className='flex gap-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-space-gray-rgb" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <div className='text-gray font-black text-xl not-italic tracking-wide'>
                            {name}
                        </div>
                    </div>
                    <div className='mt-4 relative'>
                        <div className='flex gap-3 '>
                           
                                <img src={nfticon} />
                          
                            <div className='text-space-gray tracking-wide font-semibold leading-6 text-sm'>
                                {desc}
                            </div>
                        </div>

                        <div className='bottom-0 mt-10'>
                            <div className='flex justify-between'>
                                <div className='flex gap-2'>
                                    <div className='font-bold text-sm tracking-wide leading-8'>
                                        <span className='text-light-green'>
                                            {playerJoined}
                                        </span>
                                        <span className='text-nouveau-main'>
                                            /{totalPlayer}
                                        </span>
                                    </div>
                                    <div className='flex text-light-gray text-sm tracking-wide leading-8'>
                                        Players
                                    </div>
                                </div>
                                <div>
                                    <button className='bg-light-green uppercase py-3 px-8 rounded-lg text-yankees-blue text-sm leading-6 font-bold' onClick={playOpen}>
                                        Play
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <PlayNFTModal open={open} handleClose={handleClose}></PlayNFTModal>
        </>
    )
}
