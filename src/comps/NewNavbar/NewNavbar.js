import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import mainlogo from '../../images/images/Logos/mainlogo.png'
import './NewNavbar.css'
import Dropdown from '../Pages/Catalogue/Dropdown/Dropdown'


const NewNavbar = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    // const [open, setOpen] = useState(false)

    const onClick = () => {
        window.innerWidth < 960 ? setDropdown(false) : setDropdown(true)
    }

    const onMouseLeave = () => setDropdown(false)

    // const handleClick = () => setClick(false)
    const handleClick = () => setDropdown(!dropdown)

    const burgerClick = () => setClick(!click)

    const closeMobile = () => {
        setClick(false)
    }
    return (
        <div className='nav-bar'>
            
            <div className="nav-logo">
                <Link to='/'>
                    <img src={mainlogo} alt="website logo"/>
                </Link>
                <Link to='/' className='logo-link'>
                    <h1>KING</h1>
                </Link>
            </div>

            <ul className={click ? 'nav-links-container active' : 'nav-links-container'}>
                <li>
                    <Link 
                        to='/' 
                        className='nav-links'
                        onClick={closeMobile}
                    >
                        Home 
                    </Link>
                </li>

                <li 
                    onClick={onClick} 
                    onClick={handleClick}
                    // onMouseLeave={onMouseLeave}
                >
                    <Link 
                        // to='/catalogue' 
                        className='nav-links'
                        // onClick={closeMobile}
                        
                    >
                        Catalogue <i className='fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                
                <li>
                    <Link 
                        to='/contact' 
                        className='nav-links'
                        onClick={closeMobile}
                    >
                        Contact Us
                    </Link>
                </li>

            </ul>
            <div className="burger" onClick={burgerClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>

        </div>
    )
}

export default NewNavbar
