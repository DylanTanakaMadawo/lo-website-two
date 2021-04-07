import React ,{ useEffect } from 'react'
import './Hero.css'

const Hero = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className='hero-section'>
            <div className="hero-container">
               <h1 className='hero-header'>For all you Photography, Graphic Designing, Signage, Car Branding, Web Design.</h1>
               <p className='hero-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus tempore esse aut exercitationem obcaecati, et aliquid minus? Quisquam, est fugit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus tempore esse aut exercitationem obcaecati, et aliquid minus?</p>
           </div>
        </div>
    )
}

export default Hero
