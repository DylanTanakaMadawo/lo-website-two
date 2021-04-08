import React, { useState } from 'react'
import './Dropdown.css'
import  { Link } from 'react-router-dom'

const Dropdown = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return (
        <div className='dropdown'>
            <ul 
                onClick={handleClick} 
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                <Link to='/banners' className='dropdown-link'>Banners</Link>
                <Link to='/flyers' className='dropdown-link'>Flyers</Link>
                <Link to='/cards' className='dropdown-link'>Business Cards</Link>
                <Link to='/logos' className='dropdown-link'>Logos</Link>
            </ul>
        </div>
    )
}

export default Dropdown
