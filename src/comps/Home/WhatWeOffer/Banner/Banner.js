import React from 'react'
import './Banner.css'
import Button from '../../../Button/Button'
import ImageComp from '../../../ImageComp/ImageComp'
import banner1 from '../../../../images/images/Banners/banner1.jpg'

const Banner = () => {
    return (
        <div className='banner-section'>
            <div className="banner-card">
                <h1>X FRAME & PULL UP BANNERS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quibusdam? A brief description of that particular item that we offer.</p>
                <Button path='./catalogue' label='Learn More'/>
            </div>
            <div className="banner-img">
                <ImageComp img={banner1}/>
            </div>
        </div>
    )
}

export default Banner
