import { Box, Button, Card, CardActions, CardContent, CardMedia, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { styled } from '@mui/material/styles';
import player_nft from '../assets/images/player_nft.svg'
import winning_nft from '../assets/images/winning_nft.svg'
import eye from '../assets/images/eye.svg'
import cat_nft from '../assets/images/cat_nft.svg'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#131826',
        color: '#6A7080',
        textTransform: 'uppercase',
        fontWeight: 700,
        fontSize: 12,
        fontFamily: 'montserrat',
        borderBottom: '0px'
    },

    [`&.${tableCellClasses.body}`]: {
        backgroundColor: '#131826',
        fontSize: 14,
    },

}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // '&:nth-of-type(odd)': {
    //     backgroundColor: theme.palette.action.hover,
    //     border: 0,
    // },
    // hide last border
    '&:hover': {
        backgroundColor: "#1C2438",
    },
    '&:last-child td, &:last-child th': {
        border: 0,

    },
    'tr:nth-child td:nth-child(1)': {
        border: 0,
    }

}));


export default function PreviousRounds() {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    return (
        <div className='justify-between block'>
            <div className='flex justify-between mb-8'>
                <div className='text-gray font-black text-2xl tracking-wide'>
                    Previous Rounds
                </div>
                <div className='flex gap-4 '>
                    <button className='bg-nouveau-main bg-opacity-[0.08] rounded-lg px-6 py-3 text-space-gray font-bold'>
                        Game
                    </button>
                    <button className='bg-nouveau-main bg-opacity-[0.08] rounded-lg px-6 py-3 text-space-gray font-bold'>
                        Rules
                    </button>
                </div>

            </div>

            {/* <div className='flex gap-x-2 sm:gap-10 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10 '> */}
            <TableContainer>
                <Table sx={{ border: 'none' }}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Player</StyledTableCell>
                            <StyledTableCell align="left">Winnings</StyledTableCell>
                            <StyledTableCell align="left">FloorPrice</StyledTableCell>
                            <StyledTableCell align="left">Total</StyledTableCell>
                            <StyledTableCell align="left">ROI</StyledTableCell>
                            <StyledTableCell align="left">-</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow >
                            <StyledTableCell sx={{ fontFamily: 'montserrat' }}>
                                <div className='flex gap-4'>
                                    <img src={player_nft} />
                                    <div className='flex items-center text-gray font-bold leading-6'>
                                        imdonatuss
                                    </div>
                                </div>

                            </StyledTableCell>
                            <StyledTableCell>
                                <div className='flex gap-1'>
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                </div>
                            </StyledTableCell>
                            <StyledTableCell sx={{ fontFamily: 'montserrat' }}>
                                <div className='text-space-gray'>
                                    40.00 SOL
                                </div>
                            </StyledTableCell>
                            <StyledTableCell sx={{ fontFamily: 'montserrat' }}>
                                <div className='text-space-gray'>
                                    $ 19.75
                                </div>
                            </StyledTableCell>
                            <StyledTableCell sx={{ fontFamily: 'montserrat' }}>
                                <div className='text-space-gray'>
                                    500%
                                </div>
                            </StyledTableCell>
                            <StyledTableCell>
                                <img src={eye} />
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                            <StyledTableCell sx={{ fontFamily: 'montserrat' }}>
                                <div className='flex gap-4'>
                                    <img src={player_nft} />
                                    <div className='flex items-center text-gray font-bold leading-6'>
                                        imdonatuss
                                    </div>
                                </div>

                            </StyledTableCell>
                            <StyledTableCell>
                                <div className='flex gap-1'>
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                </div>
                            </StyledTableCell>
                            <StyledTableCell sx={{ fontFamily: 'montserrat' }}>
                                <div className='text-space-gray'>
                                    40.00 SOL
                                </div>
                            </StyledTableCell>
                            <StyledTableCell sx={{ fontFamily: 'montserrat' }}>
                                <div className='text-space-gray'>
                                    $ 19.75
                                </div>
                            </StyledTableCell>
                            <StyledTableCell sx={{ fontFamily: 'montserrat' }}>
                                <div className='text-space-gray'>
                                    500%
                                </div>
                            </StyledTableCell>
                            <StyledTableCell>
                                <img src={eye} />
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                            <StyledTableCell sx={{ fontFamily: 'montserrat' }}>
                                <div className='flex gap-4'>
                                    <img src={player_nft} />
                                    <div className='flex items-center text-gray font-bold leading-6'>
                                        imdonatuss
                                    </div>
                                </div>

                            </StyledTableCell>
                            <StyledTableCell>
                                <div className='flex gap-1'>
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                </div>
                            </StyledTableCell>
                            <StyledTableCell sx={{ fontFamily: 'montserrat' }}>
                                <div className='text-space-gray'>
                                    40.00 SOL
                                </div>
                            </StyledTableCell>
                            <StyledTableCell sx={{ fontFamily: 'montserrat' }}>
                                <div className='text-space-gray'>
                                    $ 19.75
                                </div>
                            </StyledTableCell>
                            <StyledTableCell sx={{ fontFamily: 'montserrat' }}>
                                <div className='text-space-gray'>
                                    500%
                                </div>
                            </StyledTableCell>
                            <StyledTableCell>
                                <img src={eye} />
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                            <StyledTableCell sx={{ fontFamily: 'montserrat' }}>
                                <div className='flex gap-4'>
                                    <img src={player_nft} />
                                    <div className='flex items-center text-gray font-bold leading-6'>
                                        imdonatuss
                                    </div>
                                </div>

                            </StyledTableCell>
                            <StyledTableCell>
                                <div className='flex gap-1'>
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                </div>
                            </StyledTableCell>
                            <StyledTableCell sx={{ fontFamily: 'montserrat' }}>
                                <div className='text-space-gray'>
                                    40.00 SOL
                                </div>
                            </StyledTableCell>
                            <StyledTableCell sx={{ fontFamily: 'montserrat' }}>
                                <div className='text-space-gray'>
                                    $ 19.75
                                </div>
                            </StyledTableCell>
                            <StyledTableCell sx={{ fontFamily: 'montserrat' }}>
                                <div className='text-space-gray'>
                                    500%
                                </div>
                            </StyledTableCell>
                            <StyledTableCell>
                                <img src={eye} />
                            </StyledTableCell>
                        </StyledTableRow>
                        {/* {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            </StyledTableRow>
                        ))} */}
                    </TableBody>
                </Table>
            </TableContainer>

            <div className="px-5 sm:px-7 lg:px-8 pt-9 grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                <Card sx={{ maxWidth: 268, backgroundColor: '#1C2438', borderRadius: '24px' }}>

                    <div className='flex justify-center relative'>
                        <img src={cat_nft} />
                    </div>
                    <CardContent sx={{ p: 3 }}>
                        <div>
                            <div className='text-center text-gray font-black text-sm leading-6 tracking-wider'>
                                Roderick Wolfe
                            </div>
                            <div className='flex justify-center mt-4'>
                                <div className='flex gap-1.5'>
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                </div>
                            </div>
                            <div className='mt-6'>
                                <div className='flex justify-between text-space-gray uppercase text-xs tracking-wider text-opacity-[0.56] font-bold'>
                                    <div>
                                        FloorPrice
                                    </div>
                                    <div>
                                        ROI
                                    </div>
                                </div>
                                <div className='flex justify-between text-gray text-sm leading-6 font-semibold tracking-wide mt-1'>
                                    <div>
                                        40.00 SOL
                                    </div>
                                    <div>
                                        500%
                                    </div>
                                </div>

                            </div>
                        </div>

                    </CardContent>
                    <Box sx={{ backgroundColor: ' rgba(39, 49, 75, 0.4)', backdropFilter: 'blur(40px)', px: 3, py: 2, display: 'block', ml: 0 }}>
                        <div className='flex justify-between'>
                            <div >
                                <div className='text-space-gray font-bold text-xs uppercase text-opacity-[0.64] tracking-wider'>
                                    TOTAL
                                </div>
                                <div className='text-gray font-black text-2xl tracking-wide mt-1'>
                                    $ 19.75
                                </div>
                            </div>
                            <div className='flex'>
                                <img src={eye} />
                            </div>
                        </div>

                    </Box>
                </Card>
                <Card sx={{ maxWidth: 268, backgroundColor: '#1C2438', borderRadius: '24px' }}>

                    <div className='flex justify-center relative'>
                        <img src={cat_nft} />
                    </div>
                    <CardContent sx={{ p: 3 }}>
                        <div>
                            <div className='text-center text-gray font-black text-sm leading-6 tracking-wider'>
                                Roderick Wolfe
                            </div>
                            <div className='flex justify-center mt-4'>
                                <div className='flex gap-1.5'>
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                </div>
                            </div>
                            <div className='mt-6'>
                                <div className='flex justify-between text-space-gray uppercase text-xs tracking-wider text-opacity-[0.56] font-bold'>
                                    <div>
                                        FloorPrice
                                    </div>
                                    <div>
                                        ROI
                                    </div>
                                </div>
                                <div className='flex justify-between text-gray text-sm leading-6 font-semibold tracking-wide mt-1'>
                                    <div>
                                        40.00 SOL
                                    </div>
                                    <div>
                                        500%
                                    </div>
                                </div>

                            </div>
                        </div>

                    </CardContent>
                    <Box sx={{ backgroundColor: ' rgba(39, 49, 75, 0.4)', backdropFilter: 'blur(40px)', px: 3, py: 2, display: 'block', ml: 0 }}>
                        <div className='flex justify-between'>
                            <div >
                                <div className='text-space-gray font-bold text-xs uppercase text-opacity-[0.64] tracking-wider'>
                                    TOTAL
                                </div>
                                <div className='text-gray font-black text-2xl tracking-wide mt-1'>
                                    $ 19.75
                                </div>
                            </div>
                            <div className='flex'>
                                <img src={eye} />
                            </div>
                        </div>

                    </Box>
                </Card>
                <Card sx={{ maxWidth: 268, backgroundColor: '#1C2438', borderRadius: '24px' }}>

                    <div className='flex justify-center relative'>
                        <img src={cat_nft} />
                    </div>
                    <CardContent sx={{ p: 3 }}>
                        <div>
                            <div className='text-center text-gray font-black text-sm leading-6 tracking-wider'>
                                Roderick Wolfe
                            </div>
                            <div className='flex justify-center mt-4'>
                                <div className='flex gap-1.5'>
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                </div>
                            </div>
                            <div className='mt-6'>
                                <div className='flex justify-between text-space-gray uppercase text-xs tracking-wider text-opacity-[0.56] font-bold'>
                                    <div>
                                        FloorPrice
                                    </div>
                                    <div>
                                        ROI
                                    </div>
                                </div>
                                <div className='flex justify-between text-gray text-sm leading-6 font-semibold tracking-wide mt-1'>
                                    <div>
                                        40.00 SOL
                                    </div>
                                    <div>
                                        500%
                                    </div>
                                </div>

                            </div>
                        </div>

                    </CardContent>
                    <Box sx={{ backgroundColor: ' rgba(39, 49, 75, 0.4)', backdropFilter: 'blur(40px)', px: 3, py: 2, display: 'block', ml: 0 }}>
                        <div className='flex justify-between'>
                            <div >
                                <div className='text-space-gray font-bold text-xs uppercase text-opacity-[0.64] tracking-wider'>
                                    TOTAL
                                </div>
                                <div className='text-gray font-black text-2xl tracking-wide mt-1'>
                                    $ 19.75
                                </div>
                            </div>
                            <div className='flex'>
                                <img src={eye} />
                            </div>
                        </div>

                    </Box>
                </Card>
                <Card sx={{ maxWidth: 268, backgroundColor: '#1C2438', borderRadius: '24px' }}>

                    <div className='flex justify-center relative'>
                        <img src={cat_nft} />
                    </div>
                    <CardContent sx={{ p: 3 }}>
                        <div>
                            <div className='text-center text-gray font-black text-sm leading-6 tracking-wider'>
                                Roderick Wolfe
                            </div>
                            <div className='flex justify-center mt-4'>
                                <div className='flex gap-1.5'>
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                </div>
                            </div>
                            <div className='mt-6'>
                                <div className='flex justify-between text-space-gray uppercase text-xs tracking-wider text-opacity-[0.56] font-bold'>
                                    <div>
                                        FloorPrice
                                    </div>
                                    <div>
                                        ROI
                                    </div>
                                </div>
                                <div className='flex justify-between text-gray text-sm leading-6 font-semibold tracking-wide mt-1'>
                                    <div>
                                        40.00 SOL
                                    </div>
                                    <div>
                                        500%
                                    </div>
                                </div>

                            </div>
                        </div>

                    </CardContent>
                    <Box sx={{ backgroundColor: ' rgba(39, 49, 75, 0.4)', backdropFilter: 'blur(40px)', px: 3, py: 2, display: 'block', ml: 0 }}>
                        <div className='flex justify-between'>
                            <div >
                                <div className='text-space-gray font-bold text-xs uppercase text-opacity-[0.64] tracking-wider'>
                                    TOTAL
                                </div>
                                <div className='text-gray font-black text-2xl tracking-wide mt-1'>
                                    $ 19.75
                                </div>
                            </div>
                            <div className='flex'>
                                <img src={eye} />
                            </div>
                        </div>

                    </Box>
                </Card>
                <Card sx={{ maxWidth: 268, backgroundColor: '#1C2438', borderRadius: '24px' }}>

                    <div className='flex justify-center relative'>
                        <img src={cat_nft} />
                    </div>
                    <CardContent sx={{ p: 3 }}>
                        <div>
                            <div className='text-center text-gray font-black text-sm leading-6 tracking-wider'>
                                Roderick Wolfe
                            </div>
                            <div className='flex justify-center mt-4'>
                                <div className='flex gap-1.5'>
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                </div>
                            </div>
                            <div className='mt-6'>
                                <div className='flex justify-between text-space-gray uppercase text-xs tracking-wider text-opacity-[0.56] font-bold'>
                                    <div>
                                        FloorPrice
                                    </div>
                                    <div>
                                        ROI
                                    </div>
                                </div>
                                <div className='flex justify-between text-gray text-sm leading-6 font-semibold tracking-wide mt-1'>
                                    <div>
                                        40.00 SOL
                                    </div>
                                    <div>
                                        500%
                                    </div>
                                </div>

                            </div>
                        </div>

                    </CardContent>
                    <Box sx={{ backgroundColor: ' rgba(39, 49, 75, 0.4)', backdropFilter: 'blur(40px)', px: 3, py: 2, display: 'block', ml: 0 }}>
                        <div className='flex justify-between'>
                            <div >
                                <div className='text-space-gray font-bold text-xs uppercase text-opacity-[0.64] tracking-wider'>
                                    TOTAL
                                </div>
                                <div className='text-gray font-black text-2xl tracking-wide mt-1'>
                                    $ 19.75
                                </div>
                            </div>
                            <div className='flex'>
                                <img src={eye} />
                            </div>
                        </div>

                    </Box>
                </Card>
                <Card sx={{ maxWidth: 268, backgroundColor: '#1C2438', borderRadius: '24px' }}>

                    <div className='flex justify-center relative'>
                        <img src={cat_nft} />
                    </div>
                    <CardContent sx={{ p: 3 }}>
                        <div>
                            <div className='text-center text-gray font-black text-sm leading-6 tracking-wider'>
                                Roderick Wolfe
                            </div>
                            <div className='flex justify-center mt-4'>
                                <div className='flex gap-1.5'>
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                    <img src={winning_nft} />
                                </div>
                            </div>
                            <div className='mt-6'>
                                <div className='flex justify-between text-space-gray uppercase text-xs tracking-wider text-opacity-[0.56] font-bold'>
                                    <div>
                                        FloorPrice
                                    </div>
                                    <div>
                                        ROI
                                    </div>
                                </div>
                                <div className='flex justify-between text-gray text-sm leading-6 font-semibold tracking-wide mt-1'>
                                    <div>
                                        40.00 SOL
                                    </div>
                                    <div>
                                        500%
                                    </div>
                                </div>

                            </div>
                        </div>

                    </CardContent>
                    <Box sx={{ backgroundColor: ' rgba(39, 49, 75, 0.4)', backdropFilter: 'blur(40px)', px: 3, py: 2, display: 'block', ml: 0 }}>
                        <div className='flex justify-between'>
                            <div >
                                <div className='text-space-gray font-bold text-xs uppercase text-opacity-[0.64] tracking-wider'>
                                    TOTAL
                                </div>
                                <div className='text-gray font-black text-2xl tracking-wide mt-1'>
                                    $ 19.75
                                </div>
                            </div>
                            <div className='flex'>
                                <img src={eye} />
                            </div>
                        </div>

                    </Box>
                </Card>
            </div>

        </div>
    )
}
