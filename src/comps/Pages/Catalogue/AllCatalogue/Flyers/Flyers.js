import React from 'react'
import flyer1 from '../../../../../images/images/Flyers/flyer1.jpg'
import flyer2 from '../../../../../images/images/Flyers/flyer2.jpg'
import flyer3 from '../../../../../images/images/Flyers/flyer3.jpg'
import './Flyers.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Button from '../../../../Button/Button'

const Flyers = () => {
    return (
        <div className='all-flyer'>
            <h1 className='header'>FLYERS</h1>
            <div className="carousel-container">
                <Carousel infiniteLoop autoPlay>
                    <div className="image">
                        <img 
                            src={flyer1} 
                            alt="" 
                            className='carousel-image-container'
                        />
                    </div>
                    <div className="image">
                        <img 
                            src={flyer2} 
                            alt="" 
                            className='carousel-image-container'
                        />
                    </div>
                    <div className="image">
                        <img 
                            src={flyer3} 
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

export default Flyers
