
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import {
    CogIcon,
    CollectionIcon,
    HomeIcon,
    MenuAlt2Icon,
    PhotographIcon,
    PlusSmIcon,
    UserGroupIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import games from "../../assets/img/games.png"
import backarrow from "../../assets/img/backArrow.svg"
import star from "../../assets/img/star.png"
import scissor from "../../assets/img/scissor.svg"
import dropup from "../../assets/img/dropup.svg"
import dropdown from "../../assets/img/dropdown.svg"
import medal from "../../assets/img/medal.svg"
import opensea from "../../assets/img/opensea.svg"
import mevector from "../../assets/img/mevector.svg"
import solana from "../../assets/img/solana.svg"
import solana_icon from "../../assets/images/solana_icon.svg"
import ethereum from "../../assets/images/ethereum.png"
import buy_button from "../../assets/images/buy_button.svg"
import dots from "../../assets/images/dots.svg"
import avatar from '../../assets/images/avatar.svg'
import Header from "./Header";
import HeroSection from "../HeroSection";
import NFTPools from "../NFTPools";
import NFTPoolCard from "../NFTPoolCard";
import ReactTooltip from 'react-tooltip'
import PreviousRounds from '../PreviousRounds'
import WinnersRound from '../WinnersRound'
import NFTPoolCardList from '../NFTPoolCardList';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import styled from 'styled-components';

const Hovertip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#27314B',
        color: '#6A7080',
        fontSize: 11,
        fontSize: '14px',
        letterSpacing: '0.01em',
        borderRadius: '20px',
        padding: '16px',
        fontWeight: 700,
    },
}));


