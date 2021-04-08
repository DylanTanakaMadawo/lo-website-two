import React from 'react'
import Button from '../../../Button/Button'
import './Flyer.css'
import ImageComp from '../../../ImageComp/ImageComp'
import flyer1 from '../../../../images/images/Flyers/flyer1.jpg'

const Flyer = () => {
    return (
        <div className='flyer-section'>
            <div className="banner-img">
                <ImageComp img={flyer1}/>
            </div>
            <div className="flyer-card">
                <h1>FLYERS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quibusdam? A brief description of that particular item that we offer.</p>
                <Button path='./flyers' label='Learn More'/>
            </div>
        </div>
    )
}

export default Flyer
