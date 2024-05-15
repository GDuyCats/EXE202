import React from 'react'
import LoginForm from "../components/LoginForm";
import backgroundImage from '../assets/310543032_782044779573265_2070644959280334700_n.jpg';
import logoImage from '../assets/Without slogan.png'

function LoginPage() {
    return (
        <div className="flex w-full h-screen " style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <img src={logoImage} alt="Logo" style={{ position: 'absolute', top: 10, left: 30, width: '100px', height: '100px' }} />
            <div className="w-full flex  justify-center lg:w-1/2 bg-white items-center">
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage