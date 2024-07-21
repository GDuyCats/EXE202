import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SwaggerUI from 'swagger-ui-react'
import axios from 'axios'
import 'swagger-ui-react/swagger-ui.css'
import ReCAPTCHA from 'react-google-recaptcha'

function SignUpForm() {
  const key = "6LcsAtwpAAAAAJ_Uc5ANLLQ2I8UxuUMiLCH9s7qz"
  const [captchaisDone, setCapchaisDone] = useState(false)
  const navigate = useNavigate();

  function onChange() {
    setCapchaisDone(true)
  }

  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [avatar, setAvatar] = useState(null);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [firstnameError, setFirstnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (password !== confirmPassword) {
      setMessage('*Mật khẩu và mật khẩu xác nhận không khớp');
      setPasswordError(true);
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phone);
    formData.append('gender', gender);
    if (avatar) {
      formData.append('avatar', avatar);
    }

    try {
      const response = await axios.post('https://localhost:5001/api/Authentication/Register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/login');
    } catch (error) {
      setMessage('Đăng kí thất bại');
      setIsSubmitting(false);
    }
  };

  const handleBlurLastname = () => {
    if (!lastname) {
      setLastnameError(true);
    } else {
      setLastnameError(false);
    }
  };

  const handleBlurFirstname = () => {
    if (!firstname) {
      setFirstnameError(true);
    } else {
      setFirstnameError(false);
    }
  };

  const handleBlurEmail = () => {
    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  return (
    <div className='mt-5'>
      <div className="text-xl font-semibold text-blue_177f9f text-center ml-5">ĐĂNG KÍ TÀI KHOẢN OHECA</div>
      <div className="text-sm text-center font-medium mt-1 ml-5">NHỮNG MỤC CÓ (*) LÀ BẮT BUỘC</div>
      <div className='ml-28 items-center mt-2 w-full'>
        <form onSubmit={handleSubmit}>
          <div className='items-center'>
            <div className='flex'>
              <div className='-ml-20'>
                <div>
                  <label className='font-medium text-blue_177f9f'>Họ<span style={{ color: 'red' }}>(*)</span></label>
                </div>
                <div>
                  <input
                    className={`bg-blue_d5f8ff placeholder-blue_6bccde w-44 rounded-sm pl-2 py-3 ${lastnameError ? 'border-red-500 border' : ''}`}
                    placeholder='Họ'
                    type='text'
                    value={lastname} onChange={(e) => setLastname(e.target.value)}
                    onBlur={handleBlurLastname}
                  />
                  {lastnameError && <div className="text-red-500 text-xs">Không được để trống</div>}
                </div>
              </div>
              <div className='ml-8'>
                <div>
                  <label className='font-medium text-blue_177f9f'>Tên<span style={{ color: 'red' }}>(*)</span></label>
                </div>
                <div>
                  <input
                    className={`bg-blue_d5f8ff placeholder-blue_6bccde w-44 rounded-sm pl-2 py-3 ${firstnameError ? 'border-red-500 border' : ''}`}
                    placeholder='Tên'
                    type='text'
                    value={firstname} onChange={(e) => setFirstname(e.target.value)}
                    onBlur={handleBlurFirstname}
                  />
                  {firstnameError && <div className="text-red-500 text-xs">Không được để trống</div>}
                </div>
              </div>
            </div>
            <div className='-ml-20 mt-2'>
              <div>
                <label className='font-medium text-blue_177f9f'>Email<span style={{ color: 'red' }}>(*)</span></label>
              </div>
              <div>
                <input
                  className={`bg-blue_d5f8ff placeholder-blue_6bccde w-96 rounded-sm pl-2 py-3 ${emailError ? 'border-red-500 border' : ''}`}
                  placeholder='Email'
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  type='text'
                  onBlur={handleBlurEmail}
                />
                {emailError && <div className="text-red-500 text-xs">Không được để trống</div>}
              </div>
            </div>
            <div className='-ml-20 mt-2'>
              <div>
                <label className='font-medium text-blue_177f9f'>Số điện thoại</label>
              </div>
              <div>
                <input
                  className="bg-blue_d5f8ff placeholder-blue_6bccde w-96 rounded-sm pl-2 py-3"
                  placeholder='SDT'
                  value={phone} onChange={(e) => setPhone(e.target.value)}
                  type='text'
                />
              </div>
            </div>
            <div className='-ml-20 mt-2'>
              <div>
                <label className='font-medium text-blue_177f9f'>Giới tính</label>
              </div>
              <div>
                <select
                  className="bg-blue_d5f8ff placeholder-blue_6bccde w-96 rounded-sm pl-2 py-3"
                  value={gender} onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Chọn giới tính</option>
                  <option value="Male">Nam</option>
                  <option value="Female">Nữ</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>
            </div>
            <div className='-ml-20 mt-2'>
              <div>
                <label className='font-medium text-blue_177f9f'>Ảnh đại diện</label>
              </div>
              <div>
                <input
                  className="bg-blue_d5f8ff placeholder-blue_6bccde w-96 rounded-sm pl-2 py-3"
                  type='file'
                  onChange={(e) => setAvatar(e.target.files[0])}
                />
              </div>
            </div>
            <div className='-ml-20 mt-2'>
              <div>
                <label className='font-medium text-blue_177f9f'>Mật khẩu<span style={{ color: 'red' }}>(*)</span></label>
              </div>
              <div>
                <input
                  className={`bg-blue_d5f8ff placeholder-blue_6bccde w-96 rounded-sm pl-2 py-3 ${passwordError ? 'border-red-500 border' : ''}`}
                  placeholder='Mật khẩu'
                  type='password'
                  value={password} onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className='-ml-20 mt-2'>
              <div>
                <label className='font-medium text-blue_177f9f'>Nhập lại mật khẩu<span style={{ color: 'red' }}>(*)</span></label>
              </div>
              <div>
                <input
                  className={`bg-blue_d5f8ff placeholder-blue_6bccde w-96 rounded-sm pl-2 py-3 ${passwordError ? 'border-red-500 border' : ''}`}
                  placeholder='Nhập lại mật khẩu'
                  type='password'
                  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div>
                {message && <p className='mt-2 ml-0 mr-auto text-xs text-red-600'>{message}</p>}
              </div>
              <div className='mt-5 mb-5'>
                <ReCAPTCHA
                  sitekey={key}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className='flex mt-3 -ml-20'>
              <input
                className='w-6 h-6 form-checkbox text-blue_177f9f'
                type='checkbox' />
              <p className='text-xs -mt-1 ml-1'>Tôi đồng ý với các <Link to="/policy"><span className='text-blue_177f9f'> ĐIỀU KHOẢN </span></Link>và<Link to="/useragreement"><span className='text-blue_177f9f'> HỎA THUẬN NGƯỜI DÙNG</span></Link><br />của OHeCa</p>
            </div>
            <div className='flex mt-3 -ml-20'>
              <input
                className='w-6 h-6 form-checkbox text-blue_177f9f'
                type='checkbox' />
              <div className='text-xs -mt-1 ml-1'>Cho phép OHeCa gửi email cho bạn để thông báo về<br /> những sự kiện ưu đãi mới nhất</div>
            </div>
            <div>
              <button
                className="bg-blue_6bccde text-white text-center w-full rounded-full py-2 mt-4 hover:brightness-110 -ml-24"
                type='submit'
                disabled={isSubmitting}
              >
                ĐĂNG KÝ
              </button>
            </div>
            <div>
              <button
                className="bg-blue_6bccde text-white text-center w-full rounded-full py-2 mt-4 hover:brightness-110 -ml-24"
                disabled={isSubmitting}
              >
                <Link to="/login">QUAY VỀ ĐĂNG NHẬP</Link>     
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm
