import React from 'react'
import { Link } from 'react-router-dom'
import mainlogo from '../../images/images/Logos/mainlogo.png'
import './NewNavbar.css'


const NewNavbar = () => {

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

            <div className="nav-links-container">
                <Link 
                    to='/' 
                    className='nav-links'>Home
                </Link>
                <Link 
                    to='/catalogue' 
                    className='nav-links'>Catalogue
                </Link>
                <Link 
                    to='/contact' 
                    className='nav-links'>Contact Us
                </Link>
            </div>

        </div>
    )
}

export default NewNavbar
