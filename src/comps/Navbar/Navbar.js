import React  from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import WebNav from './WebNav'
import MobileNav from './MobileNav'

const Navbar = () => {
    // const [open, setOpen] = useState(false)
    // const closeMobile = () => {
    //     setOpen(false)
    // }
    return (
        <nav className="navbar">
            {/* <div className="logo-container">
                <Link to='/' className='logo-link'><h1>KING</h1></Link>
            </div> */}
            <Link to='/' className='logo-link'><h1>KING</h1></Link>
            <div className="web-nav">
                <WebNav />
            </div>
            <div className="mobile-nav">
                <MobileNav />
            </div>
        </nav>
    )
}

export default Navbar
