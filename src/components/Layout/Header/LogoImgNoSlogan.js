import React from 'react'
import logoImage from '../../../assets/Without slogan.png'
import { Link } from 'react-router-dom'
function LogoImg() {
    return (
        <div className='z-50 ml-2 mr-auto'>
            <Link to="/"><img src={logoImage} alt="Logo" className="w-24 h-24" /></Link>
        </div>
    )
}

export default LogoImg