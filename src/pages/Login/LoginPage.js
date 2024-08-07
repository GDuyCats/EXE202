import React, { useContext } from 'react'
import LoginForm from "../../components/LoginForm/LoginForm";
import backgroundImage from '../../assets/BG.jpg';
import logoImage from '../../assets/Without slogan.png'
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function LoginPage() {
    const { token } = useContext(AuthContext);
    return (
        token
            ?
            <Navigate to="/" />
            :
            <div className="flex w-full h-screen " style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                <img src={logoImage} alt="Logo" style={{ position: 'absolute', top: 10, left: 30, width: '100px', height: '100px' }} />
                <div className="w-full flex  justify-center lg:w-1/2 bg-white items-center">
                    <LoginForm />
                </div>
            </div>
    )
}

export default LoginPage