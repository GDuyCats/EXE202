import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios';
import { useItemStore } from "../../utils/cart";

export default function Form() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { saveToken } = useContext(AuthContext);
  const cartStore = useItemStore()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidate(Email)) {
      return;
    }
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("Email", Email);
      formDataToSend.append("Password", Password);
      const response = await axios.post('https://ohecaa.azurewebsites.net/api/Authentication/Login', formDataToSend);
      if (response.data.success) {
        cartStore.addUserID(response.data?.token?.user?.id)
        saveToken(response.data.token)
        navigate('/');
      } else {
        setError('Đăng nhập thất bại. Vui lòng thử lại.');
      }

    } catch (err) {
      setError(err);
    }
  };

 
  const isValidate = (Email) => {
    const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (checkEmail.test(String(Email).toLowerCase())) {
      return true;
    } else {
      alert("Invalid Email !");
      return false;
    }
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
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <input
            className="bg-blue_d5f8ff placeholder-blue_177f9f w-full rounded-sm pl-5 py-2 mb-5"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            type="Password"
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

// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [Email, setEmail] = useState('');
//   const [Password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://localhost:5001/api/Authentication/Login', {
//         Email: Email,
//         Password: Password,
//       });
//       if (response.data.success) {
//         // Handle successful login, e.g., redirect to another page
//       } else {
//         setError(response.data.message);
//       }
//     } catch (err) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="Email"
//             value={Email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="Password"
//             value={Password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p className="error">{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