export default function SideBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [open, setOpen] = useState(true);
    const [gameslist, setGamesList] = useState(false);
    const [eventList, setEventList] = useState(false);
    const navigate = useNavigate();

    const pageNavigate = (page) => {
        navigate(`/${page}`);
    };
    return (
        <>
            <div className="h-screen flex">
                <div className={`${open ? 'min-w-[240px]' : 'w-20'} hidden min-h-screen max-h-screen sidebar-gradient md:block  relative`}>
                    <div className="w-full flex flex-col px-4 h-full duration-1000 overflow-y-auto">
                        <div className="flex-shrink-0 mt-10 w-full justify-between items-center text-gray font-black tracking-wide text-md uppercase">
                            <ul className={`pl-1 `}>
                                <li className="flex items-center mb-6 cursor-pointer" onClick={() => pageNavigate("")}>
                                    <Hovertip title="" placement="right">
                                        <img src={games} className="w-6 h-6" />
                                    </Hovertip>
                                    <a to='/' className={`text-sm ml-3 flex items-center font-bold text-gray tracking-wide capitalize ${!open && "hidden"}`}>ETHWIN</a>
                                </li>                           
                            </ul> {
                                open ?
                                    <>
                                        <img
                                            className={`cursor-pointer float-right duration-150`}
                                            src={backarrow}
                                            alt="Workflow"
                                            onClick={() => setOpen(!open)}
                                        />
                                    </>
                                    :
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer text-space-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" onClick={() => setOpen(!open)}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </>
                            }

                        </div>
                        <div className={`mt-16 mb-8 w-full flex items-center text-space-gray-rgb font-bold tracking-wider text-xs uppercase`}>
                            <div>
                                play
                            </div>
                        </div>
                        <ul className="px-px">
                            <li className="flex w-full justify-between text-space-gray cursor-pointer items-center mb-6" onClick={() => setGamesList(!gameslist)}>
                                <div className="flex w-full items-center">
                                    <div>
                                        <Hovertip title="Games" placement="right">
                                            <img src={games} className="w-6 h-6" />
                                        </Hovertip>

                                    </div>

                                    <button type="button" className={`flex items-center w-full ${!open && "hidden"}`} alt="Games" >
                                        <span className="text-sm ml-3 uppercase text-left whitespace-nowrap tracking-wide font-bold grow">Games Stat</span>

                                        <img src={gameslist ? dropdown : dropup} className="flex items-center"></img>
                                    </button>
                                </div>
                            </li>
                            <ul className={`pl-1 ${gameslist ? 'hidden' : ''}`}>
                                <li className="flex items-center mb-6 cursor-pointer" onClick={() => pageNavigate("winnertakesall")}>
                                    <Hovertip title="Winner Takes All" placement="right">
                                        <img src={star} className={`flex items-center `}></img>
                                    </Hovertip>
                                    <a to='/winners' className={`text-sm ml-3 flex items-center font-bold v text-gray tracking-wide capitalize ${!open && "hidden"}`}>Winner Takes All</a>
                                </li>
                                <li className={`flex items-center mb-6 cursor-pointer`} onClick={() => pageNavigate("previousrounds")}>
                                    <Hovertip title="Previous Rounds" placement="right">
                                        <img src={scissor}></img>
                                    </Hovertip>
                                    <a href="#" className={`text-sm ml-3 flex items-center font-bold text-gray tracking-wide capitalize whitespace-nowrap ${!open && "hidden"}`}>Previous Rounds</a>
                                </li>
                            </ul>
                        </ul>
                        <div className={`mt-16 mb-8 w-full flex items-center text-space-gray-rgb font-bold tracking-wider text-xs uppercase`}>
                            <div>
                                events
                            </div>

                        </div>
                        <ul className="px-px">
                            <li className="flex w-full justify-between text-space-gray cursor-pointer items-center" onClick={() => setEventList(!eventList)}>
                                <div className="flex w-full items-center">
                                    {/* <span className="text-sm ml-2 uppercase">games</span> */}
                                    <div>
                                        <Hovertip title="Leaders" placement="right">
                                            <img src={medal} className="w-6 h-6"></img>
                                        </Hovertip>
                                    </div>
                                    <button type="button" className={`flex items-center w-full ${!open && "hidden"}`}>
                                        <span className="text-sm ml-3 uppercase text-left whitespace-nowrap tracking-wide font-bold grow">Leadersmob</span>
                                        <img src={eventList ? dropdown : dropup} className="flex items-center"></img>
                                    </button>
                                </div>
                            </li>
                            <ul className={`pl-1 ${eventList ? 'hidden' : ''}`}>
                                <li className="flex  mt-6" >

                                    <p className={`text-sm  flex items-center font-bold text-space-gray tracking-wide capitalize`}>Name</p>
                                    <p className={`text-sm ml-16 flex items-right font-bold text-space-gray tracking-wide capitalize`}>Winnings</p>
                                </li>
                                <li className="flex items-center mt-6" >

                                    <p className={`text-sm  flex items-center font-bold text-gray tracking-wide capitalize`}>metaverse.eth</p>
                                    <p className={`text-sm ml-8 flex items-right font-bold text-gray tracking-wide capitalize`}>600</p>
                                </li>
                                <li className="flex items-center mt-6">

                                    <p className={`text-sm  flex items-center font-bold text-gray tracking-wide capitalize`}>metaverse.eth</p>
                                    <p className={`text-sm ml-8 flex items-center font-bold text-gray tracking-wide capitalize`}>400</p>
                                </li>
                                <li className="flex items-center mt-6" >

                                    <p className={`text-sm flex items-center font-bold text-gray tracking-wide capitalize`}>metaverse.eth</p>
                                    <p className={`text-sm ml-8 flex items-center font-bold text-gray tracking-wide capitalize`}>300</p>
                                </li>
                                <li className="flex items-center mt-6" >

                                    <p className={`text-sm  flex items-center font-bold text-gray tracking-wide capitalize`}>metaverse.eth</p>
                                    <p className={`text-sm ml-8 flex items-center font-bold text-gray tracking-wide capitalize`}>250</p>
                                </li>
                            </ul>
                        </ul>
                        <div className="grow"></div>
                        <div className={`mb-11 w-full left-0 bottom-0 mt-4`}>
                            <div className="flex items-center justify-center w-full">
                                <div className="block text-center items-center">
                                    <div className={`text-xs  font-bold text-space-gray-rgb mb-4 tracking-wider ${!open && "hidden"}`}>Powered By</div>

                                    {
                                        open ?

                                            <img src={ethereum} className=" h-12 "></img>
                                            :

                                            <img src={ethereum} className="h-12 "/>
                                    }
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full mt-8 mb-11 ">

                                {
                                    open ?

                                        <>
                                            <button className={`w-full h-12 text-sm rounded-lg tracking-wide font-bold text-light-blue bg-light-blue-rgb hover:bg-light-blue hover:text-yankees-blue ${!open && "hidden"}`}>Buy ETH NFTs</button>
                                        </>

                                        :

                                        <>
                                            <img src={buy_button} />
                                        </>
                                }

                            </div>
                            {
                                open ?
                                    <>
                                        <div className={`flex items-center justify-center w-full`}>
                                            <img src={opensea} className="hover:text-gray"></img>
                                            <img src={mevector} className="hover:text-gray ml-5"></img>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <Hovertip title={<div className={`flex items-center justify-center w-full`}>
                                            <img src={opensea} className="hover:text-gray"></img>
                                            <img src={mevector} className="hover:text-gray ml-5"></img>
                                        </div>} placement="right">
                                            <div className={`flex items-center justify-center w-full`}>
                                                <img src={dots} />
                                            </div>
                                        </Hovertip>
                                    </>
                            }
                        </div>
                        {/* </div> */}

                    </div>

                </div>

                {/* Mobile menu */}
                <Transition.Root show={mobileMenuOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-20 md:hidden" onClose={setMobileMenuOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 sidebar-gradient" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative max-w-xs w-full bg-background  pt-5 pb-4 flex-1 flex flex-col">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-1 right-0 -mr-14 p-1">
                                            {/* <button
                                                type="button"
                                                className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-0 focus:ring-white"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                                <span className="sr-only">Close sidebar</span>
                                            </button> */}
                                        </div>
                                    </Transition.Child>

                                    <div className="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                                        <nav className="h-full flex flex-col">
                                            <div className="space-y-1">
                                                <div className="flex-1 w-full px-2">
                                                    <div className="flex-shrink-0 w-full items-center text-gray font-black tracking-wide text-md uppercase flex gap-4">
                                                        <button
                                                            type="button"
                                                            className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-0 focus:ring-white"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            <XIcon className="h-6 w-6 text-space-gray" aria-hidden="true" />
                                                            <span className="sr-only">Close sidebar</span>
                                                        </button>

                                                        <div className={`float-left`}> <ul className={`pl-1 `}>
                                                            <li className="flex items-center  cursor-pointer" onClick={() => pageNavigate("")}>
                                                                <Hovertip title="" placement="right">
                                                                    <img src={games} className="w-6 h-6" />
                                                                </Hovertip>
                                                                <a to='/' className={`text-sm ml-3 flex items-center font-bold text-gray tracking-wide capitalize ${!open && "hidden"}`}>ETHWIN</a>
                                                            </li>
                                                        </ul></div>

                                                    </div>
                                                    <div className={`mt-14 mb-8 w-full flex items-center text-space-gray-rgb font-bold tracking-wider text-xs uppercase`}>
                                                        <div className={` mt-12`}>
                                                            Play Now

                                                        </div>
                                                    </div>
                                                    <ul className="px-px">
                                                        <li className="flex w-full justify-between text-space-gray cursor-pointer items-center" onClick={() => setGamesList(!gameslist)}>
                                                            <div className="flex w-full items-center">
                                                                {/* <span className="text-sm ml-2 uppercase">games</span> */}
                                                                <div><img src={games}></img></div>
                                                                <button type="button" className={`flex items-center w-full`}>
                                                                    <span className="text-sm ml-3 uppercase text-left whitespace-nowrap tracking-wide font-bold grow">Games Stat</span>
                                                                    <img src={gameslist ? dropdown : dropup} className="flex items-center"></img>
                                                                </button>
                                                            </div>
                                                        </li>
                                                        <ul className={`pl-1 ${gameslist ? 'hidden' : ''}`}>
                                                            <li className="flex items-center mt-6" onClick={() => pageNavigate("winnertakesall")}>
                                                                <img src={star} className={`flex items-center`}></img>
                                                                <a href="#" className={`text-sm ml-3 flex items-center font-bold text-gray tracking-wide capitalize`}>Winner Takes All</a>
                                                            </li>
                                                            <li className={`flex items-center mt-6`} onClick={() => pageNavigate("previousrounds")}>
                                                                <img src={scissor}></img>
                                                                <a href="#" className="text-sm ml-3 flex items-center font-bold text-gray tracking-wide capitalize whitespace-nowrap">Prevous Round</a>
                                                            </li>
                                                        </ul>
                                                    </ul>
                                                    <div className={`mt-16 mb-8 w-full flex items-center text-space-gray-rgb font-bold tracking-wider text-xs uppercase`}>
                                                        <div>
                                                            events
                                                        </div>
                                                    </div>
                                                    <ul className="px-px">
                                                        <li className="flex w-full justify-between text-space-gray cursor-pointer items-center" onClick={() => setEventList(!eventList)}>
                                                            <div className="flex w-full items-center">
                                                                {/* <span className="text-sm ml-2 uppercase">games</span> */}
                                                                <div><img src={medal}></img></div>
                                                                <button type="button" className={`flex items-center w-full`}>
                                                                    <span className="text-sm ml-3 uppercase text-left whitespace-nowrap tracking-wide font-bold grow">Leaders</span>
                                                                    <img src={eventList ? dropdown : dropup} className="flex items-center"></img>
                                                                </button>
                                                            </div>
                                                        </li>
                                                        <ul className={`pl-1 ${eventList ? 'hidden' : ''}`}>
                                                            <li className="flex items-center mt-6" >
                                                                
                                                                <p className={`text-sm ml-3 flex items-center font-bold text-gray tracking-wide capitalize`}>metaverse.eth</p>
                                                            </li>
                                                            <li className="flex items-center mt-6" >
                                                                
                                                                <p className={`text-sm ml-3 flex items-center font-bold text-gray tracking-wide capitalize`}>metaverse.eth</p>
                                                            </li>
                                                            <li className="flex items-center mt-6">
                                                                
                                                                <p className={`text-sm ml-3 flex items-center font-bold text-gray tracking-wide capitalize`}>metaverse.eth</p>
                                                            </li>
                                                            <li className="flex items-center mt-6" >
                                                                
                                                                <p className={`text-sm ml-3 flex items-center font-bold text-gray tracking-wide capitalize`}>metaverse.eth</p>
                                                            </li>
                                                            <li className="flex items-center mt-6" >
                                                                
                                                                <p className={`text-sm ml-3 flex items-center font-bold text-gray tracking-wide capitalize`}>metaverse.eth</p>
                                                            </li>
                                                         
                                                        </ul>
                                                        <ul className={`pl-1 hidden`}>
                                                            <li className="flex items-center mt-6">
                                                                <img src={star} className={`flex items-center ${!open && "hidden"}`}></img>
                                                                <a href="#" className={`text-sm ml-3 flex items-center font-bold text-gray tracking-wide capitalize`}>Winner Takes All</a>
                                                            </li>
                                                            <li className={`flex items-center mt-6`}>
                                                                <img src={scissor}></img>
                                                                <a href="#" className="text-sm ml-3 flex items-center font-bold text-gray tracking-wide capitalize whitespace-nowrap">Previous Rounds</a>
                                                            </li>
                                                        </ul>
                                                    </ul>
                                                    {/* <div className="grow"></div> */}
                                                    <div className={`mb-11 w-full px-6 left-0 bottom-0 mt-40`}>
                                                        <div className="flex items-center justify-center w-full">
                                                            <div className="block text-center">
                                                                <div className="text-xs font-bold text-space-gray-rgb mb-4 tracking-wider">Powered By</div>
                                                                <img src={ethereum} className="w-12 h-12"></img>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-center w-full mt-8 mb-11 ">
                                                            <button className="w-full h-12 text-sm rounded-lg tracking-wide font-bold text-light-blue bg-light-blue-rgb hover:bg-light-blue hover:text-yankees-blue">Buy Metakul NFTs</button>
                                                        </div>
                                                        <div className="flex items-center justify-center w-full">
                                                            <img src={opensea} className="hover:text-gray"></img>
                                                            <img src={mevector} className="hover:text-gray ml-5"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="flex-shrink-0 w-14" aria-hidden="true">
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Content area */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    <header className="w-full">
                        <div className="relative z-10 flex-shrink-0 shadow-sm flex">
                            <button
                                type="button"
                                className="px-4 pt-8 text-gray focus:outline-none md:hidden"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-space-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            <div className="flex-1 flex pt-8">
                                <div className="flex-shrink-0 w-full items-center text-gray font-black tracking-wide text-md uppercase flex gap-4">
                                

                                   

                                </div>
                                <div className='bg-yankees-blue rounded-3xl items-center flex cursor-pointer w-max mr-2 sm:mr-0 md:hidden'>
                                    <div className='h-10 text-xs flex justify-items-end justify-end px-1 py-1 items-center'>
                                        <div className='hidden sm:flex md:flex pl-5 pr-6 text-space-gray'>
                                            0xb2e4 ... c945
                                        </div>
                                        <div className='flex w-8 h-8'>
                                            <img src={avatar} />
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-2 flex items-c enter space-x-4 sm:ml-6 sm:space-x-6">
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative flex-shrink-0">
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {/*  {userNavigation.map((item) => (
                                                    <Menu.Item key={item.name}>
                                                        {({ active }) => (
                                                            <a
                                                                href={item.href}
                                                                className={classNames(
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                )}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))} */}
                                                <div className='bg-yankees-blue rounded-3xl items-center flex cursor-pointer'>
                                                    <div className=' px-6 py-3 text-space-gray'>
                                                        0xb2e4 ... c945
                                                    </div>
                                                    <div className='flex pr-2'>
                                                        <img src={avatar} />
                                                    </div>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>

                        </div>
                        <Header></Header>
                    </header>

                    {/* Main content */}
                    <div className="flex-1 flex items-stretch overflow-hidden">
                        <main className="flex-1 overflow-y-auto">
                            {/* Primary column */}
                            <div className="mx-auto mt-12 max-h-screen">
                                <div className="py-8 max-w-7xl w-full pt-6 pb-12 mt-0 mx-auto">
                                    <div className="px-4 sm:px-6 lg:px-8">
                                        <HeroSection></HeroSection>
                                    </div>

                                    <div className="px-5 sm:px-7 lg:px-8 pt-8">
                                        <Routes>
                                            <Route path='/' element={<><NFTPools /><NFTPoolCardList /></>} />
                                            <Route path='/winnertakesall' element={<WinnersRound></WinnersRound>} />
                                            <Route path='/previousrounds' element={<PreviousRounds></PreviousRounds>} />
                                        </Routes>
                                        {/* <NFTPools></NFTPools> */}
                                    </div>
                                </div>
                            </div>
                        </main>

                        {/* Secondary column (hidden on smaller screens) */}


                    </div>
                </div>
            </div>
        </>
    )
}  
