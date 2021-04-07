import React from 'react'
import './Cards.css'
import Button from '../../../Button/Button'

const Banner = () => {
    return (
        <div className='cards-section'>
            <div className="cards-card">
                <h1>BUSINESS CARDS DESIGN</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quibusdam? A brief description of that particular item that we offer.</p>
                <Button path='./catalogue' label='Learn More'/>
            </div>
            <div className="cards-img">
            
            </div>
        </div>
    )
}

export default Banner
