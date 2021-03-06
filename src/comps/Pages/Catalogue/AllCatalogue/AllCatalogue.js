import React from 'react'
import './AllCatalogue.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import banner1 from '../../../../images/images/Banners/banner1.jpg'
import Button from '../../../Button/Button'

const AllCatalogue = () => {
    return (
        <div className='all-catalogues'>
            <h1 className='header'>Containing the header</h1>
            <div className="carousel-container">
                <Carousel infiniteLoop autoPlay>
                    <div className="image">
                        <img 
                            src={banner1} 
                            alt="" 
                            className='carousel-image-container'
                        />
                    </div>
                    <div className="image">
                        <img 
                            src={banner1} 
                            alt="" 
                            className='carousel-image-container'
                        />
                    </div>
                    <div className="image">
                        <img 
                            src={banner1} 
                            alt="" 
                            className='carousel-image-container'
                        />
                    </div>
                </Carousel>
            </div>
            <Button path='/contact' label='Contact Us'/>
        </div>
    )
}

export default AllCatalogue
