import React from 'react'
import Button from '../../../Button/Button'
import './Cards.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import card1 from '../../../../images/images/BusCards/card1.jpg'
import card2 from '../../../../images/images/BusCards/card2.jpg'
import card3 from '../../../../images/images/BusCards/card3.jpg'


const Card = () => {
    return (
        <div className='card-container'>
            <div className="card-header">
                <h1>BUSINESS CARDS</h1>
            </div>
            <Carousel infiniteLoop autoPlay>
                <div className="card-images">
                    <img src={card1} alt="card design"/>
                </div>
                <div className="card-images">
                    <img src={card2} alt="card design"/>
                </div>
                <div className="card-images">
                    <img src={card3} alt="card design"/>
                </div>
            </Carousel>
            <div className="card-button">
                <Button path='/contact' label='Contact Us'/>
            </div>
        </div>
    )
}

export default Card
