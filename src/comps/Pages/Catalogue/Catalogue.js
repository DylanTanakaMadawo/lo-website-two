import React, {useEffect} from 'react'
import './Catalogue.css'

const Catalogue = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className='catalogue-container'>
            <h1>Catalogue section</h1>
        </div>
    )
}

export default Catalogue
