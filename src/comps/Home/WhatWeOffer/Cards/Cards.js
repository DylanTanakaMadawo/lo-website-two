import React from 'react'
import './Cards.css'
import Button from '../../../Button/Button'
import ImageComp from '../../../ImageComp/ImageComp'
import card1 from '../../../../images/images/BusCards/card1.jpg'

const Banner = () => {
    return (
        <div className='cards-section'>
            <div className="cards-card">
                <h1>BUSINESS CARDS DESIGN</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quibusdam? A brief description of that particular item that we offer.</p>
                <Button path='./cards' label='Learn More'/>
            </div>
            <div className="cards-img">
                <ImageComp img={card1}/>
            </div>
        </div>
    )
}

export default Banner
