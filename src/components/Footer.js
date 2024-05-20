import React from 'react'
import logoimg from '../assets/With slogan.png'
import { SocialIcon } from 'react-social-icons'
import { FaRegCopy } from 'react-icons/fa'
function Footer() {
    return (
        <div className='bg-gradient-to-br from-brightened_blue_00202a to-blue_00202a'>
            <div className='grid grid-cols-3 gap-4'>
                <div>
                    <img src={logoimg} className="w-44 h-44 ml-20 mt-10 m-auto" />
                </div>
                <ul className='text-blue_6bccde text-2xl mt-10'>
                    <li>
                        <p className='text-white text-xl mb-5'>MUA HÀNG</p>
                    </li>
                    <li>
                        <p>THỰC PHẨM CHỨC NĂNG</p>
                    </li>
                    <li>
                        <p>TRANG BỊ THIẾT YẾU</p>
                    </li>
                    <li>
                        <p>TRANG PHỤC</p>
                    </li>
                    <li>
                        <p>PHƯƠNG TIỆN</p>
                    </li>
                    <li>
                        <p>GIẢI TRÍ</p>
                    </li>
                    <li>
                        <p>Y TẾ</p>
                    </li>
                </ul>
                <ul className='text-blue_6bccde text-2xl mt-10'>
                    <li>
                        <p className='text-white text-xl mb-5'>DIỄN ĐÀN</p>
                    </li>
                    <li>
                        <p>REVIEW SẢN PHẨM</p>
                    </li>
                    <li>
                        <p>CHIA SẼ KINH NGHIỆM</p>
                    </li>
                    <li>
                        <p>CÂU TRUYỆN CỦA TÔI</p>
                    </li>
                    <li>
                        <p>Ý KIẾN</p>
                    </li>
                </ul>
                <div></div>
                <div></div>
                <ul className='text-blue_6bccde text-2xl'>
                    <li className='text-white text-xl mb-5'>THÔNG TIN</li>
                    <li className=''>VỀ CHÚNG TÔI</li>
                    <li className=''>PHƯƠNG THỨC LIÊN HỆ</li>
                    <li className=''>GÓP Ý</li>
                </ul>
            </div>
            <div className='ml-20 m-auto flex space-x-5 items-center'>
                <div className='space-x-5 mb-5'>
                    <SocialIcon url="https://www.youtube.com/channel/UCRv3kzozLdAWDexsv-3L3Fg"/>
                    <SocialIcon url="https://www.facebook.com/anemoneno1" />
                    <SocialIcon url="https://www.instagram.com/gduycats" />
                    <SocialIcon url='https://x.com/gduycat' />
                </div>
                <p className='text-blue_6bccde text-2xl mb-8 m-auto'>© 2024-2034 FPT University. All rights reserved.</p>
                
            </div>
        </div>

    )
}

export default Footer