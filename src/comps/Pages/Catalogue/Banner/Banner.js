import React from 'react'
import Button from '../../../Button/Button'
import './Banner.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import banner1 from '../../../../images/images/Banners/banner1.jpg'
import banner2 from '../../../../images/images/Banners/banner2.jpg'
import banner3 from '../../../../images/images/Banners/banner3.jpg'
import banner4 from '../../../../images/images/Banners/banner4.jpg'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="banner-header">
                <h1>BANNERS</h1>
            </div>
            <Carousel infiniteLoop autoPlay>
                <div className="banner-images">
                    <img src={banner1} alt="banner design"/>
                </div>
                <div className="banner-images">
                    <img src={banner2} alt="banner design"/>
                </div>
                <div className="banner-images">
                    <img src={banner3} alt="banner design"/>
                </div>
                <div className="banner-images">
                    <img src={banner4} alt="banner design"/>
                </div>
            </Carousel>
            <div className="banner-button">
                <Button path='/contact' label='Contact Us'/>
            </div>
        </div>
    )
}

export default Banner
