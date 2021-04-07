import React, {useEffect} from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className='contact-section'>
            <div className="contact-wrapper">
                <h1 className='dummy'>Contact Details</h1>
                <h1 className='contact-details-header'>Contact Details</h1>
                <ul className='contact-details-ul'>
                    <li className='contact-list-item'>+263 773 444 543</li>
                    <li className='contact-list-item'>+263 773 444 543</li>
                    <li className='contact-list-item'>+263 773 444 543</li>
                </ul>
                <h1 className="contact-details-header">Email</h1>
                <a href="https://google.com" target='_blank' className="contact-list-item email-link">loveckyAds@web.com</a>
            </div>
        </div>
    )
}

export default Contact
