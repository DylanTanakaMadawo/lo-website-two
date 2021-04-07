import React from 'react'
import Banner from './Banner/Banner'
import Flyer from './Flyer/Flyer'
import Cards from './Cards/Cards'
import './WhatWeOffer.css'
import Logo from './Logos/Logo'
// import banner1 from '../../../images/images/Banners/banner1.jpg'

const WhatWeOffer = () => {
    return (
        <div>
            <Banner />
            <Flyer />
            <Cards />
            <Logo />
        </div>
    )
}

export default WhatWeOffer
