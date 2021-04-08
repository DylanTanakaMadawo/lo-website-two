import React  from 'react'
import './Navbar2.css'
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
