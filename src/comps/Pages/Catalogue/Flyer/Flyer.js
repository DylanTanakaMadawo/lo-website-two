import React from 'react'
import Button from '../../../Button/Button'
import './Flyer.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import flyer1 from '../../../../images/images/Flyers/flyer1.jpg'
import flyer2 from '../../../../images/images/Flyers/flyer2.jpg'
import flyer3 from '../../../../images/images/Flyers/flyer3.jpg'

const Flyer = () => {
    return (
        <div className='flyer-container'>
            <div className="flyer-header">
                <h1>FLYERS</h1>
            </div>
            <Carousel infiniteLoop autoPlay>
                <div className="flyer-images">
                    <img src={flyer1} alt="flyer design"/>
                </div>
                <div className="flyer-images">
                    <img src={flyer2} alt="flyer design"/>
                </div>
                <div className="flyer-images">
                    <img src={flyer3} alt="flyer design"/>
                </div>
            </Carousel>
            <div className="flyer-button">
                <Button path='/contact' label='Contact Us'/>
            </div>
        </div>
    )
}

export default Flyer
