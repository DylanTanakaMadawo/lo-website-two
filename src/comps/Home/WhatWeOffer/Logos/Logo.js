import React from 'react'
import Button from '../../../Button/Button'
import './Logo.css'
import ImageComp from '../../../ImageComp/ImageComp'
import logo2 from '../../../../images/images/Logos/logo2.png'

const Logo = () => {
    return (
        <div className='logo-section'>
            <div className="logo-img">
                <ImageComp img={logo2}/>
            </div>
            <div className="logo-card">
                <h1>BUSINESS / PERSONAL LOGO DESIGNS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quibusdam? A brief description of that particular item that we offer.</p>
                <Button path='./catalogue' label='Learn More'/>
            </div>
        </div>
    )
}

export default Logo
