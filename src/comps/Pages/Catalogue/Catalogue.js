import React, {useEffect} from 'react'
import Banner from './Banner/Banner'
import Flyer from './Flyer/Flyer'
import Cards from './Cards/Cards'
import Logo from './Logo/Logo'
import './Catalogue.css'

const Catalogue = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className='catalogue-container'>
            <div className="banner">
                <Banner />
            </div>
            <div className="flyer">
                <Flyer />
            </div>
            <div className="cards">
                <Cards />
            </div>
            <div className="logo">
                <Logo />
            </div>
        </div>
    )
}

export default Catalogue
