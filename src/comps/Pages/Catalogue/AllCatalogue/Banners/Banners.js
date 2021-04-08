import React, {useEffect} from 'react'
import banner1 from '../../../../../images/images/Banners/banner1.jpg'
import banner2 from '../../../../../images/images/Banners/banner2.jpg'
import banner3 from '../../../../../images/images/Banners/banner3.jpg'
import './Banner.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Button from '../../../../Button/Button'

const Banners = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className='all-banner'>
            <h1 className='header'>X FRAME & PULL UP BANNERS</h1>
            <div className="carousel-container">
                <Carousel infiniteLoop autoPlay>
                    <div className="image">
                        <img 
                            src={banner1} 
                            alt="" 
                            className='carousel-image-container'
                        />
                    </div>
                    <div className="image">
                        <img 
                            src={banner2} 
                            alt="" 
                            className='carousel-image-container'
                        />
                    </div>
                    <div className="image">
                        <img 
                            src={banner3} 
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

export default Banners
