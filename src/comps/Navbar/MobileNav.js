import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import './Navbar.css'
import NavLinks from './NavLinks'

const MobileNav = () => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
    const closeMobile = () => {
        setOpen(false)
    }
    return (
        <div className='mobile-container'>
            <div className="burger">
                {open ? <FaTimes onClick={handleClick}/> : <FaBars onClick={handleClick}/>}
            </div>
            <ul className='links-container'>
                { open && <NavLinks isMobile={true} closeMobile={closeMobile}/> }      
            </ul>
        </div>
    )
}

export default MobileNav
