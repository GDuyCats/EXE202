import React from "react"
import { Link } from 'react-router-dom'
export default function Form() {
  return (
    <div className="block">
      <div>
        <div className="text-3xl font-semibold text-blue_for_signin_placeholder text-center">CHÀO MỪNG</div>
        <div className="text-lg text-center font-medium mt-1">HÃY ĐĂNG NHẬP ĐỂ TIẾP TỤC</div>
      </div>
      <div className="text-lg font-medium">
        <div className="mb-5 mt-7">
          <input
            className="bg-teal-100 placeholder-blue_for_signin_placeholder w-full rounded-sm pl-5 py-2"
            placeholder="Email"
            type="text"
          />
        </div>
        <div>
          <input
            className="bg-teal-100 placeholder-blue_for_signin_placeholder w-full rounded-sm pl-5 py-2 mb-5"
            placeholder="Password"
            type="password"
          />
        </div>
        <div>
          <button className="bg-blue_for_signin_placeholder text-white text-center w-full rounded-full py-2 my-3 hover:animate-bounce">ĐĂNG NHẬP</button>
        </div>
        <div className="text-xl">
            Chưa có tài khoản OHeca? Đăng ký ngay
        </div>
        <div>
          <button className="bg-blue_for_signup text-white text-center w-full rounded-full py-2 mt-4 hover:animate-bounce"><Link to="/signup">ĐĂNG KÝ</Link></button>
        </div>
      </div>
    </div>
  )
}
