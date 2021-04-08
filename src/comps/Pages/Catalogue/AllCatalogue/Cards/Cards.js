import React from 'react'
import card1 from '../../../../../images/images/BusCards/card1.jpg'
import card2 from '../../../../../images/images/BusCards/card2.jpg'
import card3 from '../../../../../images/images/BusCards/card3.jpg'
import './Cards.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Button from '../../../../Button/Button'

const Cards = () => {
    return (
        <div className='all-cards'>
            <h1 className='header'>BUSINESS CARDS DESIGN</h1>
            <div className="carousel-container">
                <Carousel infiniteLoop autoPlay>
                    <div className="image">
                        <img 
                            src={card1} 
                            alt="" 
                            className='carousel-image-container'
                        />
                    </div>
                    <div className="image">
                        <img 
                            src={card2} 
                            alt="" 
                            className='carousel-image-container'
                        />
                    </div>
                    <div className="image">
                        <img 
                            src={card3} 
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

export default Cards
