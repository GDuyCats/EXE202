import React from 'react'
import {Link } from 'react-router-dom'
function SignInAndSignUpButton() {
  return (
    <div className='flex space-x-2 mr-0 ml-auto'>
      <Link to="/signup" className="text-blue_177f9f px-8 py-2 text-lg font-medium border-2 border-blue_177f9f rounded-full hover:bg-blue_c0foff">ĐĂNG KÝ</Link>
      <Link to="/login" className="text-blue_177f9f px-8 py-2 text-lg font-medium bg-blue_c0foff rounded-full hover:brightness-110">ĐĂNG NHẬP</Link>
    </div>
  )
}

export default SignInAndSignUpButton