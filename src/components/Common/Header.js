import { alpha, Button, Menu, MenuItem, styled } from '@mui/material'
import React from 'react'
import avatar from '../../assets/images/avatar.svg'
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import user from '../../assets/images/user.svg'
import winning from '../../assets/images/winning.svg'

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        backgroundColor: '#27314B',
        borderRadius: '24px',
        marginTop: theme.spacing(1),
        padding: '24px',
        minWidth: 240,
    },
}));

const Menus = styled(MenuItem)`
    padding-left: 0px !important;
    padding-top: 20px !important;
`


export default function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='flex justify-between items-center mt-11 sm:mt-11 md:mt-0 lg:mt-0 mx-2 '>
            <div className='flex gap-6'>
                <div className='gap-4 items-center flex'>
                    <div className='text-light-gray uppercase text-sm font-semibold'>
                        Eth / usd
                    </div>
                    <div>
                        <span className='text-light-green text-sm font-bold'>
                            $
                        </span>
                        <span className='text-gray text-sm font-bold'>
                           1800.06
                        </span>
                    </div>
                </div>
                <div className='items-center  flex gap-4  hidden md:block'>
                    <div className='text-light-gray text-sm font-semibold'>
                        GAS PRICE
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='text-gray text-sm font-semibold'>
                            12Gwei 
                        </div>
                        <span className='uppercase text-light-blue'>
                            ($0.31)
                        </span>
                    </div>
                </div>
             
            </div>
            <Button
                className=" "
                id="demo-customized-button"
                aria-controls={open }
                aria-haspopup="true"
                aria-expanded={'true' }
                // variant="contained"
                disableElevation
                onClick={handleClick}
                sx={{
                    '&:hover': {
                        background: "none",
                    },
                }}>
                <div className='bg-yankees-blue rounded-3xl items-center  cursor-pointer w-max mr-2 sm:mr-0  '>
                    <div className='h-10 text-xs flex justify-items-end justify-end px-1 py-1 items-center'>
                        <div className=' flex pl-5 pr-6 text-space-gray'>
                            B134 ... c945
                        </div>
                        <div className='flex w-8 h-8'>
                            <img src={avatar} />
                        </div>
                    </div>
                </div>
            </Button>

            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <div className='text-gray font-black text-sm tracking-wide pb-9'>
                    Hi Rolly893!
                </div>
                {/* <Menus onClick={handleClose} disableRipple
                    sx={{
                        '&:hover': {
                            background: "#1C2438",
                        },
                    }}>
                    <EditIcon />
                    Edit
                </Menus> */}
                <div className='py-5 -ml-3 hover:bg-yankees-blue hover:bg-opacity-50 hover:rounded-lg cursor-pointer hover:text-gray'>
                    <div className='text-space-gray flex gap-2 ml-3'>
                        {/* <img src={user} /> */}
                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 21V19.75C1 17.4294 1.94821 15.2038 3.63604 13.5628C5.32387 11.9219 7.61305 11 10 11V11C12.3869 11 14.6761 11.9219 16.364 13.5628C18.0518 15.2038 19 17.4294 19 19.75V21M10 11C11.364 11 12.6721 10.4732 13.6365 9.53553C14.601 8.59785 15.1429 7.32608 15.1429 6C15.1429 4.67392 14.601 3.40215 13.6365 2.46447C12.6721 1.52678 11.364 1 10 1C8.63603 1 7.32792 1.52678 6.36345 2.46447C5.39898 3.40215 4.85714 4.67392 4.85714 6C4.85714 7.32608 5.39898 8.59785 6.36345 9.53553C7.32792 10.4732 8.63603 11 10 11V11Z" stroke="#6A7080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <div className=''>
                            Profile
                        </div>
                    </div>
                </div>
                <div className='py-5 -ml-3 hover:bg-yankees-blue hover:bg-opacity-50 hover:rounded-lg cursor-pointer hover:text-gray'>
                    <div className='text-space-gray flex gap-2 ml-3'>
                        <svg width="22" height="22" className='text-space-gray' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4657 1.34069C10.5131 1.23891 10.5885 1.15278 10.6832 1.09242C10.7778 1.03206 10.8877 1 11 1C11.1123 1 11.2222 1.03206 11.3168 1.09242C11.4115 1.15278 11.4869 1.23891 11.5343 1.34069L14.3471 7.36806C14.4057 7.49351 14.5065 7.59434 14.6319 7.65288L20.6593 10.4657C20.7611 10.5131 20.8472 10.5885 20.9076 10.6832C20.9679 10.7778 21 10.8877 21 11C21 11.1123 20.9679 11.2222 20.9076 11.3168C20.8472 11.4115 20.7611 11.4869 20.6593 11.5343L14.6319 14.3471C14.5065 14.4057 14.4057 14.5065 14.3471 14.6319L11.5343 20.6593C11.4869 20.7611 11.4115 20.8472 11.3168 20.9076C11.2222 20.9679 11.1123 21 11 21C10.8877 21 10.7778 20.9679 10.6832 20.9076C10.5885 20.8472 10.5131 20.7611 10.4657 20.6593L7.65288 14.6319C7.59434 14.5065 7.49351 14.4057 7.36806 14.3471L1.34069 11.5343C1.23891 11.4869 1.15278 11.4115 1.09242 11.3168C1.03206 11.2222 1 11.1123 1 11C1 10.8877 1.03206 10.7778 1.09242 10.6832C1.15278 10.5885 1.23891 10.5131 1.34069 10.4657L7.36806 7.65288C7.49351 7.59434 7.59434 7.49351 7.65288 7.36806L10.4657 1.34069Z" stroke="#579AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <div className=''>
                            Winning
                        </div>
                    </div>
                </div>

                <div className='py-5 -ml-3 hover:bg-yankees-blue hover:bg-opacity-50 hover:rounded-lg cursor-pointer hover:text-gray'>
                    <div className='text-space-gray flex gap-2 ml-3'>
                        {/* <img src={user} /> */}
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 21V18C1 16.1435 1.7375 14.363 3.05025 13.0503C4.36301 11.7375 6.14348 11 8 11C9.85652 11 11.637 11.7375 12.9497 13.0503C14.2625 14.363 15 16.1435 15 18V21" stroke="#6A7080" strokeWidth="2" strokeLinecap="round" />
                            <path d="M13 13C13 11.6739 13.5268 10.4021 14.4645 9.46447C15.4021 8.52678 16.6739 8 18 8C18.6566 8 19.3068 8.12933 19.9134 8.3806C20.52 8.63188 21.0712 9.00017 21.5355 9.46447C21.9998 9.92876 22.3681 10.48 22.6194 11.0866C22.8707 11.6932 23 12.3434 23 13V14" stroke="#6A7080" strokeWidth="2" strokeLinecap="round" />
                            <path d="M8 10C9.06087 10 10.0783 9.57857 10.8284 8.82843C11.5786 8.07828 12 7.06087 12 6C12 4.93913 11.5786 3.92172 10.8284 3.17157C10.0783 2.42143 9.06087 2 8 2C6.93913 2 5.92172 2.42143 5.17157 3.17157C4.42143 3.92172 4 4.93913 4 6C4 7.06087 4.42143 8.07828 5.17157 8.82843C5.92172 9.57857 6.93913 10 8 10V10ZM18 7C18.7956 7 19.5587 6.68393 20.1213 6.12132C20.6839 5.55871 21 4.79565 21 4C21 3.20435 20.6839 2.44129 20.1213 1.87868C19.5587 1.31607 18.7956 1 18 1C17.2044 1 16.4413 1.31607 15.8787 1.87868C15.3161 2.44129 15 3.20435 15 4C15 4.79565 15.3161 5.55871 15.8787 6.12132C16.4413 6.68393 17.2044 7 18 7Z" stroke="#6A7080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <div className=''>
                            Referrals
                        </div>
                    </div>
                </div>

                <div className='py-5 -ml-3 hover:bg-yankees-blue hover:bg-opacity-50 hover:rounded-lg cursor-pointer hover:text-gray'>
                    <div className='text-space-gray flex gap-2 ml-3'>
                        {/* <img src={user} /> */}
                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4V10C1 10 1 13 8 13C15 13 15 10 15 10V4" stroke="#6A7080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 19C1 19 1 16 1 16V10M16 21V15M16 15L19 18M16 15L13 18M8 1C15 1 15 4 15 4C15 4 15 7 8 7C1 7 1 4 1 4C1 4 1 1 8 1Z" stroke="#6A7080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <div className=''>
                            Deposits
                        </div>
                    </div>
                </div>

                <div className='py-5 -ml-3 hover:bg-yankees-blue hover:bg-opacity-50 hover:rounded-lg cursor-pointer hover:text-gray'>
                    <div className='text-space-gray flex gap-2 ml-3'>
                        {/* <img src={user} /> */}
                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 14V21M16 21L19 18M16 21L13 18M1 4V10C1 10 1 13 8 13C15 13 15 10 15 10V4" stroke="#6A7080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 19C1 19 1 16 1 16V10M8 1C15 1 15 4 15 4C15 4 15 7 8 7C1 7 1 4 1 4C1 4 1 1 8 1Z" stroke="#6A7080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <div className=''>
                            Withdrawals
                        </div>
                    </div>
                </div>

                <div className='py-5 -ml-3 hover:bg-yankees-blue hover:bg-opacity-50 hover:rounded-lg cursor-pointer hover:text-gray'>
                    <div className='text-space-gray flex gap-2 ml-3'>
                        {/* <img src={user} /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div className=''>
                            Settings
                        </div>
                    </div>
                </div>

                <div className='py-5 -ml-3 hover:bg-yankees-blue hover:bg-opacity-50 hover:rounded-lg cursor-pointer hover:text-gray'>
                    <div className='text-space-gray flex gap-2 ml-3'>
                        {/* <img src={user} /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <div className=''>
                            Log Out
                        </div>
                    </div>
                </div>
            </StyledMenu>
        </div>

    )
}
