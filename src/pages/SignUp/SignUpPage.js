import React from 'react'
import logoImage from '../../assets/Without slogan.png'
import backgroundImage from '../../assets/BG.jpg';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
function SignUpPage() {
  return (
    <div className="flex w-full h-screen " style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <img src={logoImage} alt="Logo" style={{ position: 'absolute', top: 10, left: 30, width: '100px', height: '100px' }} />
      <div className="w-full flex pt-12y justify-center lg:w-1/2 bg-white">
        <SignUpForm />
      </div>
    </div>

  )
}

export default SignUpPage