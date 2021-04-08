import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  // FaTwitter,
  // FaLinkedin,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
        </div>
        <div className='footer-link-wrapper'>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              LOVECKYADS
            </Link>
          </div>
          <small className='website-rights'>© 2021 LOVECKYADS. ALL RIGHTS RESERVED.</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={'//www.facebok.com'}
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to={'//www.instagram.com'}
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.google.com'
              }
              target='_blank'
              aria-label='Email'
            >
              <i class="far fa-envelope"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;