import React from 'react'
import NFTPoolCard from './NFTPoolCard'

import universe from '../assets/images/universe.jpg'
import nftnews from '../assets/images/nftnews.svg'
export default function NFTPoolCardList() {
  
    const playerJoined=[4,5]
    const totalPlayer = [6, 8]
    return (
        <div className="px-5 sm:px-7 lg:px-8 pt-9 grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2" >
            {/* <NFTPools></NFTPools> */}
            <NFTPoolCard
                name={"A Colourful Conservatory"}
                desc={"The Bored Ape Yacht Club is a Collection of 10 000 unique Bored Ape NFTs - unique digital collectibles."}
                playerJoined={playerJoined[1]}
                totalPlayer={totalPlayer[1]}
                nftnews={nftnews}
            >
            </NFTPoolCard>
            <NFTPoolCard
                name={"An Outerspace Adventure"}
                desc={"The Bored Ape Yacht Club is a Collection of 10 000 unique Bored Ape NFTs - unique digital collectibles."}
                playerJoined={playerJoined[0]}
                totalPlayer={totalPlayer[0]}
                nftnews={universe}
               
            >
            </NFTPoolCard>
            
        </div>
    )
}
