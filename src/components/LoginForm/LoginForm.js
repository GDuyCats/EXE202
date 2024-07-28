import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios';
import { useItemStore } from "../../utils/cart";

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { saveToken } = useContext(AuthContext);
  const cartStore = useItemStore()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!isValidEmail(email)) {
      setError("Invalid Email!");
      setIsLoading(false);
      return;
    }
    try {
      const formData = new FormData();
      formData.append("Email", email);
      formData.append("Password", password);
      const response = await axios.post('https://ohecaa.azurewebsites.net/api/Authentication/Login', formData);
      if (response.data.success) {
        cartStore.addUserID(response.data?.token?.user?.id)
        saveToken(response.data.token);
        navigate('/');
      } else {
        setError('Đăng nhập thất bại. Vui lòng thử lại.');
        setIsLoading(false);
      }
    } catch (err) {
      setError('An error occurred during login. Please try again later.');
      setIsLoading(false);
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(String(email).toLowerCase());
  };

  return (
    <div>
      <div>
        <div className="text-3xl font-semibold text-blue_177f9f text-center">CHÀO MỪNG</div>
        <div className="text-lg text-center font-medium mt-1">HÃY ĐĂNG NHẬP ĐỂ TIẾP TỤC</div>
      </div>
      <form className="text-lg font-medium" onSubmit={handleSubmit}>
        <div className="mb-5 mt-7">
          <input
            className="bg-blue_d5f8ff placeholder-blue_177f9f w-full rounded-sm pl-5 py-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <input
            className="bg-blue_d5f8ff placeholder-blue_177f9f w-full rounded-sm pl-5 py-2 mb-5"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <div>
          <button
            className="bg-blue_177f9f text-white text-center w-full rounded-full py-2 my-3 hover:brightness-110"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Đang đăng nhập...' : 'ĐĂNG NHẬP'}
          </button>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div className="text-xl">
          Chưa có tài khoản OHeca? Đăng ký ngay
        </div>
        <div>
          <div className="bg-blue_6bccde text-white text-center w-full rounded-full py-2 mt-4 hover:brightness-110">
            <Link to="/signup">ĐĂNG KÝ</Link>
          </div>
        </div>
      </form>
      {isLoading && (
        <div className="flex justify-center mt-4">
          <div class="absolute bg-white bg-opacity-60 top-0 left-0 z-10 h-full w-full flex items-center justify-center">
            <div class="flex items-center">
              <span class="text-5xl mr-4 font-bold text-blue_177f9f">Loading</span>
              <svg class="animate-spin h-10 w-10 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
