import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
export default function Form() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const {
    mutate: login,
    isLoading: isLoginLoading,
    error: isError,
  } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(
      {
        email: e.email,
        password: e.password,
      },
      {
        onSuccess: (response) => {
          localStorage.setItem("token", JSON.stringify(response));
          navigate("/home");
          console.log("Thanh cong r");
        },
        onError: () => {
          console.log("That bai r");
        },
      }
    );
  };
  const isValidate = (email) => {
    const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (checkEmail.test(String(email).toLowerCase())) {
      alert("Valid Email !");
    } else {
      alert("Invalid Email !");
    }
  };
  return (
    <div>
      <div>
        <div className="text-3xl font-semibold text-blue_177f9f text-center">
          CHÀO MỪNG
        </div>
        <div className="text-lg text-center font-medium mt-1">
          HÃY ĐĂNG NHẬP ĐỂ TIẾP TỤC
        </div>
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
            type="password"
          />
        </div>
        <div>
          <button
            className="bg-blue_177f9f text-white text-center w-full rounded-full py-2 my-3 hover:brightness-110"
            onClick={isValidate}
          >
            ĐĂNG NHẬP
          </button>
        </div>
        <div className="text-xl">Chưa có tài khoản OHeca? Đăng ký ngay</div>
        <div>
          <button className="bg-blue_6bccde text-white text-center w-full rounded-full py-2 mt-4 hover:brightness-110">
            <Link to="/signup">ĐĂNG KÝ</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
