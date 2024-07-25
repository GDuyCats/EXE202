import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios';
import { useItemStore } from "../../utils/cart";

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { saveToken } = useContext(AuthContext);
  const cartStore = useItemStore()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!isValidEmail(email)) {
      setError("Invalid Email!");
      return;
    }
    
    try {
      const formData = new FormData();
      formData.append("Email", email);
      formData.append("Password", password);

      const response = await axios.post('https://localhost:5001/api/Authentication/Login', formData);
      
      if (response.data.success) {
        cartStore.addUserID(response.data?.token?.user?.id)
        saveToken(response.data.token);
        navigate('/');
      } else {
        setError('Đăng nhập thất bại. Vui lòng thử lại.');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again later.');
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
          >
            ĐĂNG NHẬP
          </button>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div className="text-xl">
          Chưa có tài khoản OHeca? Đăng ký ngay
        </div>
        <div>
          <button className="bg-blue_6bccde text-white text-center w-full rounded-full py-2 mt-4 hover:brightness-110">
            <Link to="/signup">ĐĂNG KÝ</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
