import React from 'react'
import Button from '../../../Button/Button'
import './Logo.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import logo2 from '../../../../images/images/Logos/logo2.png'
import logo3 from '../../../../images/images/Logos/logo3.png'


const Logo = () => {
    return (
        <div className='logo-container'>
            <div className="logo-header">
                <h1>LOGOS</h1>
            </div>
            <Carousel infiniteLoop autoPlay>
                <div className="logo-images">
                    <img src={logo2} alt="logo design"/>
                </div>
                <div className="logo-images">
                    <img src={logo3} alt="logo design"/>
                </div>
            </Carousel>
            <div className="logo-button">
                <Button path='/contact' label='Contact Us'/>
            </div>
        </div>
    )
}

export default Logo
