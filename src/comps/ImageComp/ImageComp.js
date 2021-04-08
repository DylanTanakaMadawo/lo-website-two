import React from 'react'
import './ImageComp.css'
import banner1 from '../../images/images/Banners/banner1.jpg'

const ImageComp = () => {
    return (
        <div className='img-wrapper'>
            <img className='the-image' src={banner1} alt=""/>
        </div>
    )
}

export default ImageComp
