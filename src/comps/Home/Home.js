import React from 'react'
// import Hero from './Hero/Hero'
import Hero2 from './Hero2/Hero2'

import './Home.css'
import WhatWeOffer from './WhatWeOffer/WhatWeOffer'

const Home = () => {
    return (
        <div className='home-section'>
           {/* <Hero /> */}
           <Hero2 />
           <WhatWeOffer />
        </div>
    )
}

export default Home
