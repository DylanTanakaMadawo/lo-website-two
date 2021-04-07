import React from 'react'
import './Navbar.css'
import NavLinks from './NavLinks'

const WebNav = () => {
    return (
        <div>
            <ul className='links-container'>
                <NavLinks />          
            </ul>
        </div>
    )
}

export default WebNav
