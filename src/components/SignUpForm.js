import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'
function SignUpForm() {
  const key = "6LcsAtwpAAAAAJ_Uc5ANLLQ2I8UxuUMiLCH9s7qz"
  const [captchaisDone, setCapchaisDone] = useState(false)

  function onChange(){
    console.log('changed')
    setCapchaisDone(true)
  }

  return (
    <div className='mt-5'>
      <div className="text-xl font-semibold text-blue_177f9f text-center ml-5">ĐĂNG KÍ TÀI KHOẢN OHECA</div>
      <div className="text-sm text-center font-medium mt-1 ml-5">NHỮNG MỤC CÓ (*) LÀ BẮT BUỘC</div>
      <div className='ml-28 items-center mt-2 w-full '>
        <form>
          <div className='items-center'>
            <div className='flex'>
              <div className='-ml-20'>
                <div>
                  <label className='font-medium text-blue_177f9f'>Họ<span style={{ color: 'red' }}>(*)</span></label>
                </div>
                <div>
                  <input
                    className="bg-blue_d5f8ff placeholder-blue_6bccde w-44 rounded-sm pl-2 py-3"
                    placeholder='Họ'
                    type='text'
                  />
                </div>
              </div>
              <div className='ml-8'>
                <div>
                  <label className='font-medium text-blue_177f9f'>Tên<span style={{ color: 'red' }}>(*)</span></label>
                </div>
                <div>
                  <input
                    className="bg-blue_d5f8ff placeholder-blue_6bccde w-44 rounded-sm pl-2 py-3"
                    placeholder='Tên'
                    type='text'
                  />
                </div>
              </div>
            </div>
            <div className='-ml-20 mt-2'>
              <div>
                <label className='font-medium text-blue_177f9f'>Email<span style={{ color: 'red' }}>(*)</span></label>
              </div>
              <div>
                <input
                  className="bg-blue_d5f8ff placeholder-blue_6bccde w-96 rounded-sm pl-2 py-3"
                  placeholder='Email'
                  type='text'
                />
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
                  type='text'
                />
              </div>
            </div>
            <div className='-ml-20 mt-2'>
              <div>
                <label className='font-medium text-blue_177f9f'>Mật khẩu<span style={{ color: 'red' }}>(*)</span></label>
              </div>
              <div>
                <input
                  className="bg-blue_d5f8ff placeholder-blue_6bccde w-96 rounded-sm pl-2 py-3"
                  placeholder='Mật khẩu'
                  type='password'
                />
              </div>
            </div>
            <div className='-ml-20 mt-2'>
              <div>
                <label className='font-medium text-blue_177f9f'>Nhập lại mật khẩu<span style={{ color: 'red' }}>(*)</span></label>
              </div>
              <div>
                <input
                  className="bg-blue_d5f8ff placeholder-blue_6bccde w-96 rounded-sm pl-2 py-3"
                  placeholder='Nhập lại mật khẩu'
                  type='password'
                />
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
              <button className="bg-blue_6bccde text-white text-center w-full rounded-full py-2 mt-4 hover:scale-110 -ml-24">ĐĂNG KÝ</button>
            </div>
          </div>
        </form>
      </div >
    </div >
  )
}

export default SignUpForm