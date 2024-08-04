import React from 'react'
import logoImage from '../../assets/Without slogan.png'
import { SocialIcon } from 'react-social-icons'
import logoPhone from '../../assets/PHONE.png'
import logoAddress from '../../assets/ADDRESS.png'
import logoMail from '../../assets/MAIL.png'
function Contact() {
  return (
    <>
      <div className="w-full" style={{
        height: 100,
        background: 'linear-gradient(to right, #24b7cf, #18335c)'
      }}>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-blue_tl to-blue_br py-1">
        <div className="bg-blue_bg_pd justify-center min-h-screen mx-8 my-8">
          <div className="flex items-center justify-center pt-10">
            <img src={logoImage} />
          </div>
          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold text-blue_073d4d">Chúng tôi mong muốn được nghe những phản hồi từ quý khách.</h2>
            <h2 className="text-2xl font-semibold text-blue_073d4d">Vui lòng liên lạc với chúng tôi thông qua các phương pháp sau: </h2>
          </div>
          <div className="flex ml-24 mt-10 items-center">
            <SocialIcon url="https://www.facebook.com/profile.php?id=61559928926173" />
            <div>
              <h1 className="text-3xl font-semibold text-blue_3B5B9B ml-5 mt-5">FACEBOOK</h1>
              <div className="flex items-center">
                <h2 className="text-2xl font-semibold text-blue_073d4d ml-5">Truy cập fanpage OHeCa:</h2>
                <a href="https://www.facebook.com/profile.php?id=61559928926173" target="_blank" rel="noopener noreferrer">
                  <h2 className="text-2xl font-semibold text-blue_073d4d ml-2 hover:underline">OHeCa Fanpage</h2>
                </a>
              </div>
            </div>
          </div>

          <div className="flex ml-24 mt-10 items-center">
            <img src={logoPhone} className="w-[50px] h-[50px]" />
            <div>
              <h1 className="text-3xl font-semibold text-green_009733 ml-5 mt-5">SỐ ĐIỆN THOẠI</h1>
              <div className="flex items-center">
                <h2 className="text-2xl font-semibold text-blue_073d4d ml-5">0373899437</h2>
              </div>
            </div>
          </div>
          <div className="flex ml-24 mt-10 items-center">
          <img src={logoMail} className="w-[50px] h-[50px]" />
            <div>
              <h1 className="text-3xl font-semibold text-red_d80000 ml-5 mt-5">EMAIL</h1>
              <div className="flex items-center">
                <h2 className="text-2xl font-semibold text-blue_073d4d ml-5">ohecafptu@gmail.com</h2>
              </div>
            </div>
          </div>
          <div className="flex ml-24 mt-10 items-center pb-20">
          <img src={logoAddress} className="w-[50px] h-[50px]" />
            <div>
              <h1 className="text-3xl font-semibold text-yellow_aa8e00 ml-5 mt-5">ĐỊA CHỈ</h1>
              <div className="flex items-center">
                <h2 className="text-2xl font-semibold text-blue_073d4d ml-5">Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Hồ Chí Minh 700000</h2>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact