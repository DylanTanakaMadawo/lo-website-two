import React, {useEffect} from 'react'
import logo1 from '../../../../../images/images/Logos/logo1.jpg'
import logo2 from '../../../../../images/images/Logos/logo2.png'
import logo3 from '../../../../../images/images/Logos/logo3.png'
import './Logo.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Button from '../../../../Button/Button'

const Logos = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className='all-logos'>
            <h1 className='header'>BUSINESS / PERSONAL LOGO DESIGNS</h1>
            <div className="carousel-container">
                <Carousel infiniteLoop autoPlay>
                    <div className="image">
                        <img 
                            src={logo1} 
                            alt="" 
                            className='carousel-image-container'
                        />
                    </div>
                    <div className="image">
                        <img 
                            src={logo2} 
                            alt="" 
                            className='carousel-image-container'
                        />
                    </div>
                    <div className="image">
                        <img 
                            src={logo3} 
                            alt="" 
                            className='carousel-image-container'
                        />
                    </div>
                </Carousel>
            </div>
            <Button path='/contact' label='Contact Us'/>
        </div>
    )
}

export default Logos
