import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function MasonryImages({ images }) {


    const openInNewTab = (url) => {
        const newWindow = window.open(url.image, '_blank', 'noopener', 'noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry columnsCount={3} gutter="10px">
                {images.map((image, i) => (
                    <img key={i} src={image} alt=""
                        onClick={() => openInNewTab({ image })}
                        style={{ width: "100%", display: "block" }}
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}

