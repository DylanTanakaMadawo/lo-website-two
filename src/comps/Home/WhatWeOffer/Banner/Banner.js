import React from 'react'
import './Banner.css'
import Button from '../../../Button/Button'

const Banner = () => {
    return (
        <div className='banner-section'>
            <div className="banner-card">
                <h1>Name of the Item that we offer(BANNERS)</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quibusdam? A brief description of that particular item that we offer.</p>
                <Button path='./catalogue' label='Learn More'/>
            </div>
            <div className="banner-img">
            
            </div>
        </div>
    )
}

export default Banner
