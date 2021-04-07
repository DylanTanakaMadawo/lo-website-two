import React from 'react'
import Hero from './Hero/Hero'

import './Home.css'
import WhatWeOffer from './WhatWeOffer/WhatWeOffer'

const Home = () => {
    return (
        <div className='home-section'>
           <Hero />
           <WhatWeOffer />
        </div>
    )
}

export default Home
