import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import BreedCard from '../BreedCard/BreedCard'

export default function MasonryBreedCards({ breedsList, changeImage }) {

    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry columnsCount={3} gutter="10px">
                {
                    breedsList.map((breed, index) =>
                        <BreedCard key={index} breed={breed.name} changeImage={changeImage}
                            style={{ width: "100%", display: "block" }}> </BreedCard>)
                }
            </Masonry>
        </ResponsiveMasonry>
    )
}

