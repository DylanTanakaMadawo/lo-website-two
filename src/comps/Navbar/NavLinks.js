import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { motion } from 'framer-motion'

const NavLinks = ({ closeMobile, isMobile }) => {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className='nav-links'>
            <Link 
                to='/' 
                className='home link' 
                onClick={() => isMobile && closeMobile()}
            >
                    <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.1}}>Home
                    </motion.li>
            </Link>          
            <Link 
                to='/catalogue' 
                className='catalogue link' 
                onClick={() => isMobile && closeMobile()}
            >
                    <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.2}}>Catalogue
                    </motion.li>
            </Link>          
            {/* <Link 
                to='/about' 
                className='about link' 
                onClick={() => isMobile && closeMobile()}
            >
                    <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.3}}>About
                    </motion.li>
            </Link>           */}
            <Link 
                to='/contact' 
                className='contact-us link' 
                onClick={() => isMobile && closeMobile()}
            >
                    <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.3}}>Contact Us
                    </motion.li>
            </Link> 
        </div>
    )
}

export default NavLinks
