import React, { useEffect } from 'react'
import './Hero2.css'
// import hero1 from '../../../images/images/Home/hero1.jpg'

const Hero2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="hero-section">
            <div className='hero-container'>
                {/* <img src={hero1} alt="hero section of our site"/> */}
                <h1 className='hero-header'>For all you Photography, Graphic Designing, Signage, Car Branding, Web Design.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minima labore odio laborum dolorem repellat distinctio ex itaque cum molestiae.</p>
            </div>
        </div>
        
    )
}

export default Hero2
