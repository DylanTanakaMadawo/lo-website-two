import React from 'react'
import Button from '../../../Button/Button'
import './Logo.css'

const Logo = () => {
    return (
        <div className='logo-section'>
            <div className="logo-img">
                
            </div>
            <div className="logo-card">
                <h1>LBUSINESS / PERSONAL LOGO DESIGNS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quibusdam? A brief description of that particular item that we offer.</p>
                <Button path='./catalogue' label='Learn More'/>
            </div>
        </div>
    )
}

export default Logo
