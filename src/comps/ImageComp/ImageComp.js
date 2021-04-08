import React from 'react'
import './ImageComp.css'

const ImageComp = ({ img }) => {
    return (
        <div className='img-wrapper'>
            <img className='the-image' src={img} alt=""/>
        </div>
    )
}

export default ImageComp
