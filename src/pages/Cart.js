import React, { useState, useEffect } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Link } from 'react-router-dom'
import logoImage from '../assets/Without slogan.png'
import productImage from '../assets/ensure-gold.jpg'

function Cart() {
    return (
        <div>
            <nav className="p-4 flex justify-between">
                <div>
                    <img src={logoImage} alt="Logo" style={{ position: 'absolute', top: 10, left: 30, width: '100px', height: '100px' }} />
                </div>
                <div class="space-x-4 ml-80">
                    <button class="text-black px-3 py-2 rounded-full text-lg font-medium hover:bg-blue_c0foff "><Link to="/aboutus">VỀ CHÚNG TÔI</Link></button>
                    <button class="text-black px-3 py-2 rounded-full text-lg font-medium hover:bg-blue_c0foff"><Link to="/shop">MUA HÀNG</Link></button>
                    <button class="text-black px-3 py-2 rounded-full text-lg font-medium hover:bg-blue_c0foff" ><Link to="/forum">DIỄN ĐÀN</Link></button>
                    <button class="text-black px-3 py-2 rounded-full text-lg font-medium hover:bg-blue_c0foff"><Link to="/contact">LIÊN HỆ</Link></button>
                </div>
                <div className='flex space-x-10 mr-10'>
                    <div>
                        <button className="text-black px-8 py-2 text-lg font-medium border-2 border-blue_177f9f rounded-full hover:bg-blue_c0foff"><Link to="/signup">ĐĂNG KÝ</Link></button>
                    </div>
                    <div>
                        <button className="text-black px-8 py-2 text-lg font-medium bg-blue_c0foff rounded-full hover:brightness-110"><Link to="/login">ĐĂNG NHẬP</Link></button>
                    </div>
                </div>
            </nav>
            <div className="mt-10 w-full" style={{
                height: 100,
                background: 'linear-gradient(to right, #24b7cf, #18335c)'
            }}>
                <div className="pt-6 ml-2">
                    <button className="text-white bg-blue_073d4d px-6 py-1 text-lg font-medium rounded-full hover:underline flex items-center w-fit"><svg className="text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                        <Link to="/homepage">QUAY VỀ</Link></button>
                </div>
            </div>
            {/* ---------------------------------------------------------------------------------------- */}
            <div className="min-h-screen absolute w-full bg-gradient-to-br from-blue_tl to-blue_br">
                <div className="bg-blue_bg_pd justify-center flex items-center mx-8 my-8">
                    <div className="w-full">
                        <div className="w-full bg-blue_177f9f" style={{
                            height: 60
                        }}>
                            <div className="pt-4 ml-2 flex items-center">
                                <h1 className="text-white text-3xl font-medium">GIỎ HÀNG</h1>
                            </div>
                        </div>
                        <div className="flex min-h-screen items-center justify-center">
                            <svg className="text-blue_buy w-32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <h1 className="text-5xl text-blue_buy">BẠN CHƯA CÓ GÌ TRONG GIỎ HÀNG</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart