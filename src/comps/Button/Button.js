import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({path, label}) => {
    return (
        <div>
            <Link to={path} className='btn'>{label}</Link>
        </div>
    )
}

export default Button
