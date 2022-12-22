import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import nft1 from '../../assets/images/nft1.svg'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 720,
    bgcolor: '#1C2438',
    // border: '2px solid #000',
    borderRadius: '24px',
    boxShadow: 24,
    p: 4,
};
export default function PlayNFTModal(props) {
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='flex justify-between'>
                    <div className='text-gray text-xl font-black tracking-wide'>
                        Select the NFT you want to play with
                    </div>
                    <CloseIcon className='text-nouveau-main cursor-pointer' onClick={props.handleClose} />
                </div>
                <div className='mt-10 grid gap-4 grid-cols-4'>
                    <div>
                        <img src={nft1} />
                        <div className='mt-2 text-space-gray text-sm font-semibold tracking-wide text-center'>
                            Soul Dogs #5372
                        </div>
                    </div>
                    <div>
                        <img src={nft1} />
                        <div className='mt-2 text-space-gray text-sm font-semibold tracking-wide text-center'>
                            Soul Dogs #5372
                        </div>
                    </div>
                    <div>
                        <img src={nft1} />
                        <div className='mt-2 text-space-gray text-sm font-semibold tracking-wide text-center'>
                            Soul Dogs #5372
                        </div>
                    </div>
                    <div>
                        <img src={nft1} />
                        <div className='mt-2 text-space-gray text-sm font-semibold tracking-wide text-center'>
                            Soul Dogs #5372
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mt-12'>
                    <button className='bg-light-green uppercase py-3 px-8 rounded-lg text-yankees-blue text-sm leading-6 font-bold'>
                        Play
                    </button>
                </div>
            </Box>
        </Modal>
    )
}
