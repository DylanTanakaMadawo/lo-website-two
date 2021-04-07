import React from 'react'
import Button from '../../../Button/Button'
import './Flyer.css'

const Flyer = () => {
    return (
        <div className='flyer-section'>
            <div className="flyer-img">
                
            </div>
            <div className="flyer-card">
                <h1>FLYERS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quibusdam? A brief description of that particular item that we offer.</p>
                <Button path='./catalogue' label='Learn More'/>
            </div>
        </div>
    )
}

export default Flyer
